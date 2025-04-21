"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ClubIcon as Football,
  ShoppingBasketIcon as Basketball,
  TurtleIcon as Tennis,
  DogIcon as Horse,
  Trophy,
} from "lucide-react"
import { Header } from "@/components/header"
import { BetSlip } from "@/components/betting/bet-slip"
import { AuthProvider } from "@/contexts/auth-context"
import { BettingProvider } from "@/contexts/betting-context"
import { useBetting } from "@/contexts/betting-context"

// Real image URLs for sports
const sportImages = {
  football: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=400&auto=format",
  basketball: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=400&auto=format",
  tennis: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=400&auto=format",
  horse: "https://images.unsplash.com/photo-1566068256639-2dd0f85a9e6e?q=80&w=400&auto=format",
  boxing: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=400&auto=format",
  esports: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400&auto=format",
}

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

function DeportesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <Header />

      <main className="flex-1 container px-4 py-8">
        <div className="flex items-center mb-6">
          <Link href="/" className="text-yellow-500 mr-2">
            Inicio
          </Link>{" "}
          &gt;
          <span className="ml-2">Deportes</span>
        </div>

        <h1 className="text-3xl font-bold mb-8 flex items-center">
          <Trophy className="mr-2 h-6 w-6 text-yellow-500" />
          Deportes
        </h1>

        {/* Categorías de deportes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Categorías</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* Fútbol */}
            <Link href="/deportes/futbol" className="group">
              <div className="bg-gray-800 rounded-lg overflow-hidden transition-all hover:ring-2 hover:ring-yellow-500">
                <div className="aspect-square relative">
                  <Image
                    src={sportImages.football || "/placeholder.svg"}
                    alt="Fútbol"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Football className="h-12 w-12 text-white group-hover:text-yellow-500 transition-colors" />
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-medium">Fútbol</h3>
                </div>
              </div>
            </Link>

            {/* Baloncesto */}
            <Link href="/deportes/baloncesto" className="group">
              <div className="bg-gray-800 rounded-lg overflow-hidden transition-all hover:ring-2 hover:ring-yellow-500">
                <div className="aspect-square relative">
                  <Image
                    src={sportImages.basketball || "/placeholder.svg"}
                    alt="Baloncesto"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Basketball className="h-12 w-12 text-white group-hover:text-yellow-500 transition-colors" />
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-medium">Baloncesto</h3>
                </div>
              </div>
            </Link>

            {/* Tenis */}
            <Link href="/deportes/tenis" className="group">
              <div className="bg-gray-800 rounded-lg overflow-hidden transition-all hover:ring-2 hover:ring-yellow-500">
                <div className="aspect-square relative">
                  <Image
                    src={sportImages.tennis || "/placeholder.svg"}
                    alt="Tenis"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Tennis className="h-12 w-12 text-white group-hover:text-yellow-500 transition-colors" />
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-medium">Tenis</h3>
                </div>
              </div>
            </Link>

            {/* Carreras de caballos */}
            <Link href="/deportes/caballos" className="group">
              <div className="bg-gray-800 rounded-lg overflow-hidden transition-all hover:ring-2 hover:ring-yellow-500">
                <div className="aspect-square relative">
                  <Image
                    src={sportImages.horse || "/placeholder.svg"}
                    alt="Carreras de caballos"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Horse className="h-12 w-12 text-white group-hover:text-yellow-500 transition-colors" />
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-medium">Caballos</h3>
                </div>
              </div>
            </Link>

            {/* Boxeo */}
            <Link href="/deportes/boxeo" className="group">
              <div className="bg-gray-800 rounded-lg overflow-hidden transition-all hover:ring-2 hover:ring-yellow-500">
                <div className="aspect-square relative">
                  <Image
                    src={sportImages.boxing || "/placeholder.svg"}
                    alt="Boxeo"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-white group-hover:text-yellow-500 transition-colors"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M9 5a2 2 0 0 1 2 2v4l3 3v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3l3-3V7a2 2 0 0 1 2-2z" />
                      <path d="M15 5a2 2 0 0 1 2 2v4l3 3v3a2 2 0 0 1-2 2h-6" />
                    </svg>
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-medium">Boxeo</h3>
                </div>
              </div>
            </Link>

            {/* eSports */}
            <Link href="/deportes/esports" className="group">
              <div className="bg-gray-800 rounded-lg overflow-hidden transition-all hover:ring-2 hover:ring-yellow-500">
                <div className="aspect-square relative">
                  <Image
                    src={sportImages.esports || "/placeholder.svg"}
                    alt="eSports"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-white group-hover:text-yellow-500 transition-colors"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="2" y="6" width="20" height="12" rx="2" />
                      <path d="M12 12h.01" />
                      <path d="M7 12h.01" />
                      <path d="M17 12h.01" />
                    </svg>
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-medium">eSports</h3>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Eventos destacados */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Eventos Destacados</h2>

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
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-400">Fútbol - La Liga</span>
                  <span className="text-sm text-gray-400">Hoy 20:00</span>
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
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-400">Baloncesto - NBA</span>
                  <span className="text-sm text-gray-400">Mañana 02:30</span>
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
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-400">Tenis - Roland Garros</span>
                  <span className="text-sm text-gray-400">Mañana 14:00</span>
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
        </section>

        {/* Competiciones populares */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Competiciones Populares</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/deportes/futbol/la-liga"
              className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"
            >
              <h3 className="font-medium">La Liga</h3>
              <p className="text-sm text-gray-400">España</p>
            </Link>
            <Link
              href="/deportes/futbol/premier-league"
              className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"
            >
              <h3 className="font-medium">Premier League</h3>
              <p className="text-sm text-gray-400">Inglaterra</p>
            </Link>
            <Link
              href="/deportes/baloncesto/nba"
              className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"
            >
              <h3 className="font-medium">NBA</h3>
              <p className="text-sm text-gray-400">Estados Unidos</p>
            </Link>
            <Link
              href="/deportes/tenis/roland-garros"
              className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"
            >
              <h3 className="font-medium">Roland Garros</h3>
              <p className="text-sm text-gray-400">Francia</p>
            </Link>
            <Link
              href="/deportes/futbol/champions-league"
              className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"
            >
              <h3 className="font-medium">Champions League</h3>
              <p className="text-sm text-gray-400">Europa</p>
            </Link>
            <Link
              href="/deportes/futbol/copa-libertadores"
              className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"
            >
              <h3 className="font-medium">Copa Libertadores</h3>
              <p className="text-sm text-gray-400">Sudamérica</p>
            </Link>
            <Link href="/deportes/formula1" className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
              <h3 className="font-medium">Fórmula 1</h3>
              <p className="text-sm text-gray-400">Mundial</p>
            </Link>
            <Link href="/deportes/ufc" className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
              <h3 className="font-medium">UFC</h3>
              <p className="text-sm text-gray-400">Artes Marciales Mixtas</p>
            </Link>
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

export default function DeportesPageWithProviders() {
  return (
    <AuthProvider>
      <BettingProvider>
        <DeportesPage />
      </BettingProvider>
    </AuthProvider>
  )
}
