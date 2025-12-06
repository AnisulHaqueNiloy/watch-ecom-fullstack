"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface NavbarProps {
  isLoggedIn: boolean
  userRole: string | null
  userName?: string
}

export function Navbar({ isLoggedIn, userRole, userName }: NavbarProps) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", { method: "POST" })

      if (response.ok) {
        if (typeof window !== "undefined") {
          localStorage.removeItem("cart")
        }
        router.push("/")
        setIsOpen(false)
      }
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  return (
    <>
      <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-2xl font-bold text-primary animate-pulse-soft hover:opacity-80 transition-opacity"
          >
            TIMEKEEPER
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center">
            {isLoggedIn && userName && (
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  Welcome, <span className="font-semibold text-foreground">{userName}</span>
                </span>
                <div className="w-1 h-4 bg-border"></div>
              </div>
            )}
            <Link href="/shop" className="text-foreground hover:text-primary transition-colors font-medium">
              Shop
            </Link>
            {isLoggedIn ? (
              <>
                {userRole === "admin" && (
                  <Link href="/admin" className="text-foreground hover:text-primary transition-colors font-medium">
                    Admin
                  </Link>
                )}
                {userRole === "user" && (
                  <Link href="/dashboard" className="text-foreground hover:text-primary transition-colors font-medium">
                    Dashboard
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/signin" className="text-foreground hover:text-primary transition-colors font-medium">
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all font-medium"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-muted transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-card/95 backdrop-blur-sm animate-slide-down">
            <div className="px-4 py-4 space-y-3">
              <Link
                href="/shop"
                className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Shop
              </Link>
              {isLoggedIn ? (
                <>
                  {userRole === "admin" && (
                    <Link
                      href="/admin"
                      className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Admin
                    </Link>
                  )}
                  {userRole === "user" && (
                    <Link
                      href="/dashboard"
                      className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Dashboard
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 rounded-lg bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/signin"
                    className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="block w-full text-center px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
