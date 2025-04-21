"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ClubIcon as Football,
  ShoppingBasketIcon as Basketball,
  TurtleIcon as Tennis,
  DogIcon as Horse,
  Dice1Icon as Dice,
  WalletCardsIcon as Cards,
  Trophy,
} from "lucide-react"
import { Header } from "@/components/header"
import { BetSlip } from "@/components/betting/bet-slip"
import { AuthProvider } from "@/contexts/auth-context"
import { BettingProvider } from "@/contexts/betting-context"
import { useBetting } from "@/contexts/betting-context"
import { useState } from "react"
import { LoginModal } from "@/components/auth/login-modal"
import { RegisterModal } from "@/components/auth/register-modal"
import  ELPISADO  from "./assets/images/elPisado.jpg"

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

// Real image URLs for casino games
const casinoImages = {
  slots: "https://images.unsplash.com/photo-1596566787618-00f40dc58238?q=80&w=600&auto=format",
  roulette: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=600&auto=format",
  blackjack: "https://images.unsplash.com/photo-1541278107931-e006523892df?q=80&w=600&auto=format",
  poker: "https://images.unsplash.com/photo-1609743522653-52354461eb27?q=80&w=600&auto=format",
}

// Real image URLs for promotions
const promoImages = {
  welcome: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=600&auto=format",
  risk: "https://images.unsplash.com/photo-1494059980473-813e73ee784b?q=80&w=600&auto=format",
  spins: "https://images.unsplash.com/photo-1596566787618-00f40dc58238?q=80&w=600&auto=format",
}

// Payment method images
const paymentImages = {
  visa: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png",
  mastercard:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png",
  paypal: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/200px-PayPal.svg.png",
  skrill: "https://logos-world.net/wp-content/uploads/2021/02/Skrill-Logo-700x394.png",
  neteller: "https://www.neteller.com/fileadmin/user_upload/neteller_logo.png",
  bitcoin: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/200px-Bitcoin.svg.png",
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

// Main component
function HomePage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)

  const openLoginModal = () => {
    setIsRegisterModalOpen(false)
    setIsLoginModalOpen(true)
  }

  const openRegisterModal = () => {
    setIsLoginModalOpen(false)
    setIsRegisterModalOpen(true)
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <Header />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative">
          <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
            <Image
              src={ELPISADO}
              alt="Promoción de bienvenida"
              width={1200}
              height={400}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/30 flex flex-col justify-center px-6 md:px-12">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">¡BONO AL MÁS PISADO!</h1>
              <p className="text-lg md:text-xl mb-6 max-w-md">
                Regístrate hoy y recibe un 100% en tu primer depósito hasta $500
              </p>
              <Button className="w-fit bg-yellow-500 text-black hover:bg-yellow-600" onClick={openRegisterModal}>
                ¡Regístrate Ahora!
              </Button>
            </div>
          </div>
        </section>

        {/* Deportes Section */}
        <section id="deportes" className="py-12 container px-4">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <Trophy className="mr-2 h-6 w-6 text-yellow-500" />
            Deportes Populares
          </h2>

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

        {/* Eventos en vivo */}
        <section className="py-12 bg-gray-800">
          <div className="container px-4">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-6 w-6 text-yellow-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="2" />
                <path d="M12 8v2" />
                <path d="M12 14v2" />
                <path d="M16 12h-2" />
                <path d="M10 12H8" />
              </svg>
              Eventos en Vivo
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Evento 1 */}
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-500 transition-colors">
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
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-500 transition-colors">
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
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-500 transition-colors">
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

            <div className="mt-8 text-center">
              <Link href="/eventos-en-vivo">
                <Button className="bg-yellow-500 text-black hover:bg-yellow-600">Ver todos los eventos en vivo</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Casino Section */}
        <section id="casino" className="py-12 container px-4">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <Dice className="mr-2 h-6 w-6 text-yellow-500" />
            Casino
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
          </div>

          <div className="mt-8 text-center">
            <Link href="/casino">
              <Button className="bg-yellow-500 text-black hover:bg-yellow-600">Explorar Casino</Button>
            </Link>
          </div>
        </section>

        {/* Promociones */}
        <section id="promociones" className="py-12 bg-gray-800">
          <div className="container px-4">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-6 w-6 text-yellow-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              Promociones
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Promoción 1 */}
              <Link href="/promociones/bono-bienvenida" className="group">
                <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-500 transition-colors">
                  <div className="h-48">
                    <Image
                      src={promoImages.welcome || "/placeholder.svg"}
                      alt="Bono de bienvenida"
                      width={400}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-2">Bono Al Más Pisado 100%</h3>
                    <p className="text-sm text-gray-400 mb-3">Duplicamos tu primer depósito hasta $500</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                    >
                      Ver detalles
                    </Button>
                  </div>
                </div>
              </Link>

              {/* Promoción 2 */}
              <Link href="/promociones/apuesta-sin-riesgo" className="group">
                <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-500 transition-colors">
                  <div className="h-48">
                    <Image
                      src={promoImages.risk || "/placeholder.svg"}
                      alt="Apuesta sin riesgo"
                      width={400}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-2">Apuesta Sin Riesgo</h3>
                    <p className="text-sm text-gray-400 mb-3">
                      Si pierdes tu primera apuesta, te devolvemos hasta $100
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                    >
                      Ver detalles
                    </Button>
                  </div>
                </div>
              </Link>

              {/* Promoción 3 */}
              <Link href="/promociones/giros-gratis" className="group">
                <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-500 transition-colors">
                  <div className="h-48">
                    <Image
                      src={promoImages.spins || "/placeholder.svg"}
                      alt="Giros gratis"
                      width={400}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-2">50 Giros Gratis</h3>
                    <p className="text-sm text-gray-400 mb-3">Recibe 50 giros gratis en nuestras mejores slots</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                    >
                      Ver detalles
                    </Button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* App móvil */}
        <section className="py-12 container px-4">
          <div className="bg-gray-800 rounded-xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Descarga Nuestra App Móvil</h2>
                <p className="text-gray-300 mb-6">
                  Apuesta en cualquier momento y lugar con nuestra aplicación móvil. Disfruta de todas las funciones de
                  LuchoBet en tu dispositivo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-black hover:bg-gray-900 flex items-center justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5" />
                      <path d="M16 3v4" />
                      <path d="M8 3v4" />
                      <path d="M3 11h18" />
                      <path d="M17.5 15v4.5" />
                      <path d="M15 17.5h5" />
                    </svg>
                    App Store
                  </Button>
                  <Button className="bg-black hover:bg-gray-900 flex items-center justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M17.6 11.4L19 10l-9-5-9 5 9 5 4.3-2.4" />
                      <path d="M1 10v9l9 5 9-5v-9" />
                    </svg>
                    Google Play
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?q=80&w=200&h=400&auto=format"
                  alt="App móvil"
                  width={200}
                  height={400}
                  className="h-[400px] w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Métodos de pago */}
        <section className="py-12 bg-gray-800">
          <div className="container px-4 text-center">
            <h2 className="text-2xl font-bold mb-8">Métodos de Pago</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Image
                src={paymentImages.visa || "/placeholder.svg"}
                alt="Visa"
                width={60}
                height={40}
                className="h-10 w-auto"
              />
              <Image
                src={paymentImages.mastercard || "/placeholder.svg"}
                alt="Mastercard"
                width={60}
                height={40}
                className="h-10 w-auto"
              />
              <Image
                src={paymentImages.paypal || "/placeholder.svg"}
                alt="PayPal"
                width={60}
                height={40}
                className="h-10 w-auto"
              />
              <Image
                src={paymentImages.skrill || "/placeholder.svg"}
                alt="Skrill"
                width={60}
                height={40}
                className="h-10 w-auto"
              />
              <Image
                src={paymentImages.neteller || "/placeholder.svg"}
                alt="Neteller"
                width={60}
                height={40}
                className="h-10 w-auto"
              />
              <Image
                src={paymentImages.bitcoin || "/placeholder.svg"}
                alt="Bitcoin"
                width={60}
                height={40}
                className="h-10 w-auto"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="h-8 w-8 text-yellow-500" />
                <span className="text-2xl font-bold text-yellow-500">LuchoBet</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">La mejor plataforma de apuestas deportivas y casino online.</p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#deportes" className="text-gray-400 hover:text-yellow-500">
                    Deportes
                  </Link>
                </li>
                <li>
                  <Link href="#casino" className="text-gray-400 hover:text-yellow-500">
                    Casino
                  </Link>
                </li>
                <li>
                  <Link href="/eventos-en-vivo" className="text-gray-400 hover:text-yellow-500">
                    En Vivo
                  </Link>
                </li>
                <li>
                  <Link href="#promociones" className="text-gray-400 hover:text-yellow-500">
                    Promociones
                  </Link>
                </li>
                <li>
                  <Link href="/resultados" className="text-gray-400 hover:text-yellow-500">
                    Resultados
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Soporte</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/ayuda" className="text-gray-400 hover:text-yellow-500">
                    Centro de Ayuda
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-gray-400 hover:text-yellow-500">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="/chat" className="text-gray-400 hover:text-yellow-500">
                    Chat en Vivo
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-yellow-500">
                    Preguntas Frecuentes
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/terminos" className="text-gray-400 hover:text-yellow-500">
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link href="/privacidad" className="text-gray-400 hover:text-yellow-500">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/juego-responsable" className="text-gray-400 hover:text-yellow-500">
                    Juego Responsable
                  </Link>
                </li>
                <li>
                  <Link href="/reglas" className="text-gray-400 hover:text-yellow-500">
                    Reglas de Apuestas
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} LuchoBet. Todos los derechos reservados.</p>
            <p className="mt-2">Solo para mayores de 18 años. Juegue con responsabilidad.</p>
          </div>
        </div>
      </footer>

      {/* Betting Slip Component */}
      <BetSlip />

      {/* Auth Modals */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onRegisterClick={openRegisterModal}
      />

      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        onLoginClick={openLoginModal}
      />
    </div>
  )
}

// Wrap the HomePage component with the providers
export default function Home() {
  return (
    <AuthProvider>
      <BettingProvider>
        <HomePage />
      </BettingProvider>
    </AuthProvider>
  )
}
