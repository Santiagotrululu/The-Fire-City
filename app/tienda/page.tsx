import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BackToHomeButton } from "@/components/ui/back-to-home-button"
import { ShoppingBag, Coins, Car, Crown, Check, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function TiendaPage() {
  const vips = [
    { 
      nombre: "VIP Bronce", 
      precio: 5.00,
      beneficios: [
        { nombre: "Canal VIP", incluido: true },
        { nombre: "Ventajas", incluido: false },
        { nombre: "RP", incluido: false },
        { nombre: "Score", incluido: false },
        { nombre: "Privilegios", incluido: false },
        { nombre: "Comandos especiales", incluido: true },
      ]
    },
    { 
      nombre: "VIP Plus", 
      precio: 6.00,
      beneficios: [
        { nombre: "Canal VIP", incluido: true },
        { nombre: "Ventajas", incluido: true },
        { nombre: "RP (50)", incluido: true },
        { nombre: "Score (1k)", incluido: true },
        { nombre: "Privilegios", incluido: false },
        { nombre: "Comandos especiales", incluido: true },
      ]
    },
    { 
      nombre: "VIP Gold", 
      precio: 7.00,
      beneficios: [
        { nombre: "Canal VIP", incluido: true },
        { nombre: "Ventajas", incluido: true },
        { nombre: "RP (100)", incluido: true },
        { nombre: "Score (2k)", incluido: true },
        { nombre: "Privilegios", incluido: true },
        { nombre: "Comandos especiales", incluido: true },
      ]
    },
    { 
      nombre: "VIP Supreme", 
      precio: 8.50,
      beneficios: [
        { nombre: "Canal VIP", incluido: true },
        { nombre: "Ventajas", incluido: true },
        { nombre: "RP (150)", incluido: true },
        { nombre: "Score (3k)", incluido: true },
        { nombre: "Privilegios", incluido: true },
        { nombre: "Comandos especiales", incluido: true },
      ]
    },
  ]

  const coins = [
    { cantidad: 1000, precio: 5 },
    { cantidad: 5000, precio: 20 },
    { cantidad: 10000, precio: 35 },
    { cantidad: 25000, precio: 75 },
    { cantidad: 50000, precio: 125 },
  ]

  const autos = [
    { nombre: "Infernus Custom", precio: 15000, descripcion: "Superdeportivo de alto rendimiento" },
    { nombre: "Sultan RS", precio: 12000, descripcion: "Sedán deportivo tuneado" },
    { nombre: "Hydra", precio: 50000, descripcion: "Jet de combate exclusivo" },
    { nombre: "Monster Truck", precio: 30000, descripcion: "Vehículo todoterreno gigante" },
    { nombre: "Hotring Racer", precio: 20000, descripcion: "Coche de carreras profesional" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-900 to-black">
      <div className="container mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <ShoppingBag className="h-10 w-10 text-red-500" />
            <span>Tienda The Fire City RP</span>
          </h1>
          <p className="text-xl text-gray-300">Mejora tu experiencia con artículos exclusivos</p>
        </div>

        <Tabs defaultValue="vips" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="vips">VIPs</TabsTrigger>
            <TabsTrigger value="coins">Coins</TabsTrigger>
            <TabsTrigger value="autos">Autos Exclusivos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="vips">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {vips.map((vip, index) => (
                <Card key={index} className="bg-gray-900 border-gray-700">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl text-white">{vip.nombre}</CardTitle>
                    <CardDescription className="text-2xl font-bold text-green-400">
                      ${vip.precio} USD
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {vip.beneficios.map((beneficio, i) => (
                        <li key={i} className="flex items-center text-white">
                          {beneficio.incluido ? (
                            <Check className="h-5 w-5 text-green-500 mr-2" />
                          ) : (
                            <X className="h-5 w-5 text-red-500 mr-2" />
                          )}
                          {beneficio.nombre}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6 bg-blue-500 hover:bg-blue-600">
                      Comprar
                    </Button>
                    <p className="text-center text-sm text-gray-400 mt-2">Duración: 1 mes</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="coins">
            <Card className="border-2 border-red-600 bg-gradient-to-br from-gray-900 to-black">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Coins className="h-6 w-6 text-red-500" />
                  Compra de Coins
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Adquiere coins para comprar artículos exclusivos en el servidor
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-3">
                  {coins.map((pack, index) => (
                    <Card key={index} className="bg-gray-800 border-yellow-500">
                      <CardHeader>
                        <CardTitle className="text-xl text-white">{pack.cantidad} Coins</CardTitle>
                        <CardDescription className="text-yellow-400">${pack.precio} USD</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300">Valor: {(pack.cantidad / pack.precio).toFixed(2)} Coins por USD</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="autos">
            <Card className="border-2 border-red-600 bg-gradient-to-br from-gray-900 to-black">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Car className="h-6 w-6 text-red-500" />
                  Autos Exclusivos
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Vehículos únicos para destacar en las calles de San Andreas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-3">
                  {autos.map((auto, index) => (
                    <Card key={index} className="bg-gray-800 border-blue-500">
                      <CardHeader>
                        <CardTitle className="text-xl text-white">{auto.nombre}</CardTitle>
                        <CardDescription className="text-blue-400">{auto.precio} Coins</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300">{auto.descripcion}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <BackToHomeButton />
      </div>
    </div>
  )
}

