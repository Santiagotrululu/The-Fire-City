import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { NavMenu } from "@/components/ui/nav-menu"
import { Button } from "@/components/ui/button"
import { Users, Server, Clock, ShieldCheck } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-900 to-black">
      <header className="p-4 bg-black bg-opacity-50">
        <nav className="container mx-auto flex justify-between items-center">
          <Image src="/logo.png" alt="SAMP Server Logo" width={150} height={50} />
          <NavMenu />
        </nav>
      </header>

      <main className="container mx-auto mt-8 px-4">
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Bienvenido a The Fire City Roleplay</h1>
          <p className="text-xl text-gray-200">¡Experimenta la mejor jugabilidad y comunidad en San Andreas Multiplayer!</p>
        </section>

        <Carousel className="mb-12">
          <CarouselContent>
            {[1, 2, 3].map((_, index) => (
              <CarouselItem key={index}>
                <Image src={`/screenshot-${index + 1}.jpg`} alt={`Screenshot ${index + 1}`} width={800} height={450} className="rounded-lg" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <section className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gray-800 border-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-red-500" />
                <span className="text-white">Jugadores en línea</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-red-400">247 / 500</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-6 w-6 text-red-500" />
                <span className="text-white">IP del Servidor</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-red-400">samp.thefirecity.com:7777</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-red-500" />
                <span className="text-white">Hora del Servidor</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-red-400">14:30 GMT-5</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="h-6 w-6 text-red-500" />
                <span className="text-white">Versión del Servidor</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-red-400">v2.5 (Última actualización)</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card className="bg-gray-800 border-red-500">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Información Importante</CardTitle>
              <CardDescription className="text-gray-300">
                Lo que necesitas saber sobre The Fire City RP
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-200">
              <p>
                The Fire City RP es un servidor de roleplay en San Andreas Multiplayer que ofrece una experiencia única y envolvente.
                Nuestro servidor está diseñado para proporcionar la mejor jugabilidad y fomentar una comunidad activa y amigable.
              </p>
              <p>
                Características principales:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Sistema económico realista con múltiples trabajos y oportunidades de negocio</li>
                <li>Facciones legales e ilegales con jerarquías y misiones únicas</li>
                <li>Eventos regulares organizados por el staff y la comunidad</li>
                <li>Sistema de viviendas y propiedades personalizable</li>
                <li>Vehículos exclusivos y sistema de tuneo avanzado</li>
              </ul>
              <p>
                Para comenzar tu aventura en The Fire City RP, descarga nuestro launcher personalizado y únete a nuestro Discord para mantenerte informado sobre las últimas novedades y actualizaciones.
              </p>
            </CardContent>
          </Card>
        </section>

      </main>

      <footer className="bg-black bg-opacity-50 text-white p-4 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 The Fire City Roleplay. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

