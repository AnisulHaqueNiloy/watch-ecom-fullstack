"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function AdminNav() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", { method: "POST" })

      if (response.ok) {
        if (typeof window !== "undefined") {
          localStorage.removeItem("cart")
        }
        router.push("/signin")
        setIsOpen(false)
      }
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  return (
    <>
      <nav className="bg-gradient-to-r from-card to-card/50 border-b border-border sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <Link href="/" className="font-serif text-2xl font-bold text-primary hover:opacity-90 transition-opacity">
                TIMEKEEPER
              </Link>
              <div className="hidden md:flex gap-8">
                <Link
                  href="/admin/products"
                  className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m0 0l8 4m-8-4v10l8 4m0-10l8-4m-8 4v10l8-4m-8-10l8 4m0 0l8-4"
                    />
                  </svg>
                  Products
                </Link>
                <Link
                  href="/admin/orders"
                  className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  Orders
                </Link>
              </div>
            </div>

            {/* Desktop Logout */}
            <button
              onClick={handleLogout}
              className="hidden md:block bg-destructive/10 text-destructive px-6 py-2 rounded-lg hover:bg-destructive/20 transition-colors font-medium"
            >
              Logout
            </button>

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
                  d={isOpen ? "M6 18L18 6M6 6l12 12M6 12l12-12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden border-t border-border bg-card/95 backdrop-blur-sm py-4 space-y-3 animate-slide-down">
              <Link
                href="/admin/products"
                className="block text-foreground hover:text-primary transition-colors font-medium px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/admin/orders"
                className="block text-foreground hover:text-primary transition-colors font-medium px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Orders
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors font-medium rounded-lg mx-2"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
