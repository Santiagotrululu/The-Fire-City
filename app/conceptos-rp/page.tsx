import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BackToHomeButton } from "@/components/ui/back-to-home-button"
import { BookOpen } from 'lucide-react'

export default function ConceptosRPPage() {
  const conceptos = [
    { titulo: "DM - (DeathMatch)", descripcion: "Se traduce como \"Combate a muerte\", se define como el asesinato de otro usuario sin ninguna razón valida o lógica en el ámbito de rol, (Como, me debe dinero, peleas callejeras, entre otros), Otra consideración del DM es el matar a un usuario por simple entretenimiento." },
    { titulo: "MG - (Metagaming)", descripcion: "Éste término aplica al obtener información de un medio Out of Channel(OOC) o Fuera de canal para beneficiarse de ella de manera In Character(IC) o dentro de tu personaje." },
    { titulo: "PG - (Powergaming)", descripcion: "El concepto es aplicado a la hora de querer realizar actos que en la vida real serían imposibles bajo cualquier circunstancia." },
    { titulo: "CK - (Car Kill)", descripcion: "Se traduce como \"Matar en auto\", se define como el asesinato de otros usuarios con un coche/moto, pasando el ultimo por arriba hasta la muerte del otro usuario, también se considera CK dejar el coche sobre un usuario causando así su muerte." },
    { titulo: "CJ - (Car Jacked)", descripcion: "Su traducción sería \"Robo de auto\", se define como el robo de un coche sin rol alguno, simplemente presionando la tecla de acción y quitándole el coche a algún usuario." },
    { titulo: "HQ - (Headquarters)", descripcion: "Su traducción sería \"Cuartel general\" , se define como la base central de una facción/familia tanto legal como ilegal, estas \"HQ\" vienen acompañadas con un entorno que es roleado por los miembros de la facción." },
    { titulo: "BD - (Bad Driving)", descripcion: "Su traducción sería \"Conducción mala\", se define como la conducción de manera irreal, chocando contra todo, (Coches, semáforos, postes)." },
    { titulo: "BPC - (Bad Parking Car)", descripcion: "Su traducción sería \"Auto mal aparcado\", se define como el acto de estacionar tú vehículo de forma indebida, como lo sería dejarlo estacionado sobre la acera, césped, mitad de una calle." },
    { titulo: "FLOOD - (Floding)", descripcion: "Su traducción sería \"Inundar o Saturar\", se define como la repetición excesiva de una palabra o frase." },
    { titulo: "SPAM - (Spaming)", descripcion: "Su traducción sería \"Mensaje no deseado\", se define como la promoción de comunidades o servicios ajenos a CL." },
    { titulo: "SK - (Spawn kill)", descripcion: "Su traducción sería \"Muerte al aparecer\", se define como la muerte de un usuario al momento de respawnear en un shopdoor, dónde se es imposible moverse por cuestión de segundos." },
    { titulo: "FK - (Free Kill)", descripcion: "Su traducción sería \"Muertes libres\" se define al acto repetitivo de matanza sin razón valida alguna (Derivado de DM), matando a dos o más users por mero entretenimiento o sin razón." },
    { titulo: "IHQ - (Invade HeadQuarters)", descripcion: "Su traducción sería \"Invadir cuartel general\", se define como el acto de atacar o invadir una HQ (Cuartel General) de una Facción/Familia,ya sea entrando en ella (Invasión) o Atacándola sin seguir las reglas del Servidor." },
    { titulo: "PK - (Player Kill)", descripcion: "Su traducción sería \"Muerte del jugador\",el concepto es tomado más para las facciones ilegales, se define como la perdida de memoria total o parcial de tu personaje." },
    { titulo: "CK2 - (Character Kill)", descripcion: "Su traducción sería \"Muerte al personaje\", se define como la muerte total de tu personaje, sin forma de salvar su vida, como lo son los disparos al cerebro." },
    { titulo: "HK - (Helicopter Kill)", descripcion: "Se podría traducir como \"Muerte con helicoptero\", se define al asesinato de un user utilizando las aspas de un helicóptero." },
    { titulo: "TTO", descripcion: "Se define como rematar a alguien cuando ya está en suelo tumbado." },
    { titulo: "IOOC - (Out of channel/character insults)", descripcion: "Una de sus traducciones sería \"Insultos fuera del personaje/canal\", se define como todo insulto hacia otro user." },
    { titulo: "BA - (Bug Abuse)", descripcion: "\"Abuso de Bug\" se define como el abuso de un bug que de beneficios a un user, ya sea dinero, nivel, armas, entre otras cosas." },
    { titulo: "NA - (Noob Abuse)", descripcion: "\"Abuso de un Novato\", se define como el abusar de un user nuevo en el servidor, ya sea robándole, pidiendo que use comandos para salir beneficiado." },
    { titulo: "AA - (Admin Abuse)", descripcion: "\"Abuso de comandos administrativos\", se define como la utilización de comandos administrativos para beneficio propio o de users." },
    { titulo: "IDS - (Interferir en la dinámica del servidor)", descripcion: "Se define como cambiar la dinámica del servidor, en este caso \"Rol\" estar disparando por todos lados, (DM) o el simple Troll" },
    { titulo: "AIOOC o AI - (Admins Insults)", descripcion: "\"Insultar a un Administrador\", siendo una derivación del \"IOOC\" se define como los insultos hacia los users pertenecientes al Staff." },
    { titulo: "KAD y KHD - (Kill Admin Duty - Kill Helper Duty)", descripcion: "\"Matar administrador en servicio y Matar helper en servicio\",  ambos se definen como el asesinato de un administrador/helper que está brindando servicios a la comunidad." },
    { titulo: "MUD - (Mal utilización del duda)", descripcion: "Se define como utilizar mal el canal (/n o /duda) realizando preguntas indebidas o incorrectas que no tengan nada que ver con la GM (Gamemode) o el servidor en si." },
    { titulo: "RK - (Revenge Kill)", descripcion: "Su traducción sería \"Matar por venganza\", se define volver al lugar dónde mueres y seguir en el tiroteo o matar al asesino." },
    { titulo: "TK - (Team Kill)", descripcion: "Su traducción sería \"Matar al equipo\", se define como disparar a un miembro de tu misma facción sin ningún rol respectivo." },
    { titulo: "MA - (Mal Anuncio)", descripcion: "Se define como la utilización incorrecta del comando para publicar anuncio o poner un anuncio que no cumpla con la normativa de anuncios establecidos por el servidor." },
    { titulo: "NPVJ - (No valorar la vida de tu personaje)", descripcion: "Se define como ignorar por completo la vida de tu personaje realizando cosas que pondrían en peligro sin duda su vida." },
    { titulo: "NRE - (No rol de Entorno)", descripcion: "Se define como no realizar el entorno de una zona/lugar luego de realizar un rol o estando en uno." },
    { titulo: "NRA - (No rol de Arma)", descripcion: "Se define como no realizar el rol de sacar el arma." },
    { titulo: "NRGA - (No rol de guardar arma)", descripcion: "Se define como no realizar el rol de guardar el arma." },
    { titulo: "NRCA - (No rol de cambiar arma)", descripcion: "Se define como no realizar el rol de cambiar arma." },
    { titulo: "NRH - (No rol de heridas)", descripcion: "Se define como no rolear heridas estando en un rol o fuera de él" },
    { titulo: "NRC - (No rolear choque)", descripcion: "Se define como no rolear un choque, por lo mínimo que sea." },
    { titulo: "PI - (Provocación Innecesaria)", descripcion: "Se define como la intención y/o forma de molestar a alguien para que este ya sea le haga MK, Insulte o generar una balacera sin necesidad de que exista.(Perseguir a una patrulla para provocar una persecución innecesaria también cae bajo el concepto de PI)" },
    { titulo: "MK - (MetaKill)", descripcion: "Se define como matar a algún usuario por razones relacionadas con hechos fuera del personaje del usuario." },
    { titulo: "AA2 - (Abuse Animation)", descripcion: "Se define como abusar de una animación para sacar provechos de esta en algún tipo de rol." },
    { titulo: "ZZ - (ZigZag)", descripcion: "En medio de un tiroteo, o te disparan directamente, corres de lado a otro, así esquivando las balas, pero ya tomado de una forma indebida, irreal ya. Nadie es Matrix." },
    { titulo: "DB - (DriveBy)", descripcion: "Disparar con una metralleta/subfusíl (Tec-9, UZI, MP5) desde un vehículo, no como pasajero u acompañante en general, sino siendo el conductor ya." },
    { titulo: "MA2 - (ModAbuse)", descripcion: "Abusar de un cleo mod básicamente, dándote ventaja sobre los demás usuarios." },
    { titulo: "CA - (CommandAbuse)", descripcion: "Abusar de un comando inadecuadamente, un ejemplo sería que secuestran a alguien, y tú tienes un comandos para rastrear personas, y lo rastreas y lo buscas, no; no es válido." },
    { titulo: "LA2 - (LagAbuse)", descripcion: "Abusar de tu propio lag." },
    { titulo: "LA - (LeaderAbuse)", descripcion: "Siendo líder de una facción u familia, abusar de los comandos de esta." },
    { titulo: "BH - (BunnyHop)", descripcion: "Ir saltando para ahorrarte energía y sin cansarte, saltar y saltar, también se puede utilizar para llegar así más rápido a un lugar en concreto." },
    { titulo: "BBH - (BikeBunnyHop)", descripcion: "Abusar del salto que podrías llegar a dar con la bicicleta, ya que alcanza una altura bastante alta, y la realización de esta acción es además sinónimo al PG en sí." },
    { titulo: "VA - (Vip Abuse)", descripcion: "Abusar de ciertos comandos VIP en roles, o no rolearlos debidamente." },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-900 to-black">
      <div className="container mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <BookOpen className="h-10 w-10 text-red-500" />
            <span>Conceptos Generales del RP</span>
          </h1>
          <p className="text-xl text-gray-300">Términos y definiciones importantes para el roleplay en The Fire City</p>
        </div>

        <Card className="border-2 border-red-600 bg-gradient-to-br from-gray-900 to-black">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Glosario de Términos RP</CardTitle>
            <CardDescription className="text-gray-300">
              Familiarízate con estos conceptos para mejorar tu experiencia de roleplay
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[70vh] pr-4">
              <div className="space-y-6">
                {conceptos.map((concepto, index) => (
                  <div key={index} className="border-b border-gray-700 pb-4 last:border-b-0">
                    <h3 className="text-xl font-semibold mb-2 text-red-400">{concepto.titulo}</h3>
                    <p className="text-gray-300">{concepto.descripcion}</p>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        <BackToHomeButton />
      </div>
    </div>
  )
}

