import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BackToHomeButton } from "@/components/ui/back-to-home-button"
import { Server, Users, Clock, Shield } from 'lucide-react'

export default function ServidorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-900 to-black">
      <div className="container mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Server className="h-10 w-10 text-red-500" />
            <span>Información del Servidor</span>
          </h1>
          <p className="text-xl text-gray-300">Todo lo que necesitas saber sobre The Fire City RP</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="group">
            <Card className="relative overflow-hidden border-2 border-red-600 bg-gradient-to-br from-gray-900 to-black transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Users className="h-6 w-6 text-red-500" />
                  Estadísticas del Servidor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex justify-between items-center">
                    <span>Jugadores en línea:</span>
                    <span className="text-red-400 font-semibold">247/500</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Récord de jugadores:</span>
                    <span className="text-red-400 font-semibold">498</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Cuentas registradas:</span>
                    <span className="text-red-400 font-semibold">15,732</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="group">
            <Card className="relative overflow-hidden border-2 border-red-600 bg-gradient-to-br from-gray-900 to-black transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Clock className="h-6 w-6 text-red-500" />
                  Horario del Servidor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex justify-between items-center">
                    <span>Zona horaria:</span>
                    <span className="text-red-400 font-semibold">GMT-5</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Hora actual del servidor:</span>
                    <span className="text-red-400 font-semibold">14:30</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Duración del día en el juego:</span>
                    <span className="text-red-400 font-semibold">3 horas reales</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="mt-8 border-2 border-red-600 bg-gradient-to-br from-gray-900 to-black">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <Shield className="h-6 w-6 text-red-500" />
              Reglas del Servidor
            </CardTitle>
            <CardDescription className="text-gray-300">
              Sigue estas reglas para mantener una experiencia de juego agradable para todos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-gray-300 list-disc list-inside">
              <li>Respeta a todos los jugadores y al staff en todo momento</li>
              <li>No uses cheats, hacks o mods no autorizados</li>
              <li>Mantén el roleplay realista y coherente</li>
              <li>No hagas metagaming ni powergaming</li>
              <li>Usa /b para el chat OOC (fuera de personaje)</li>
              <li>No hagas spam ni flood en el chat</li>
              <li>Sigue las instrucciones del staff</li>
            </ul>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Button className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4">
            Conectar al Servidor
          </Button>
        </div>

        <BackToHomeButton />
      </div>
    </div>
  )
}

