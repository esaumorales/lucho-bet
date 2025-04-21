"use client"

import Image from "next/image"
import Link from "next/link"
import { Trophy, Search } from "lucide-react"
import { Header } from "@/components/header"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AuthProvider } from "@/contexts/auth-context"
import { BettingProvider } from "@/contexts/betting-context"
import { BetSlip } from "@/components/betting/bet-slip"

// Resultados de fútbol
const resultadosFutbol = [
  {
    id: 1,
    liga: "La Liga",
    local: "Real Madrid",
    visitante: "Barcelona",
    resultado: "2-1",
    fecha: "10/04/2023",
    logoLocal: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=50&auto=format",
    logoVisitante: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=50&auto=format",
  },
  {
    id: 2,
    liga: "Premier League",
    local: "Liverpool",
    visitante: "Manchester City",
    resultado: "1-1",
    fecha: "09/04/2023",
    logoLocal: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=50&auto=format",
    logoVisitante: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?q=80&w=50&auto=format",
  },
  {
    id: 3,
    liga: "Serie A",
    local: "Juventus",
    visitante: "Inter",
    resultado: "3-2",
    fecha: "08/04/2023",
    logoLocal: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?q=80&w=50&auto=format",
    logoVisitante: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=50&auto=format",
  },
  {
    id: 4,
    liga: "Bundesliga",
    local: "Bayern Munich",
    visitante: "Borussia Dortmund",
    resultado: "4-0",
    fecha: "07/04/2023",
    logoLocal: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=50&auto=format",
    logoVisitante: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=50&auto=format",
  },
]

// Resultados de baloncesto
const resultadosBaloncesto = [
  {
    id: 1,
    liga: "NBA",
    local: "Lakers",
    visitante: "Bulls",
    resultado: "105-98",
    fecha: "10/04/2023",
    logoLocal: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=50&auto=format",
    logoVisitante: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=50&auto=format",
  },
  {
    id: 2,
    liga: "NBA",
    local: "Celtics",
    visitante: "Warriors",
    resultado: "112-110",
    fecha: "09/04/2023",
    logoLocal: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=50&auto=format",
    logoVisitante: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=50&auto=format",
  },
]

// Resultados de tenis
const resultadosTenis = [
  {
    id: 1,
    torneo: "Roland Garros",
    jugador1: "Nadal",
    jugador2: "Djokovic",
    resultado: "3-1",
    fecha: "10/04/2023",
    fotoJugador1: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=50&auto=format",
    fotoJugador2: "https://images.unsplash.com/photo-1622279457486-28f993f78ade?q=80&w=50&auto=format",
  },
  {
    id: 2,
    torneo: "Wimbledon",
    jugador1: "Federer",
    jugador2: "Murray",
    resultado: "3-0",
    fecha: "09/04/2023",
    fotoJugador1: "https://images.unsplash.com/photo-1622279457486-28f993f78ade?q=80&w=50&auto=format",
    fotoJugador2: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=50&auto=format",
  },
]

function ResultadosPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Filtrar resultados según el término de búsqueda
  const filteredFutbol = resultadosFutbol.filter(
    (resultado) =>
      resultado.local.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resultado.visitante.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resultado.liga.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredBaloncesto = resultadosBaloncesto.filter(
    (resultado) =>
      resultado.local.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resultado.visitante.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resultado.liga.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredTenis = resultadosTenis.filter(
    (resultado) =>
      resultado.jugador1.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resultado.jugador2.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resultado.torneo.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <Header />

      <main className="flex-1 container px-4 py-8">
        <div className="flex items-center mb-6">
          <Link href="/" className="text-yellow-500 mr-2">
            Inicio
          </Link>{" "}
          &gt;
          <span className="ml-2">Resultados</span>
        </div>

        <h1 className="text-3xl font-bold mb-8 flex items-center">
          <Trophy className="mr-2 h-6 w-6 text-yellow-500" />
          Resultados
        </h1>

        {/* Buscador */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Buscar por equipo, jugador o competición..."
            className="pl-10 bg-gray-800 border-gray-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Tabs para diferentes deportes */}
        <Tabs defaultValue="futbol" className="mb-8">
          <TabsList className="bg-gray-800">
            <TabsTrigger value="futbol">Fútbol</TabsTrigger>
            <TabsTrigger value="baloncesto">Baloncesto</TabsTrigger>
            <TabsTrigger value="tenis">Tenis</TabsTrigger>
          </TabsList>

          {/* Contenido de fútbol */}
          <TabsContent value="futbol">
            <div className="bg-gray-800 rounded-lg p-4">
              <h2 className="text-xl font-bold mb-4">Resultados de Fútbol</h2>

              {filteredFutbol.length > 0 ? (
                <div className="space-y-4">
                  {filteredFutbol.map((resultado) => (
                    <div key={resultado.id} className="bg-gray-900 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">{resultado.liga}</span>
                        <span className="text-sm text-gray-400">{resultado.fecha}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Image
                            src={resultado.logoLocal || "/placeholder.svg"}
                            alt={resultado.local}
                            width={30}
                            height={30}
                            className="rounded-full mr-2"
                          />
                          <span>{resultado.local}</span>
                        </div>
                        <span className="text-lg font-bold">{resultado.resultado}</span>
                        <div className="flex items-center">
                          <span>{resultado.visitante}</span>
                          <Image
                            src={resultado.logoVisitante || "/placeholder.svg"}
                            alt={resultado.visitante}
                            width={30}
                            height={30}
                            className="rounded-full ml-2"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-400">
                  <p>No se encontraron resultados para "{searchTerm}"</p>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Contenido de baloncesto */}
          <TabsContent value="baloncesto">
            <div className="bg-gray-800 rounded-lg p-4">
              <h2 className="text-xl font-bold mb-4">Resultados de Baloncesto</h2>

              {filteredBaloncesto.length > 0 ? (
                <div className="space-y-4">
                  {filteredBaloncesto.map((resultado) => (
                    <div key={resultado.id} className="bg-gray-900 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">{resultado.liga}</span>
                        <span className="text-sm text-gray-400">{resultado.fecha}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Image
                            src={resultado.logoLocal || "/placeholder.svg"}
                            alt={resultado.local}
                            width={30}
                            height={30}
                            className="rounded-full mr-2"
                          />
                          <span>{resultado.local}</span>
                        </div>
                        <span className="text-lg font-bold">{resultado.resultado}</span>
                        <div className="flex items-center">
                          <span>{resultado.visitante}</span>
                          <Image
                            src={resultado.logoVisitante || "/placeholder.svg"}
                            alt={resultado.visitante}
                            width={30}
                            height={30}
                            className="rounded-full ml-2"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-400">
                  <p>No se encontraron resultados para "{searchTerm}"</p>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Contenido de tenis */}
          <TabsContent value="tenis">
            <div className="bg-gray-800 rounded-lg p-4">
              <h2 className="text-xl font-bold mb-4">Resultados de Tenis</h2>

              {filteredTenis.length > 0 ? (
                <div className="space-y-4">
                  {filteredTenis.map((resultado) => (
                    <div key={resultado.id} className="bg-gray-900 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">{resultado.torneo}</span>
                        <span className="text-sm text-gray-400">{resultado.fecha}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Image
                            src={resultado.fotoJugador1 || "/placeholder.svg"}
                            alt={resultado.jugador1}
                            width={30}
                            height={30}
                            className="rounded-full mr-2"
                          />
                          <span>{resultado.jugador1}</span>
                        </div>
                        <span className="text-lg font-bold">{resultado.resultado}</span>
                        <div className="flex items-center">
                          <span>{resultado.jugador2}</span>
                          <Image
                            src={resultado.fotoJugador2 || "/placeholder.svg"}
                            alt={resultado.jugador2}
                            width={30}
                            height={30}
                            className="rounded-full ml-2"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-400">
                  <p>No se encontraron resultados para "{searchTerm}"</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>

        {/* Calendario */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Calendario de Eventos</h2>

          <div className="bg-gray-800 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-900 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Fútbol - La Liga</span>
                  <span className="text-sm text-gray-400">15/04/2023</span>
                </div>
                <h3 className="font-medium">Atlético Madrid vs Sevilla</h3>
              </div>

              <div className="bg-gray-900 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Baloncesto - NBA</span>
                  <span className="text-sm text-gray-400">16/04/2023</span>
                </div>
                <h3 className="font-medium">Nets vs Bucks</h3>
              </div>

              <div className="bg-gray-900 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Tenis - US Open</span>
                  <span className="text-sm text-gray-400">20/04/2023</span>
                </div>
                <h3 className="font-medium">Alcaraz vs Sinner</h3>
              </div>
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

export default function ResultadosPageWithProviders() {
  return (
    <AuthProvider>
      <BettingProvider>
        <ResultadosPage />
      </BettingProvider>
    </AuthProvider>
  )
}
