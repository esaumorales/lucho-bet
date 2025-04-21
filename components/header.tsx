"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Trophy, Menu, User, LogIn } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { LoginModal } from "@/components/auth/login-modal"
import { RegisterModal } from "@/components/auth/register-modal"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const { user, logout } = useAuth()
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
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/75">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Trophy className="h-8 w-8 text-yellow-500" />
              <span className="text-2xl font-bold text-yellow-500">LuchoBet</span>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/deportes" className="text-sm font-medium hover:text-yellow-500">
            Deportes
          </Link>
          <Link href="/casino" className="text-sm font-medium hover:text-yellow-500">
            Casino
          </Link>
          <Link href="/promociones" className="text-sm font-medium hover:text-yellow-500">
            Promociones
          </Link>
          <Link href="/resultados" className="text-sm font-medium hover:text-yellow-500">
            Resultados
          </Link>
          <Link href="/eventos-en-vivo" className="text-sm font-medium hover:text-yellow-500">
            En Vivo
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden md:flex border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                >
                  <User className="mr-2 h-4 w-4" />
                  {user.name}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-gray-900 border-gray-800 text-white">
                <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-800" />
                <DropdownMenuItem className="hover:bg-gray-800">
                  <Link href="/perfil" className="w-full">
                    Perfil
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-800">
                  <Link href="/mis-apuestas" className="w-full">
                    Mis Apuestas
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-800">
                  <div className="flex justify-between w-full">
                    <span>Saldo</span>
                    <span className="text-yellow-500">${user.balance.toFixed(2)}</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-800" />
                <DropdownMenuItem className="hover:bg-gray-800 focus:bg-gray-800 text-red-400" onClick={logout}>
                  Cerrar Sesión
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button
                variant="outline"
                size="sm"
                className="hidden md:flex border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                onClick={openLoginModal}
              >
                <LogIn className="mr-2 h-4 w-4" />
                Iniciar Sesión
              </Button>
              <Button
                size="sm"
                className="hidden md:flex bg-yellow-500 text-black hover:bg-yellow-600"
                onClick={openRegisterModal}
              >
                <User className="mr-2 h-4 w-4" />
                Registrarse
              </Button>
            </>
          )}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-900 text-white border-gray-800">
              <div className="flex flex-col gap-6 mt-8">
                <Link href="/deportes" className="text-lg font-medium hover:text-yellow-500">
                  Deportes
                </Link>
                <Link href="/casino" className="text-lg font-medium hover:text-yellow-500">
                  Casino
                </Link>
                <Link href="/promociones" className="text-lg font-medium hover:text-yellow-500">
                  Promociones
                </Link>
                <Link href="/resultados" className="text-lg font-medium hover:text-yellow-500">
                  Resultados
                </Link>
                <Link href="/eventos-en-vivo" className="text-lg font-medium hover:text-yellow-500">
                  En Vivo
                </Link>

                <div className="border-t border-gray-800 pt-6 mt-2">
                  {user ? (
                    <>
                      <div className="flex items-center gap-2 mb-4">
                        <User className="h-5 w-5 text-yellow-500" />
                        <span className="font-medium">{user.name}</span>
                      </div>
                      <div className="flex justify-between mb-4">
                        <span>Saldo:</span>
                        <span className="text-yellow-500 font-bold">${user.balance.toFixed(2)}</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Link href="/perfil">
                          <Button variant="outline" className="w-full justify-start">
                            Perfil
                          </Button>
                        </Link>
                        <Link href="/mis-apuestas">
                          <Button variant="outline" className="w-full justify-start">
                            Mis Apuestas
                          </Button>
                        </Link>
                        <Button variant="destructive" className="w-full justify-start mt-2" onClick={logout}>
                          Cerrar Sesión
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col gap-3">
                      <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-600" onClick={openLoginModal}>
                        <LogIn className="mr-2 h-4 w-4" />
                        Iniciar Sesión
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                        onClick={openRegisterModal}
                      >
                        <User className="mr-2 h-4 w-4" />
                        Registrarse
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

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
    </header>
  )
}
