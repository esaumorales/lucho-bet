"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Trophy, Loader2 } from "lucide-react"
import { Header } from "@/components/header"
import { BetSlip } from "@/components/betting/bet-slip"
import { AuthProvider } from "@/contexts/auth-context"
import { BettingProvider } from "@/contexts/betting-context"
import { useAuth } from "@/contexts/auth-context"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { LoginModal } from "@/components/auth/login-modal"
import { RegisterModal } from "@/components/auth/register-modal"

// Slot game images
const slotImages = {
  slots: "https://images.unsplash.com/photo-1596566787618-00f40dc58238?q=80&w=600&auto=format",
  fruit: "https://images.unsplash.com/photo-1627484164269-a5eb8a5849e2?q=80&w=600&auto=format",
  mega: "https://images.unsplash.com/photo-1626750944869-3f5d5edc485b?q=80&w=600&auto=format",
  star: "https://images.unsplash.com/photo-1626750944869-3f5d5edc485b?q=80&w=600&auto=format",
  book: "https://images.unsplash.com/photo-1627484164269-a5eb8a5849e2?q=80&w=600&auto=format",
}

function SlotsPage() {
  const { user, updateBalance } = useAuth()
  const [isSpinning, setIsSpinning] = useState(false)
  const [result, setResult] = useState<string[]>([])
  const [win, setWin] = useState(false)
  const [winAmount, setWinAmount] = useState(0)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  const [error, setError] = useState("")

  const symbols = ["🍒", "🍋", "🍊", "🍇", "💎", "7️⃣"]

  const openLoginModal = () => {
    setIsRegisterModalOpen(false)
    setIsLoginModalOpen(true)
  }

  const openRegisterModal = () => {
    setIsLoginModalOpen(false)
    setIsRegisterModalOpen(true)
  }

  const spinSlots = () => {
    if (!user) {
      openLoginModal()
      return
    }

    if (user.balance < 10) {
      setError("Saldo insuficiente para jugar. Necesitas al menos $10.")
      return
    }

    setError("")
    setIsSpinning(true)
    setWin(false)
    setWinAmount(0)

    // Update balance immediately
    updateBalance(user.balance - 10)

    // Generate random results
    setTimeout(() => {
      const newResult = [
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
      ]

      setResult(newResult)
      setIsSpinning(false)

      // Check win conditions
      if (newResult[0] === newResult[1] && newResult[1] === newResult[2]) {
        setWin(true)
        let amount = 50 // Default win amount

        // Special win amounts
        if (newResult[0] === "💎") {
          amount = 100
        } else if (newResult[0] === "7️⃣") {
          amount = 200
        }

        setWinAmount(amount)
        updateBalance(user.balance - 10 + amount) // -10 for the bet, + amount for the win
      }
    }, 2000)
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <Header />

      <main className="flex-1 container px-4 py-8">
        <div className="flex items-center mb-6">
          <Link href="/" className="text-yellow-500 mr-2">
            Inicio
          </Link>{" "}
          &gt;
          <Link href="/#casino" className="text-yellow-500 mx-2">
            Casino
          </Link>{" "}
          &gt;
          <span className="ml-2">Slots</span>
        </div>

        <h1 className="text-3xl font-bold mb-8 flex items-center">
          <Trophy className="mr-2 h-6 w-6 text-yellow-500" />
          Máquinas Tragamonedas
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4 text-center">Slot Machine</h2>

            <div className="flex justify-center mb-8">
              <div className="bg-black rounded-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-yellow-500 font-bold">LuchoBet Slots</div>
                  <div className="text-yellow-500 font-bold">
                    {user ? `Saldo: $${user.balance.toFixed(2)}` : "Inicia sesión"}
                  </div>
                </div>

                <div className="flex justify-center gap-4 mb-8">
                  <div
                    className={`w-20 h-24 bg-gray-700 rounded flex items-center justify-center text-4xl ${isSpinning ? "animate-pulse" : ""}`}
                  >
                    {isSpinning ? "?" : result[0] || "🎰"}
                  </div>
                  <div
                    className={`w-20 h-24 bg-gray-700 rounded flex items-center justify-center text-4xl ${isSpinning ? "animate-pulse" : ""}`}
                  >
                    {isSpinning ? "?" : result[1] || "🎰"}
                  </div>
                  <div
                    className={`w-20 h-24 bg-gray-700 rounded flex items-center justify-center text-4xl ${isSpinning ? "animate-pulse" : ""}`}
                  >
                    {isSpinning ? "?" : result[2] || "🎰"}
                  </div>
                </div>

                {error && (
                  <Alert className="bg-red-900/50 border-red-800 mb-4">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {win && (
                  <div className="bg-green-900/50 border border-green-800 rounded p-3 mb-4 text-center animate-pulse">
                    ¡GANASTE! +${winAmount}
                  </div>
                )}

                <Button
                  className="w-full bg-yellow-500 text-black hover:bg-yellow-600"
                  onClick={spinSlots}
                  disabled={isSpinning}
                >
                  {isSpinning ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Girando...
                    </>
                  ) : user ? (
                    "Girar ($10)"
                  ) : (
                    "Inicia sesión para jugar"
                  )}
                </Button>
              </div>
            </div>

            <div className="text-sm text-gray-400">
              <h3 className="font-bold mb-2">Reglas del juego:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Cada giro cuesta $10</li>
                <li>Consigue 3 símbolos iguales para ganar</li>
                <li>Premio por 3 símbolos iguales: $50</li>
                <li>Premio por 3 diamantes: $100</li>
                <li>Premio por 3 sietes: $200</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Más Juegos</h2>

            <div className="grid grid-cols-2 gap-4">
              <Link href="/casino/slots/fruit-fiesta" className="group">
                <div className="bg-gray-800 rounded-lg overflow-hidden transition-all hover:ring-2 hover:ring-yellow-500">
                  <div className="aspect-video relative">
                    <Image
                      src={slotImages.fruit || "/placeholder.svg"}
                      alt="Fruit Fiesta"
                      width={300}
                      height={150}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium">Fruit Fiesta</h3>
                  </div>
                </div>
              </Link>

              <Link href="/casino/slots/mega-fortune" className="group">
                <div className="bg-gray-800 rounded-lg overflow-hidden transition-all hover:ring-2 hover:ring-yellow-500">
                  <div className="aspect-video relative">
                    <Image
                      src={slotImages.mega || "/placeholder.svg"}
                      alt="Mega Fortune"
                      width={300}
                      height={150}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium">Mega Fortune</h3>
                  </div>
                </div>
              </Link>

              <Link href="/casino/slots/starburst" className="group">
                <div className="bg-gray-800 rounded-lg overflow-hidden transition-all hover:ring-2 hover:ring-yellow-500">
                  <div className="aspect-video relative">
                    <Image
                      src={slotImages.star || "/placeholder.svg"}
                      alt="Starburst"
                      width={300}
                      height={150}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium">Starburst</h3>
                  </div>
                </div>
              </Link>

              <Link href="/casino/slots/book-of-ra" className="group">
                <div className="bg-gray-800 rounded-lg overflow-hidden transition-all hover:ring-2 hover:ring-yellow-500">
                  <div className="aspect-video relative">
                    <Image
                      src={slotImages.book || "/placeholder.svg"}
                      alt="Book of Ra"
                      width={300}
                      height={150}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium">Book of Ra</h3>
                  </div>
                </div>
              </Link>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Promociones de Slots</h2>

              <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <h3 className="font-medium mb-2">Giros Gratis los Lunes</h3>
                <p className="text-sm text-gray-400 mb-3">
                  Recibe 20 giros gratis todos los lunes al depositar $50 o más
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                >
                  Reclamar Oferta
                </Button>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="font-medium mb-2">Cashback en Slots</h3>
                <p className="text-sm text-gray-400 mb-3">
                  10% de cashback en todas tus pérdidas en slots durante el fin de semana
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                >
                  Más Información
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container px-4 text-center">
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} LuchoBet. Todos los derechos reservados.</p>
          <p className="text-xs text-gray-400 mt-2">Solo para mayores de 18 años. Juegue con responsabilidad.</p>
        </div>
      </footer>

      <BetSlip />

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

export default function SlotsPageWithProviders() {
  return (
    <AuthProvider>
      <BettingProvider>
        <SlotsPage />
      </BettingProvider>
    </AuthProvider>
  )
}
