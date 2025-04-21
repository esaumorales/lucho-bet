"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useBetting } from "@/contexts/betting-context"
import { useAuth } from "@/contexts/auth-context"
import { X, ChevronUp, ChevronDown, Trash2, Loader2 } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from "@/components/ui/sheet"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { LoginModal } from "@/components/auth/login-modal"
import { RegisterModal } from "@/components/auth/register-modal"

export function BetSlip() {
  const { bets, removeBet, updateStake, clearBets, totalStake, potentialWinnings, isBetSlipOpen, toggleBetSlip } =
    useBetting()

  const { user, updateBalance } = useAuth()
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  const [betPlaced, setBetPlaced] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState("")

  const handlePlaceBet = () => {
    if (!user) {
      setIsLoginModalOpen(true)
      return
    }

    if (totalStake > (user?.balance || 0)) {
      setError("Saldo insuficiente para realizar esta apuesta")
      return
    }

    setError("")
    setIsProcessing(true)

    // Simulate API call
    setTimeout(() => {
      // Update user balance
      if (user) {
        updateBalance(user.balance - totalStake)
      }

      setIsProcessing(false)
      setBetPlaced(true)

      // Reset after 3 seconds
      setTimeout(() => {
        clearBets()
        setBetPlaced(false)
      }, 3000)
    }, 1500)
  }

  const openLoginModal = () => {
    setIsRegisterModalOpen(false)
    setIsLoginModalOpen(true)
  }

  const openRegisterModal = () => {
    setIsLoginModalOpen(false)
    setIsRegisterModalOpen(true)
  }

  return (
    <>
      <Sheet open={isBetSlipOpen} onOpenChange={toggleBetSlip}>
        <SheetTrigger asChild>
          <Button
            className="fixed bottom-4 right-4 z-50 bg-yellow-500 text-black hover:bg-yellow-600 rounded-full h-16 w-16 flex items-center justify-center shadow-lg md:hidden"
            onClick={() => toggleBetSlip()}
          >
            <div className="relative">
              {bets.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {bets.length}
                </span>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 3h18v18H3z" />
                <path d="M21 3L3 21" />
              </svg>
            </div>
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[300px] sm:w-[400px] bg-gray-900 text-white border-gray-800">
          <SheetHeader>
            <SheetTitle className="text-white flex justify-between items-center">
              <span>Boleta de Apuestas ({bets.length})</span>
              {bets.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearBets}
                  className="h-8 w-8 p-0 text-gray-400 hover:text-white"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </SheetTitle>
          </SheetHeader>

          <div className="mt-4 flex flex-col gap-3 max-h-[calc(100vh-200px)] overflow-y-auto">
            {bets.length === 0 ? (
              <div className="text-center py-8 text-gray-400">
                <p>No hay apuestas seleccionadas</p>
                <p className="text-sm mt-2">Selecciona alguna cuota para comenzar</p>
              </div>
            ) : (
              bets.map((bet) => (
                <div key={bet.id} className="bg-gray-800 rounded-lg p-3 relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeBet(bet.id)}
                    className="absolute top-2 right-2 h-6 w-6 p-0 text-gray-400 hover:text-white"
                  >
                    <X className="h-4 w-4" />
                  </Button>

                  <div className="pr-6">
                    <p className="text-sm text-gray-400">{bet.event}</p>
                    <p className="font-medium">{bet.selection}</p>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-6 w-6 p-0"
                          onClick={() => updateStake(bet.id, Math.max(0, (bet.stake || 0) - 10))}
                        >
                          <ChevronDown className="h-3 w-3" />
                        </Button>
                        <Input
                          type="number"
                          value={bet.stake || 0}
                          onChange={(e) => updateStake(bet.id, Math.max(0, Number.parseInt(e.target.value) || 0))}
                          className="h-8 w-16 text-center bg-gray-700 border-gray-600"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-6 w-6 p-0"
                          onClick={() => updateStake(bet.id, (bet.stake || 0) + 10)}
                        >
                          <ChevronUp className="h-3 w-3" />
                        </Button>
                      </div>
                      <span className="text-yellow-500 font-bold">{bet.odds.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {bets.length > 0 && (
            <div className="mt-4 border-t border-gray-800 pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Apuesta Total:</span>
                <span>${totalStake.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-400">Ganancia Potencial:</span>
                <span className="text-yellow-500 font-bold">${potentialWinnings.toFixed(2)}</span>
              </div>

              {user && (
                <div className="flex justify-between mb-4">
                  <span className="text-gray-400">Tu Saldo:</span>
                  <span className={user.balance < totalStake ? "text-red-500" : "text-green-500"}>
                    ${user.balance.toFixed(2)}
                  </span>
                </div>
              )}

              {error && (
                <Alert className="mb-4 bg-red-900/50 border-red-800">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {betPlaced ? (
                <Alert className="mb-4 bg-green-900/50 border-green-800">
                  <AlertDescription>¡Apuesta realizada con éxito!</AlertDescription>
                </Alert>
              ) : null}

              <SheetFooter>
                <Button
                  onClick={handlePlaceBet}
                  disabled={totalStake <= 0 || betPlaced || isProcessing}
                  className="w-full bg-yellow-500 text-black hover:bg-yellow-600"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Procesando...
                    </>
                  ) : user ? (
                    "Realizar Apuesta"
                  ) : (
                    "Iniciar Sesión para Apostar"
                  )}
                </Button>
              </SheetFooter>
            </div>
          )}
        </SheetContent>
      </Sheet>

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
    </>
  )
}
