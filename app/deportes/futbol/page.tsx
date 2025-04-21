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

function FutbolPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <Header />

      <main className="flex-1 container px-4 py-8">
        <div className="flex items-center mb-6">
          <Link href="/" className="text-yellow-500 mr-2">
            Inicio
          </Link>{" "}
          &gt;
          <Link href="/deportes" className="text-yellow-500 mx-2">
            Deportes
          </Link>{" "}
          &gt;
          <span className="ml-2">Fútbol</span>
        </div>

        <h1 className="text-3xl font-bold mb-8 flex items-center">
          <Trophy className="mr-2 h-6 w-6 text-yellow-500" />
          Fútbol
        </h1>

        {/* Ligas populares */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Ligas Populares</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link
              href="/deportes/futbol/la-liga"
              className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors"
            >
              <Image
                src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=100&auto=format"
                alt="La Liga"
                width={100}
                height={100}
                className="mx-auto mb-2 rounded-full"
              />
              <h3 className="font-medium">La Liga</h3>
              <p className="text-xs text-gray-400">España</p>
            </Link>

            <Link
              href="/deportes/futbol/premier-league"
              className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors"
            >
              <Image
                src="https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=100&auto=format"
                alt="Premier League"
                width={100}
                height={100}
                className="mx-auto mb-2 rounded-full"
              />
              <h3 className="font-medium">Premier League</h3>
              <p className="text-xs text-gray-400">Inglaterra</p>
            </Link>

            <Link
              href="/deportes/futbol/serie-a"
              className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors"
            >
              <Image
                src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?q=80&w=100&auto=format"
                alt="Serie A"
                width={100}
                height={100}
                className="mx-auto mb-2 rounded-full"
              />
              <h3 className="font-medium">Serie A</h3>
              <p className="text-xs text-gray-400">Italia</p>
            </Link>

            <Link
              href="/deportes/futbol/bundesliga"
              className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors"
            >
              <Image
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=100&auto=format"
                alt="Bundesliga"
                width={100}
                height={100}
                className="mx-auto mb-2 rounded-full"
              />
              <h3 className="font-medium">Bundesliga</h3>
              <p className="text-xs text-gray-400">Alemania</p>
            </Link>

            <Link
              href="/deportes/futbol/ligue-1"
              className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors"
            >
              <Image
                src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=100&auto=format"
                alt="Ligue 1"
                width={100}
                height={100}
                className="mx-auto mb-2 rounded-full"
              />
              <h3 className="font-medium">Ligue 1</h3>
              <p className="text-xs text-gray-400">Francia</p>
            </Link>

            <Link
              href="/deportes/futbol/champions-league"
              className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors"
            >
              <Image
                src="https://images.unsplash.com/photo-1571018033358-be9bc9750e23?q=80&w=100&auto=format"
                alt="Champions League"
                width={100}
                height={100}
                className="mx-auto mb-2 rounded-full"
              />
              <h3 className="font-medium">Champions League</h3>
              <p className="text-xs text-gray-400">Europa</p>
            </Link>
          </div>
        </section>

        {/* Partidos destacados */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Partidos Destacados</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Partido 1 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-500 transition-colors">
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-400">La Liga - Jornada 10</span>
                  <span className="text-sm text-gray-400">Hoy 20:00</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <Image
                      src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=50&auto=format"
                      alt="Real Madrid"
                      width={40}
                      height={40}
                      className="rounded-full mr-2"
                    />
                    <span>Real Madrid</span>
                  </div>
                  <span className="text-lg font-bold">vs</span>
                  <div className="flex items-center">
                    <span>Barcelona</span>
                    <Image
                      src="https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=50&auto=format"
                      alt="Barcelona"
                      width={40}
                      height={40}
                      className="rounded-full ml-2"
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <BettingButtons
                    eventId="match1"
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

            {/* Partido 2 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-500 transition-colors">
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-400">Premier League - Jornada 12</span>
                  <span className="text-sm text-gray-400">Mañana 16:00</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <Image
                      src="https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=50&auto=format"
                      alt="Liverpool"
                      width={40}
                      height={40}
                      className="rounded-full mr-2"
                    />
                    <span>Liverpool</span>
                  </div>
                  <span className="text-lg font-bold">vs</span>
                  <div className="flex items-center">
                    <span>Man City</span>
                    <Image
                      src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?q=80&w=50&auto=format"
                      alt="Man City"
                      width={40}
                      height={40}
                      className="rounded-full ml-2"
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <BettingButtons
                    eventId="match2"
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

            {/* Partido 3 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-500 transition-colors">
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-400">Champions League - Grupo A</span>
                  <span className="text-sm text-gray-400">Miércoles 21:00</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <Image
                      src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?q=80&w=50&auto=format"
                      alt="Bayern Munich"
                      width={40}
                      height={40}
                      className="rounded-full mr-2"
                    />
                    <span>Bayern Munich</span>
                  </div>
                  <span className="text-lg font-bold">vs</span>
                  <div className="flex items-center">
                    <span>PSG</span>
                    <Image
                      src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=50&auto=format"
                      alt="PSG"
                      width={40}
                      height={40}
                      className="rounded-full ml-2"
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <BettingButtons
                    eventId="match3"
                    eventName="Bayern Munich vs PSG"
                    options={[
                      { name: "Bayern Munich", odds: 1.9 },
                      { name: "Empate", odds: 3.6 },
                      { name: "PSG", odds: 4.0 },
                    ]}
                  />
                  <span className="text-yellow-500 text-sm">+35 mercados</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mercados populares */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Mercados Populares</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/deportes/futbol/mercados/ganador"
              className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"
            >
              <h3 className="font-medium">Ganador del partido</h3>
              <p className="text-sm text-gray-400">1X2</p>
            </Link>
            <Link
              href="/deportes/futbol/mercados/ambos-marcan"
              className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"
            >
              <h3 className="font-medium">Ambos equipos marcan</h3>
              <p className="text-sm text-gray-400">Sí/No</p>
            </Link>
            <Link
              href="/deportes/futbol/mercados/total-goles"
              className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"
            >
              <h3 className="font-medium">Total de goles</h3>
              <p className="text-sm text-gray-400">Más/Menos</p>
            </Link>
            <Link
              href="/deportes/futbol/mercados/handicap"
              className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"
            >
              <h3 className="font-medium">Hándicap</h3>
              <p className="text-sm text-gray-400">Ventaja/Desventaja</p>
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

export default function FutbolPageWithProviders() {
  return (
    <AuthProvider>
      <BettingProvider>
        <FutbolPage />
      </BettingProvider>
    </AuthProvider>
  )
}
