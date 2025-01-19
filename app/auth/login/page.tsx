"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const formData = new FormData(event.currentTarget)
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Error al iniciar sesión")
      }

      toast.success("¡Inicio de sesión exitoso!")
      router.push("/profile")
    } catch (error) {
      console.error("Error al iniciar sesión:", error)
      setError(error instanceof Error ? error.message : "Error al iniciar sesión. Por favor, intenta de nuevo.")
      toast.error(error instanceof Error ? error.message : "Error al iniciar sesión. Por favor, intenta de nuevo.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-900 to-black p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-gray-900 shadow-lg rounded-lg p-8 space-y-6">
          <h2 className="text-3xl font-bold text-center text-white mb-6">Iniciar Sesión</h2>
          {error && (
            <div className="bg-red-500 text-white p-3 rounded-md mb-4">
              {error}
            </div>
          )}
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="Nombre_Apellido" className="text-white">Nombre de Usuario</Label>
              <Input
                id="Nombre_Apellido"
                name="Nombre_Apellido"
                placeholder="Tu nombre en el servidor"
                required
                disabled={isLoading}
                className="bg-gray-800 text-white border-gray-700 focus:border-red-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="Clave" className="text-white">Contraseña</Label>
              <Input
                id="Clave"
                name="Clave"
                type="password"
                required
                disabled={isLoading}
                className="bg-gray-800 text-white border-gray-700 focus:border-red-500"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-red-600 hover:bg-red-700 text-white transition-colors duration-300"
              disabled={isLoading}
            >
              {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
            </Button>
          </form>
          <p className="text-center text-gray-400 mt-4">
            ¿No tienes una cuenta? <a href="#" className="text-red-400 hover:text-red-300">Regístrate aquí</a>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

