import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BackToHomeButton } from "@/components/ui/back-to-home-button"
import { Download, Monitor, Gamepad2, Rocket } from 'lucide-react'

export default function InstalacionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-900 to-black">
      <div className="container mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Rocket className="h-8 w-8 text-red-500" />
            <span>Centro de Instalación</span>
          </h1>
          <p className="text-xl text-gray-300">Comienza tu aventura en The Fire City RP</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* SAMP Installation Card */}
          <div className="group">
            <Card className="relative overflow-hidden border-2 border-red-600 bg-gradient-to-br from-gray-900 to-black transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Monitor className="h-6 w-6 text-red-500" />
                  Instalación de SA-MP
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Instala el cliente multijugador de San Andreas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="SAMP Installation"
                    width={400}
                    height={200}
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Requisitos Previos</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>GTA: San Andreas instalado</li>
                      <li>2GB de RAM mínimo</li>
                      <li>500MB de espacio libre</li>
                      <li>Conexión a internet estable</li>
                    </ul>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white gap-2">
                    <Download className="h-5 w-5" />
                    Descargar SA-MP 0.3.7
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Launcher Installation Card */}
          <div className="group">
            <Card className="relative overflow-hidden border-2 border-red-600 bg-gradient-to-br from-gray-900 to-black transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Gamepad2 className="h-6 w-6 text-red-500" />
                  Launcher The Fire City
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Nuestro launcher personalizado para una mejor experiencia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Launcher Preview"
                    width={400}
                    height={200}
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Características</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Actualizaciones automáticas</li>
                      <li>Mods preinstalados</li>
                      <li>Conexión con un clic</li>
                      <li>Interfaz personalizada</li>
                    </ul>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white gap-2">
                    <Download className="h-5 w-5" />
                    Descargar Launcher
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Installation Guide */}
        <Card className="mt-8 border-2 border-red-600 bg-gradient-to-br from-gray-900 to-black">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Guía de Instalación</CardTitle>
            <CardDescription className="text-gray-300">
              Sigue estos pasos para comenzar a jugar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-red-600/30 hover:border-red-600 transition-colors">
                <div className="text-red-500 text-2xl font-bold mb-2">01</div>
                <h3 className="text-white font-semibold mb-2">Instala SA-MP</h3>
                <p className="text-gray-300 text-sm">
                  Descarga e instala SA-MP 0.3.7 siguiendo las instrucciones del instalador
                </p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-red-600/30 hover:border-red-600 transition-colors">
                <div className="text-red-500 text-2xl font-bold mb-2">02</div>
                <h3 className="text-white font-semibold mb-2">Instala el Launcher</h3>
                <p className="text-gray-300 text-sm">
                  Descarga nuestro launcher personalizado y sigue el asistente de instalación
                </p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-red-600/30 hover:border-red-600 transition-colors">
                <div className="text-red-500 text-2xl font-bold mb-2">03</div>
                <h3 className="text-white font-semibold mb-2">¡A Jugar!</h3>
                <p className="text-gray-300 text-sm">
                  Abre el launcher, inicia sesión y conecta al servidor con un solo clic
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <BackToHomeButton />
      </div>
    </div>
  )
}

