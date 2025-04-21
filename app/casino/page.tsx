"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dice1Icon as Dice, WalletCardsIcon as Cards, Trophy } from "lucide-react"
import { Header } from "@/components/header"
import { BetSlip } from "@/components/betting/bet-slip"
import { AuthProvider } from "@/contexts/auth-context"
import { BettingProvider } from "@/contexts/betting-context"

// Real image URLs for casino games
const casinoImages = {
  slots: "https://images.unsplash.com/photo-1596566787618-00f40dc58238?q=80&w=600&auto=format",
  roulette: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=600&auto=format",
  blackjack: "https://images.unsplash.com/photo-1541278107931-e006523892df?q=80&w=600&auto=format",
  poker: "https://images.unsplash.com/photo-1609743522653-52354461eb27?q=80&w=600&auto=format",
  baccarat: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=600&auto=format",
  craps: "https://images.unsplash.com/photo-1595980542930-9fb2e030695c?q=80&w=600&auto=format",
}

function CasinoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <Header />

      <main className="flex-1 container px-4 py-8">
        <div className="flex items-center mb-6">
          <Link href="/" className="text-yellow-500 mr-2">
            Inicio
          </Link>{" "}
          &gt;
          <span className="ml-2">Casino</span>
        </div>

        <h1 className="text-3xl font-bold mb-8 flex items-center">
          <Trophy className="mr-2 h-6 w-6 text-yellow-500" />
          Casino
        </h1>

        {/* Banner promocional */}
        <div className="relative h-[200px] md:h-[300px] w-full overflow-hidden rounded-xl mb-12">
          <Image
            src="https://images.unsplash.com/photo-1596566787618-00f40dc58238?q=80&w=1200&auto=format"
            alt="Casino en vivo"
            width={1200}
            height={300}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/30 flex flex-col justify-center px-6 md:px-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Casino en Vivo</h2>
            <p className="text-lg md:text-xl mb-6 max-w-md">
              Disfruta de la experiencia real con nuestros croupiers en vivo
            </p>
            <Link href="/casino/en-vivo">
              <Button className="w-fit bg-yellow-500 text-black hover:bg-yellow-600">Jugar Ahora</Button>
            </Link>
          </div>
        </div>

        {/* Juegos de casino */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Juegos de Casino</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Slots */}
            <Link href="/casino/slots" className="group">
              <div className="bg-gray-800 rounded-lg overflow-hidden transition-all hover:ring-2 hover:ring-yellow-500">
                <div className="aspect-video relative">
                  <Image
                    src={casinoImages.slots || "/placeholder.svg"}
                    alt="Slots"
                    width={300}
                    height={150}
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
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <circle cx="8" cy="12" r="2" />
                      <circle cx="16" cy="12" r="2" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-medium">Slots</h3>
                </div>
              </div>
            </Link>

            {/* Ruleta */}
            <Link href="/casino/ruleta" className="group">
              <div className="bg-gray-800 rounded-lg overflow-hidden transition-all hover:ring-2 hover:ring-yellow-500">
                <div className="aspect-video relative">
                  <Image
                    src={casinoImages.roulette || "/placeholder.svg"}
                    alt="Ruleta"
                    width={300}
                    height={150}
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
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      <path d="M2 12h20" />
                    </svg>
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-medium">Ruleta</h3>
                </div>
              </div>
            </Link>

            {/* Blackjack */}
            <Link href="/casino/blackjack" className="group">
              <div className="bg-gray-800 rounded-lg overflow-hidden transition-all hover:ring-2 hover:ring-yellow-500">
                <div className="aspect-video relative">
                  <Image
                    src={casinoImages.blackjack || "/placeholder.svg"}
                    alt="Blackjack"
                    width={300}
                    height={150}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Cards className="h-12 w-12 text-white group-hover:text-yellow-500 transition-colors" />
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-medium">Blackjack</h3>
                </div>
              </div>
            </Link>

            {/* Poker */}
            <Link href="/casino/poker" className="group">
              <div className="bg-gray-800 rounded-lg overflow-hidden transition-all hover:ring-2 hover:ring-yellow-500">
                <div className="aspect-video relative">
                  <Image
                    src={casinoImages.poker || "/placeholder.svg"}
                    alt="Poker"
                    width={300}
                    height={150}
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
                      <path d="M12 2L9.5 9 2 12l7.5 3L12 22l2.5-7L22 12l-7.5-3z" />
                    </svg>
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-medium">Poker</h3>
                </div>
              </div>
            </Link>

            {/* Baccarat */}
            <Link href="/casino/baccarat" className="group">
              <div className="bg-gray-800 rounded-lg overflow-hidden transition-all hover:ring-2 hover:ring-yellow-500">
                <div className="aspect-video relative">
                  <Image
                    src={casinoImages.baccarat || "/placeholder.svg"}
                    alt="Baccarat"
                    width={300}
                    height={150}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Dice className="h-12 w-12 text-white group-hover:text-yellow-500 transition-colors" />
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-medium">Baccarat</h3>
                </div>
              </div>
            </Link>

            {/* Craps */}
            <Link href="/casino/craps" className="group">
              <div className="bg-gray-800 rounded-lg overflow-hidden transition-all hover:ring-2 hover:ring-yellow-500">
                <div className="aspect-video relative">
                  <Image
                    src={casinoImages.craps || "/placeholder.svg"}
                    alt="Craps"
                    width={300}
                    height={150}
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
                      <rect x="3" y="3" width="6" height="6" rx="1" />
                      <rect x="15" y="15" width="6" height="6" rx="1" />
                    </svg>
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-medium">Craps</h3>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Juegos populares */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Juegos Populares</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Link
              href="/casino/slots/starburst"
              className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors"
            >
              <div className="aspect-video relative">
                <Image
                  src="https://images.unsplash.com/photo-1627484164269-a5eb8a5849e2?q=80&w=300&auto=format"
                  alt="Starburst"
                  width={300}
                  height={150}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-3">
                <h3 className="font-medium">Starburst</h3>
                <p className="text-xs text-gray-400">Slot</p>
              </div>
            </Link>

            <Link
              href="/casino/ruleta/europea"
              className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors"
            >
              <div className="aspect-video relative">
                <Image
                  src="https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=300&auto=format"
                  alt="Ruleta Europea"
                  width={300}
                  height={150}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-3">
                <h3 className="font-medium">Ruleta Europea</h3>
                <p className="text-xs text-gray-400">Ruleta</p>
              </div>
            </Link>

            <Link
              href="/casino/blackjack/vip"
              className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors"
            >
              <div className="aspect-video relative">
                <Image
                  src="https://images.unsplash.com/photo-1541278107931-e006523892df?q=80&w=300&auto=format"
                  alt="Blackjack VIP"
                  width={300}
                  height={150}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-3">
                <h3 className="font-medium">Blackjack VIP</h3>
                <p className="text-xs text-gray-400">Blackjack</p>
              </div>
            </Link>

            <Link
              href="/casino/poker/texas-holdem"
              className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors"
            >
              <div className="aspect-video relative">
                <Image
                  src="https://images.unsplash.com/photo-1609743522653-52354461eb27?q=80&w=300&auto=format"
                  alt="Texas Hold'em"
                  width={300}
                  height={150}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-3">
                <h3 className="font-medium">Texas Hold'em</h3>
                <p className="text-xs text-gray-400">Poker</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Promociones de casino */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Promociones de Casino</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <div className="h-48">
                <Image
                  src="https://images.unsplash.com/photo-1596566787618-00f40dc58238?q=80&w=600&auto=format"
                  alt="Giros gratis"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">50 Giros Gratis</h3>
                <p className="text-sm text-gray-400 mb-3">Recibe 50 giros gratis en nuestras mejores slots</p>
                <Link href="/promociones/giros-gratis">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                  >
                    Ver detalles
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <div className="h-48">
                <Image
                  src="https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=600&auto=format"
                  alt="Cashback"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">10% Cashback</h3>
                <p className="text-sm text-gray-400 mb-3">Recupera el 10% de tus pérdidas en casino cada semana</p>
                <Link href="/promociones/cashback-casino">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                  >
                    Ver detalles
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <div className="h-48">
                <Image
                  src="https://images.unsplash.com/photo-1541278107931-e006523892df?q=80&w=600&auto=format"
                  alt="Torneo de blackjack"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">Torneo de Blackjack</h3>
                <p className="text-sm text-gray-400 mb-3">Participa en nuestro torneo semanal con $5,000 en premios</p>
                <Link href="/promociones/torneo-blackjack">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                  >
                    Ver detalles
                  </Button>
                </Link>
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

export default function CasinoPageWithProviders() {
  return (
    <AuthProvider>
      <BettingProvider>
        <CasinoPage />
      </BettingProvider>
    </AuthProvider>
  )
}
