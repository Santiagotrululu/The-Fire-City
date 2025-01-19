import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function RoleplayGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-900 to-black">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Guía de Roleplay</h1>
          <p className="text-xl text-gray-300">The Fire City Roleplay - Tu destino para el mejor RP en SAMP</p>
        </div>

        <Tabs defaultValue="basico" className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="basico">Conceptos Básicos</TabsTrigger>
            <TabsTrigger value="avanzado">Conceptos Avanzados</TabsTrigger>
          </TabsList>
          
          <TabsContent value="basico">
            <Card className="bg-black/60 text-white border-red-600">
              <CardHeader>
                <CardTitle>Conceptos Básicos de Roleplay</CardTitle>
                <CardDescription className="text-gray-300">
                  Fundamentos esenciales para empezar en The Fire City
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>¿Qué es el Roleplay?</AccordionTrigger>
                    <AccordionContent>
                      El Roleplay (RP) es interpretar un personaje en un mundo virtual. En The Fire City, te conviertes en un ciudadano de nuestra ciudad, viviendo una vida alternativa con sus propias historias, trabajos y relaciones.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Comandos Básicos</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>/me - Describe acciones de tu personaje</li>
                        <li>/do - Describe situaciones o estados</li>
                        <li>/b - Chat OOC (fuera de personaje)</li>
                        <li>/ayuda - Menú de comandos disponibles</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Reglas Fundamentales</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Mantén tu personaje realista</li>
                        <li>Respeta el Metagaming (no uses información OOC en IC)</li>
                        <li>Evita el Powergaming (acciones irreales o forzadas)</li>
                        <li>Usa siempre /me y /do apropiadamente</li>
                        <li>Mantén una ortografía correcta</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Creación de Personaje</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Crea una historia de fondo coherente</li>
                        <li>Define la personalidad de tu personaje</li>
                        <li>Establece objetivos realistas</li>
                        <li>Mantén una apariencia acorde a tu rol</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="avanzado">
            <Card className="bg-black/60 text-white border-red-600">
              <CardHeader>
                <CardTitle>Conceptos Avanzados de Roleplay</CardTitle>
                <CardDescription className="text-gray-300">
                  Técnicas y conceptos para jugadores experimentados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Desarrollo de Personaje</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p>El desarrollo de personaje avanzado incluye:</p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Arcos narrativos complejos</li>
                          <li>Traumas y desarrollo psicológico</li>
                          <li>Relaciones profundas con otros personajes</li>
                          <li>Evolución de objetivos y motivaciones</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Técnicas Narrativas</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p>Técnicas avanzadas para mejorar tu roleplay:</p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Descripción detallada de acciones y emociones</li>
                          <li>Uso de lenguaje corporal en /me</li>
                          <li>Creación de tensión dramática</li>
                          <li>Manejo de escenas complejas</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Interacción Social Avanzada</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p>Aspectos avanzados de la interacción:</p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Manipulación y persuasión IC</li>
                          <li>Creación de conflictos realistas</li>
                          <li>Desarrollo de relaciones complejas</li>
                          <li>Manejo de situaciones de poder</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Situaciones Especiales</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p>Manejo de situaciones complejas:</p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Escenas de combate elaboradas</li>
                          <li>Negociaciones y diplomacia</li>
                          <li>Gestión de organizaciones</li>
                          <li>Eventos a gran escala</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>Economía y Negocios</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p>Aspectos avanzados de la economía en RP:</p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Gestión de empresas y negocios</li>
                          <li>Mercado negro y contrabando</li>
                          <li>Inversiones y especulación</li>
                          <li>Redes de contactos comerciales</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

