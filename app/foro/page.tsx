import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BackToHomeButton } from "@/components/ui/back-to-home-button"
import { MessageSquare, Newspaper, Lightbulb, HelpCircle, AlertTriangle, Users } from 'lucide-react'

export default function ForoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-900 to-black">
      <div className="container mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <MessageSquare className="h-10 w-10 text-red-500" />
            <span>Foro de The Fire City RP</span>
          </h1>
          <p className="text-xl text-gray-300">Únete a nuestra comunidad y participa en las discusiones</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: <Newspaper className="h-8 w-8" />, title: "Noticias y Anuncios", description: "Mantente al día con las últimas novedades del servidor" },
            { icon: <Users className="h-8 w-8" />, title: "Presentaciones", description: "Preséntate a la comunidad y conoce a otros jugadores" },
            { icon: <MessageSquare className="h-8 w-8" />, title: "Discusión General", description: "Charla sobre cualquier tema relacionado con el servidor" },
            { icon: <Lightbulb className="h-8 w-8" />, title: "Sugerencias", description: "Comparte tus ideas para mejorar el servidor" },
            { icon: <HelpCircle className="h-8 w-8" />, title: "Ayuda y Soporte", description: "Obtén ayuda con problemas técnicos o dudas del juego" },
            { icon: <AlertTriangle className="h-8 w-8" />, title: "Reportes", description: "Reporta jugadores que violen las reglas del servidor" },
          ].map((section, index) => (
            <div key={index} className="group">
              <Card className="relative overflow-hidden border-2 border-red-600 bg-gradient-to-br from-gray-900 to-black transition-transform duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-2">
                    <span className="text-red-500">{section.icon}</span>
                    <span>{section.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{section.description}</p>
                  <Button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white">
                    Ir al foro
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <Card className="mt-8 border-2 border-red-600 bg-gradient-to-br from-gray-900 to-black">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Estadísticas del Foro</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-red-500">15,732</p>
                <p className="text-gray-300">Usuarios</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-red-500">87,456</p>
                <p className="text-gray-300">Temas</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-red-500">543,210</p>
                <p className="text-gray-300">Mensajes</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-red-500">1,234</p>
                <p className="text-gray-300">En línea hoy</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <BackToHomeButton />
      </div>
    </div>
  )
}

