"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface PlayerData {
  Nombre_Apellido: string
  Nivel: number
  Experiencia: number
  HorasConectado: number
  Dinero: number
  Banco: number
  FacMiembro: number
  FacRango: number
  Skin: number
  Sexo: number
  Edad: number
  Trabajo1: number
  Trabajo2: number
  Trabajo3: number
}

export default function ProfilePage() {
  const [playerData, setPlayerData] = useState<PlayerData | null>(null)
  const router = useRouter()

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const response = await fetch("/api/player-data")
        if (!response.ok) {
          throw new Error("Failed to fetch player data")
        }
        const data = await response.json()
        setPlayerData(data)
      } catch (error) {
        console.error("Error fetching player data:", error)
        router.push("/auth/login")
      }
    }

    fetchPlayerData()
  }, [router])

  if (!playerData) {
    return <div>Cargando...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-900 to-black p-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-4"
        >
          <Avatar className="h-24 w-24">
            <AvatarImage src={`https://example.com/skins/${playerData.Skin}.png`} />
            <AvatarFallback>
              {playerData.Nombre_Apellido.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold text-white">{playerData.Nombre_Apellido}</h1>
            <p className="text-gray-300">Nivel {playerData.Nivel}</p>
          </div>
        </motion.div>

        <Tabs defaultValue="stats" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="stats">Estadísticas</TabsTrigger>
            <TabsTrigger value="inventory">Inventario</TabsTrigger>
            <TabsTrigger value="jobs">Trabajos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="stats">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="grid gap-4 md:grid-cols-2"
            >
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-red-600">
                <CardHeader>
                  <CardTitle className="text-white">Información Personal</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Nombre:</span>
                    <span className="text-red-400">{playerData.Nombre_Apellido}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Nivel:</span>
                    <span className="text-red-400">{playerData.Nivel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Experiencia:</span>
                    <span className="text-red-400">{playerData.Experiencia}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sexo:</span>
                    <span className="text-red-400">{playerData.Sexo === 1 ? "Masculino" : "Femenino"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Edad:</span>
                    <span className="text-red-400">{playerData.Edad} años</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Skin:</span>
                    <span className="text-red-400">{playerData.Skin}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Facción:</span>
                    <span className="text-red-400">{playerData.FacMiembro ? `Miembro (Rango ${playerData.FacRango})` : "Civil"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tiempo Jugado:</span>
                    <span className="text-red-400">{playerData.HorasConectado} horas</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-red-600">
                <CardHeader>
                  <CardTitle className="text-white">Finanzas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Efectivo:</span>
                    <span className="text-green-400">${playerData.Dinero.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Banco:</span>
                    <span className="text-green-400">${playerData.Banco.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total:</span>
                    <span className="text-green-400">${(playerData.Dinero + playerData.Banco).toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="inventory">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-red-600">
                <CardHeader>
                  <CardTitle className="text-white">Inventario</CardTitle>
                  <CardDescription className="text-gray-400">Tus objetos y pertenencias</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Aquí iría el contenido del inventario */}
                  <p className="text-gray-300">Próximamente...</p>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="jobs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-red-600">
                <CardHeader>
                  <CardTitle className="text-white">Trabajos</CardTitle>
                  <CardDescription className="text-gray-400">Tus trabajos actuales</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    {playerData.Trabajo1 !== 0 && <li>Trabajo 1: {playerData.Trabajo1}</li>}
                    {playerData.Trabajo2 !== 0 && <li>Trabajo 2: {playerData.Trabajo2}</li>}
                    {playerData.Trabajo3 !== 0 && <li>Trabajo 3: {playerData.Trabajo3}</li>}
                    {playerData.Trabajo1 === 0 && playerData.Trabajo2 === 0 && playerData.Trabajo3 === 0 && (
                      <li>No tienes trabajos actualmente</li>
                    )}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

