"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Trophy } from "lucide-react"
import { Header } from "@/components/header"
import { BetSlip } from "@/components/betting/bet-slip"
import { AuthProvider } from "@/contexts/auth-context"
import { BettingProvider } from "@/contexts/betting-context"
import { useBetting } from "@/contexts/betting-context"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Real image URLs for events
const eventImages = {
  football: "https://images.unsplash.com/photo-1508098682722-e99c643e7f0b?q=80&w=600&auto=format",
  basketball: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=600&auto=format",
  tennis: "https://images.unsplash.com/photo-1622279457486-28f993f78ade?q=80&w=600&auto=format",
}

// Betting buttons component to avoid repetition
function BettingButtons({
  eventId,
  eventName,
  options,
}: {
  eventId: string
  eventName: string
  options: { name: string; odds: number }[]
}) {
  const { addBet } = useBetting()

  return (
    <div className="flex gap-2">
      {options.map((option, index) => (
        <Button
          key={index}
          variant="outline"
          size="sm"
          className="text-xs hover:bg-yellow-500 hover:text-black hover:border-yellow-500"
          onClick={() =>
            addBet({
              id: `${eventId}-${index}`,
              event: eventName,
              selection: option.name,
              odds: option.odds,
            })
          }
        >
          {option.odds.toFixed(2)}
        </Button>
      ))}
    </div>
  )
}

function EventosEnVivoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <Header />

      <main className="flex-1 container px-4 py-8">
        <div className="flex items-center mb-6">
          <Link href="/" className="text-yellow-500 mr-2">
            Inicio
          </Link>{" "}
          &gt;
          <span className="ml-2">Eventos en Vivo</span>
        </div>

        <h1 className="text-3xl font-bold mb-8 flex items-center">
          <Trophy className="mr-2 h-6 w-6 text-yellow-500" />
          Eventos en Vivo
        </h1>

        {/* Tabs para diferentes deportes */}
        <Tabs defaultValue="todos" className="mb-8">
          <TabsList className="bg-gray-800">
            <TabsTrigger value="todos">Todos</TabsTrigger>
            <TabsTrigger value="futbol">Fútbol</TabsTrigger>
            <TabsTrigger value="baloncesto">Baloncesto</TabsTrigger>
            <TabsTrigger value="tenis">Tenis</TabsTrigger>
          </TabsList>

          {/* Contenido de todos los deportes */}
          <TabsContent value="todos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Evento 1 */}
              <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-500 transition-colors">
                <div className="relative h-48">
                  <Image
                    src={eventImages.football || "/placeholder.svg"}
                    alt="Real Madrid vs Barcelona"
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                    EN VIVO
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-400">Fútbol - La Liga</span>
                    <span className="text-sm text-gray-400">65'</span>
                  </div>
                  <h3 className="font-medium mb-3">Real Madrid vs Barcelona</h3>
                  <div className="flex justify-between">
                    <BettingButtons
                      eventId="event1"
                      eventName="Real Madrid vs Barcelona"
                      options={[
                        { name: "Real Madrid", odds: 2.1 },
                        { name: "Empate", odds: 3.25 },
                        { name: "Barcelona", odds: 3.5 },
                      ]}
                    />
                    <span className="text-yellow-500 text-sm">+25 mercados</span>
                  </div>
                </div>
              </div>

              {/* Evento 2 */}
              <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-500 transition-colors">
                <div className="relative h-48">
                  <Image
                    src={eventImages.basketball || "/placeholder.svg"}
                    alt="Lakers vs Bulls"
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                    EN VIVO
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-400">Baloncesto - NBA</span>
                    <span className="text-sm text-gray-400">3Q</span>
                  </div>
                  <h3 className="font-medium mb-3">Lakers vs Bulls</h3>
                  <div className="flex justify-between">
                    <BettingButtons
                      eventId="event2"
                      eventName="Lakers vs Bulls"
                      options={[
                        { name: "Lakers", odds: 1.85 },
                        { name: "Bulls", odds: 1.95 },
                      ]}
                    />
                    <span className="text-yellow-500 text-sm">+18 mercados</span>
                  </div>
                </div>
              </div>

              {/* Evento 3 */}
              <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-500 transition-colors">
                <div className="relative h-48">
                  <Image
                    src={eventImages.tennis || "/placeholder.svg"}
                    alt="Nadal vs Djokovic"
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                    EN VIVO
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-400">Tenis - Roland Garros</span>
                    <span className="text-sm text-gray-400">Set 2</span>
                  </div>
                  <h3 className="font-medium mb-3">Nadal vs Djokovic</h3>
                  <div className="flex justify-between">
                    <BettingButtons
                      eventId="event3"
                      eventName="Nadal vs Djokovic"
                      options={[
                        { name: "Nadal", odds: 2.2 },
                        { name: "Djokovic", odds: 1.65 },
                      ]}
                    />
                    <span className="text-yellow-500 text-sm">+12 mercados</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Contenido de fútbol */}
          <TabsContent value="futbol">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Evento 1 */}
              <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-500 transition-colors">
                <div className="relative h-48">
                  <Image
                    src={eventImages.football || "/placeholder.svg"}
                    alt="Real Madrid vs Barcelona"
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                    EN VIVO
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-400">Fútbol - La Liga</span>
                    <span className="text-sm text-gray-400">65'</span>
                  </div>
                  <h3 className="font-medium mb-3">Real Madrid vs Barcelona</h3>
                  <div className="flex justify-between">
                    <BettingButtons
                      eventId="event1"
                      eventName="Real Madrid vs Barcelona"
                      options={[
                        { name: "Real Madrid", odds: 2.1 },
                        { name: "Empate", odds: 3.25 },
                        { name: "Barcelona", odds: 3.5 },
                      ]}
                    />
                    <span className="text-yellow-500 text-sm">+25 mercados</span>
                  </div>
                </div>
              </div>

              {/* Evento 4 */}
              <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-500 transition-colors">
                <div className="relative h-48">
                  <Image
                    src={eventImages.football || "/placeholder.svg"}
                    alt="Liverpool vs Man City"
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                    EN VIVO
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-400">Fútbol - Premier League</span>
                    <span className="text-sm text-gray-400">32'</span>
                  </div>
                  <h3 className="font-medium mb-3">Liverpool vs Man City</h3>
                  <div className="flex justify-between">
                    <BettingButtons
                      eventId="event4"
                      eventName="Liverpool vs Man City"
                      options={[
                        { name: "Liverpool", odds: 2.5 },
                        { name: "Empate", odds: 3.4 },
                        { name: "Man City", odds: 2.8 },
                      ]}
                    />
                    <span className="text-yellow-500 text-sm">+30 mercados</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Contenido de baloncesto */}
          <TabsContent value="baloncesto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Evento 2 */}
              <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-500 transition-colors">
                <div className="relative h-48">
                  <Image
                    src={eventImages.basketball || "/placeholder.svg"}
                    alt="Lakers vs Bulls"
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                    EN VIVO
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-400">Baloncesto - NBA</span>
                    <span className="text-sm text-gray-400">3Q</span>
                  </div>
                  <h3 className="font-medium mb-3">Lakers vs Bulls</h3>
                  <div className="flex justify-between">
                    <BettingButtons
                      eventId="event2"
                      eventName="Lakers vs Bulls"
                      options={[
                        { name: "Lakers", odds: 1.85 },
                        { name: "Bulls", odds: 1.95 },
                      ]}
                    />
                    <span className="text-yellow-500 text-sm">+18 mercados</span>
                  </div>
                </div>
              </div>

              {/* Evento 5 */}
              <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-500 transition-colors">
                <div className="relative h-48">
                  <Image
                    src={eventImages.basketball || "/placeholder.svg"}
                    alt="Celtics vs Warriors"
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                    EN VIVO
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-400">Baloncesto - NBA</span>
                    <span className="text-sm text-gray-400">2Q</span>
                  </div>
                  <h3 className="font-medium mb-3">Celtics vs Warriors</h3>
                  <div className="flex justify-between">
                    <BettingButtons
                      eventId="event5"
                      eventName="Celtics vs Warriors"
                      options={[
                        { name: "Celtics", odds: 1.75 },
                        { name: "Warriors", odds: 2.05 },
                      ]}
                    />
                    <span className="text-yellow-500 text-sm">+15 mercados</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Contenido de tenis */}
          <TabsContent value="tenis">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Evento 3 */}
              <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-500 transition-colors">
                <div className="relative h-48">
                  <Image
                    src={eventImages.tennis || "/placeholder.svg"}
                    alt="Nadal vs Djokovic"
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                    EN VIVO
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-400">Tenis - Roland Garros</span>
                    <span className="text-sm text-gray-400">Set 2</span>
                  </div>
                  <h3 className="font-medium mb-3">Nadal vs Djokovic</h3>
                  <div className="flex justify-between">
                    <BettingButtons
                      eventId="event3"
                      eventName="Nadal vs Djokovic"
                      options={[
                        { name: "Nadal", odds: 2.2 },
                        { name: "Djokovic", odds: 1.65 },
                      ]}
                    />
                    <span className="text-yellow-500 text-sm">+12 mercados</span>
                  </div>
                </div>
              </div>

              {/* Evento 6 */}
              <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-500 transition-colors">
                <div className="relative h-48">
                  <Image
                    src={eventImages.tennis || "/placeholder.svg"}
                    alt="Federer vs Murray"
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                    EN VIVO
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-400">Tenis - Wimbledon</span>
                    <span className="text-sm text-gray-400">Set 1</span>
                  </div>
                  <h3 className="font-medium mb-3">Federer vs Murray</h3>
                  <div className="flex justify-between">
                    <BettingButtons
                      eventId="event6"
                      eventName="Federer vs Murray"
                      options={[
                        { name: "Federer", odds: 1.9 },
                        { name: "Murray", odds: 1.85 },
                      ]}
                    />
                    <span className="text-yellow-500 text-sm">+10 mercados</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Estadísticas en vivo */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Estadísticas en Vivo</h2>

          <div className="bg-gray-800 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900 rounded-lg p-4">
                <h3 className="font-medium mb-3">Real Madrid vs Barcelona</h3>
                <div className="flex justify-between mb-2">
                  <span>Posesión</span>
                  <div className="flex items-center">
                    <span className="mr-2">55% - 45%</span>
                    <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500" style={{ width: "55%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Tiros a puerta</span>
                  <span>7 - 5</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Corners</span>
                  <span>4 - 3</span>
                </div>
                <div className="flex justify-between">
                  <span>Tarjetas</span>
                  <span>2 - 3</span>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4">
                <h3 className="font-medium mb-3">Lakers vs Bulls</h3>
                <div className="flex justify-between mb-2">
                  <span>Puntos</span>
                  <span>68 - 62</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Rebotes</span>
                  <span>24 - 18</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Asistencias</span>
                  <span>15 - 12</span>
                </div>
                <div className="flex justify-between">
                  <span>Faltas</span>
                  <span>8 - 10</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Próximos eventos */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Próximos Eventos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Fútbol - Champions League</span>
                <span className="text-sm text-gray-400">Hoy 21:00</span>
              </div>
              <h3 className="font-medium">Bayern Munich vs PSG</h3>
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Baloncesto - NBA</span>
                <span className="text-sm text-gray-400">Hoy 23:30</span>
              </div>
              <h3 className="font-medium">Nets vs Bucks</h3>
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Tenis - US Open</span>
                <span className="text-sm text-gray-400">Mañana 18:00</span>
              </div>
              <h3 className="font-medium">Alcaraz vs Sinner</h3>
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Fútbol - Serie A</span>
                <span className="text-sm text-gray-400">Mañana 20:45</span>
              </div>
              <h3 className="font-medium">Juventus vs Milan</h3>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container px-4 text-center">
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} LuchoBet. Todos los derechos reservados.</p>
          <p className="text-xs text-gray-400 mt-2">Solo para mayores de 18 años. Juegue con responsabilidad.</p>
        </div>
      </footer>

      <BetSlip />
    </div>
  )
}

export default function EventosEnVivoPageWithProviders() {
  return (
    <AuthProvider>
      <BettingProvider>
        <EventosEnVivoPage />
      </BettingProvider>
    </AuthProvider>
  )
}
