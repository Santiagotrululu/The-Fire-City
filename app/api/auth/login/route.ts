import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import jwt from "jsonwebtoken"
import { query } from "@/lib/db"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const Nombre_Apellido = formData.get("Nombre_Apellido") as string
    const Clave = formData.get("Clave") as string

    if (!Nombre_Apellido || !Clave) {
      return NextResponse.json({ error: "Nombre de usuario y contraseña son requeridos" }, { status: 400 })
    }

    const results = await query(
      "SELECT ID, Nombre_Apellido, Clave FROM cuentas WHERE Nombre_Apellido = ?",
      [Nombre_Apellido]
    ) as any[]

    if (results.length === 0) {
      return NextResponse.json({ error: "Usuario no encontrado" }, { status: 401 })
    }

    const user = results[0]

    if (Clave !== user.Clave) {
      return NextResponse.json({ error: "Contraseña incorrecta" }, { status: 401 })
    }

    const token = jwt.sign(
      { id: user.ID, username: user.Nombre_Apellido },
      JWT_SECRET,
      { expiresIn: "24h" }
    )

    cookies().set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 86400 // 24 horas
    })

    return NextResponse.json({
      success: true,
      user: {
        id: user.ID,
        username: user.Nombre_Apellido
      }
    })

  } catch (error) {
    console.error("Error en login:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}

