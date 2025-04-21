"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Trophy, Loader2 } from "lucide-react"
import { Header } from "@/components/header"
import { BetSlip } from "@/components/betting/bet-slip"
import { AuthProvider } from "@/contexts/auth-context"
import { BettingProvider } from "@/contexts/betting-context"
import { useAuth } from "@/contexts/auth-context"
import { useState } from "react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { LoginModal } from "@/components/auth/login-modal"
import { RegisterModal } from "@/components/auth/register-modal"

function BonoPage() {
  const { user, updateBalance } = useAuth()
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  const [depositAmount, setDepositAmount] = useState(100)
  const [isProcessing, setIsProcessing] = useState(false)
  const [success, setSuccess] = useState(false)

  const openLoginModal = () => {
    setIsRegisterModalOpen(false)
    setIsLoginModalOpen(true)
  }

  const openRegisterModal = () => {
    setIsLoginModalOpen(false)
    setIsRegisterModalOpen(true)
  }

  const handleDeposit = () => {
    if (!user) return

    setIsProcessing(true)

    // Simulate API call
    setTimeout(() => {
      // Update user balance with deposit + bonus
      updateBalance(user.balance + depositAmount * 2)
      setIsProcessing(false)
      setSuccess(true)

      // Reset after 3 seconds
      setTimeout(() => {
        setSuccess(false)
      }, 3000)
    }, 1500)
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
          <Link href="/promociones" className="text-yellow-500 mx-2">
            Promociones
          </Link>{" "}
          &gt;
          <span className="ml-2">Bono de Bienvenida</span>
        </div>

        <div className="relative h-[200px] md:h-[300px] w-full overflow-hidden rounded-xl mb-8">
          <Image
            src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=1200&auto=format"
            alt="Bono de bienvenida"
            width={1200}
            height={300}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/30 flex flex-col justify-center px-6 md:px-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">BONO AL MÁS PISADO 100%</h1>
            <p className="text-lg md:text-xl max-w-md">Duplicamos tu primer depósito hasta $500</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Detalles de la Promoción</h2>

            <div className="bg-gray-800 rounded-xl p-6 mb-6">
              <p className="mb-4">
                ¡Bienvenido a LuchoBet! Para celebrar tu llegada, queremos duplicar tu primer depósito hasta $500. Esta
                es tu oportunidad de comenzar con el doble de saldo para disfrutar de todas nuestras opciones de
                apuestas deportivas y juegos de casino.
              </p>

              <h3 className="text-lg font-bold mb-2">¿Cómo funciona?</h3>
              <ol className="list-decimal pl-5 mb-4 space-y-2">
                <li>Regístrate en LuchoBet</li>
                <li>Realiza tu primer depósito (mínimo $20)</li>
                <li>Recibirás automáticamente un bono del 100% de tu depósito (hasta $500)</li>
                <li>¡Comienza a apostar y divertirte!</li>
              </ol>

              <h3 className="text-lg font-bold mb-2">Términos y condiciones</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                <li>El bono se aplica solo al primer depósito realizado</li>
                <li>Depósito mínimo: $20</li>
                <li>Bono máximo: $500</li>
                <li>El bono debe ser apostado 10 veces antes de poder retirar</li>
                <li>Las apuestas con cuotas inferiores a 1.50 no cuentan para el rollover</li>
                <li>El bono expira a los 30 días de ser recibido</li>
                <li>LuchoBet se reserva el derecho de modificar o cancelar esta promoción en cualquier momento</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4">Preguntas Frecuentes</h2>

            <div className="bg-gray-800 rounded-xl p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold mb-1">¿Puedo retirar el bono inmediatamente?</h3>
                  <p className="text-sm text-gray-300">
                    No, debes cumplir con los requisitos de apuesta (10x) antes de poder retirar el bono o las ganancias
                    generadas con él.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-1">¿Qué métodos de pago son válidos para esta promoción?</h3>
                  <p className="text-sm text-gray-300">
                    Todos los métodos de pago disponibles en LuchoBet son válidos para esta promoción, incluyendo
                    tarjetas de crédito/débito, billeteras electrónicas y criptomonedas.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-1">¿Puedo combinar esta promoción con otras ofertas?</h3>
                  <p className="text-sm text-gray-300">
                    No, el bono de bienvenida no puede combinarse con otras promociones activas. Una vez que hayas
                    utilizado este bono, podrás acceder a otras promociones disponibles.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-1">¿Qué sucede si no cumplo con los requisitos de apuesta?</h3>
                  <p className="text-sm text-gray-300">
                    Si no cumples con los requisitos de apuesta dentro del período de 30 días, el bono y las ganancias
                    generadas con él serán retirados de tu cuenta.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-800 rounded-xl p-6 mb-6">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Trophy className="mr-2 h-5 w-5 text-yellow-500" />
                Reclamar Bono
              </h2>

              {user ? (
                <div>
                  <p className="mb-4 text-sm">
                    Hola <span className="font-bold">{user.name}</span>, estás a un paso de duplicar tu dinero.
                  </p>

                  <div className="bg-gray-700 rounded-lg p-4 mb-4">
                    <div className="flex justify-between mb-2">
                      <span>Tu depósito:</span>
                      <span className="font-bold">${depositAmount}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Bono (100%):</span>
                      <span className="text-yellow-500 font-bold">+${depositAmount}</span>
                    </div>
                    <div className="border-t border-gray-600 my-2 pt-2 flex justify-between">
                      <span>Total:</span>
                      <span className="font-bold">${depositAmount * 2}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="deposit" className="block text-sm font-medium mb-1">
                      Cantidad a depositar:
                    </label>
                    <input
                      type="range"
                      id="deposit"
                      min="20"
                      max="500"
                      step="10"
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(Number.parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>$20</span>
                      <span>$500</span>
                    </div>
                  </div>

                  {success && (
                    <Alert className="mb-4 bg-green-900/50 border-green-800">
                      <AlertDescription>¡Depósito realizado con éxito! Tu bono ha sido acreditado.</AlertDescription>
                    </Alert>
                  )}

                  <Button
                    className="w-full bg-yellow-500 text-black hover:bg-yellow-600 mb-3"
                    onClick={handleDeposit}
                    disabled={isProcessing || success}
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Procesando...
                      </>
                    ) : (
                      "Depositar Ahora"
                    )}
                  </Button>

                  <p className="text-xs text-gray-400 text-center">
                    Procesamos depósitos de forma segura con encriptación SSL
                  </p>
                </div>
              ) : (
                <div>
                  <p className="mb-4 text-sm">Para reclamar este bono, necesitas iniciar sesión o crear una cuenta.</p>
                  <div className="flex flex-col gap-3">
                    <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-600" onClick={openLoginModal}>
                      Iniciar Sesión
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                      onClick={openRegisterModal}
                    >
                      Crear Cuenta
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-3">Métodos de pago aceptados</h3>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-gray-700 rounded p-2 flex items-center justify-center">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png"
                    alt="Visa"
                    width={40}
                    height={30}
                    className="h-6 w-auto"
                  />
                </div>
                <div className="bg-gray-700 rounded p-2 flex items-center justify-center">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png"
                    alt="Mastercard"
                    width={40}
                    height={30}
                    className="h-6 w-auto"
                  />
                </div>
                <div className="bg-gray-700 rounded p-2 flex items-center justify-center">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/200px-PayPal.svg.png"
                    alt="PayPal"
                    width={40}
                    height={30}
                    className="h-6 w-auto"
                  />
                </div>
                <div className="bg-gray-700 rounded p-2 flex items-center justify-center">
                  <Image
                    src="https://logos-world.net/wp-content/uploads/2021/02/Skrill-Logo-700x394.png"
                    alt="Skrill"
                    width={40}
                    height={30}
                    className="h-6 w-auto"
                  />
                </div>
                <div className="bg-gray-700 rounded p-2 flex items-center justify-center">
                  <Image
                    src="https://www.neteller.com/fileadmin/user_upload/neteller_logo.png"
                    alt="Neteller"
                    width={40}
                    height={30}
                    className="h-6 w-auto"
                  />
                </div>
                <div className="bg-gray-700 rounded p-2 flex items-center justify-center">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/200px-Bitcoin.svg.png"
                    alt="Bitcoin"
                    width={40}
                    height={30}
                    className="h-6 w-auto"
                  />
                </div>
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

export default function BonoPageWithProviders() {
  return (
    <AuthProvider>
      <BettingProvider>
        <BonoPage />
      </BettingProvider>
    </AuthProvider>
  )
}
