"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Trophy } from "lucide-react"
import { Header } from "@/components/header"
import { BetSlip } from "@/components/betting/bet-slip"
import { AuthProvider } from "@/contexts/auth-context"
import { BettingProvider } from "@/contexts/betting-context"

// Real image URLs for promotions
const promoImages = {
  welcome: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=600&auto=format",
  risk: "https://images.unsplash.com/photo-1494059980473-813e73ee784b?q=80&w=600&auto=format",
  spins: "https://images.unsplash.com/photo-1596566787618-00f40dc58238?q=80&w=600&auto=format",
  cashback: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=600&auto=format",
  tournament: "https://images.unsplash.com/photo-1541278107931-e006523892df?q=80&w=600&auto=format",
  referral: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format",
}

function PromocionesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <Header />

      <main className="flex-1 container px-4 py-8">
        <div className="flex items-center mb-6">
          <Link href="/" className="text-yellow-500 mr-2">
            Inicio
          </Link>{" "}
          &gt;
          <span className="ml-2">Promociones</span>
        </div>

        <h1 className="text-3xl font-bold mb-8 flex items-center">
          <Trophy className="mr-2 h-6 w-6 text-yellow-500" />
          Promociones
        </h1>

        {/* Banner promocional */}
        <div className="relative h-[200px] md:h-[300px] w-full overflow-hidden rounded-xl mb-12">
          <Image
            src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=1200&auto=format"
            alt="Promociones"
            width={1200}
            height={300}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/30 flex flex-col justify-center px-6 md:px-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Promociones Exclusivas</h2>
            <p className="text-lg md:text-xl mb-6 max-w-md">
              Aprovecha nuestras ofertas especiales y maximiza tus ganancias
            </p>
          </div>
        </div>

        {/* Promociones para nuevos usuarios */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Para Nuevos Usuarios</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Bono de bienvenida */}
            <Link href="/promociones/bono-bienvenida" className="group">
              <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-500 transition-colors">
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

            {/* Apuesta sin riesgo */}
            <Link href="/promociones/apuesta-sin-riesgo" className="group">
              <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-500 transition-colors">
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
                  <p className="text-sm text-gray-400 mb-3">Si pierdes tu primera apuesta, te devolvemos hasta $100</p>
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

            {/* Giros gratis */}
            <Link href="/promociones/giros-gratis" className="group">
              <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-500 transition-colors">
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
        </section>

        {/* Promociones para todos los usuarios */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Para Todos los Usuarios</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cashback */}
            <Link href="/promociones/cashback" className="group">
              <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-500 transition-colors">
                <div className="h-48">
                  <Image
                    src={promoImages.cashback || "/placeholder.svg"}
                    alt="Cashback"
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-2">10% Cashback Semanal</h3>
                  <p className="text-sm text-gray-400 mb-3">Recupera el 10% de tus pérdidas cada semana</p>
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

            {/* Torneo */}
            <Link href="/promociones/torneo" className="group">
              <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-500 transition-colors">
                <div className="h-48">
                  <Image
                    src={promoImages.tournament || "/placeholder.svg"}
                    alt="Torneo"
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-2">Torneo Semanal</h3>
                  <p className="text-sm text-gray-400 mb-3">Compite por un premio de $5,000 cada semana</p>
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

            {/* Referidos */}
            <Link href="/promociones/referidos" className="group">
              <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-500 transition-colors">
                <div className="h-48">
                  <Image
                    src={promoImages.referral || "/placeholder.svg"}
                    alt="Referidos"
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-2">Programa de Referidos</h3>
                  <p className="text-sm text-gray-400 mb-3">Gana $50 por cada amigo que invites</p>
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
        </section>

        {/* Términos y condiciones */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Términos y Condiciones</h2>

          <div className="bg-gray-800 rounded-lg p-6">
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
              <li>Todas las promociones están sujetas a los términos y condiciones específicos de cada oferta.</li>
              <li>LuchoBet se reserva el derecho de modificar o cancelar cualquier promoción en cualquier momento.</li>
              <li>Las promociones no son acumulables entre sí, salvo que se indique lo contrario.</li>
              <li>Los bonos tienen requisitos de apuesta que deben cumplirse antes de poder retirar las ganancias.</li>
              <li>La participación en las promociones implica la aceptación de estos términos y condiciones.</li>
              <li>Solo se permite una cuenta por usuario, dirección IP, dispositivo y hogar.</li>
              <li>
                LuchoBet se reserva el derecho de solicitar documentación para verificar la identidad del usuario.
              </li>
              <li>En caso de disputa, la decisión de LuchoBet será definitiva.</li>
            </ul>
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

export default function PromocionesPageWithProviders() {
  return (
    <AuthProvider>
      <BettingProvider>
        <PromocionesPage />
      </BettingProvider>
    </AuthProvider>
  )
}
