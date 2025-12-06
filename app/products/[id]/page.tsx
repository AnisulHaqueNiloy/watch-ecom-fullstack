"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import type { Product } from "@/lib/types"
import { useCart } from "@/hooks/use-cart"

export default function ProductDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const { addToCart } = useCart()
  const [product, setProduct] = useState<Product | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(true)
  const [addedToCart, setAddedToCart] = useState(false)
  const [userRole, setUserRole] = useState<string | null>(null)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/me")
        if (response.ok) {
          const data = await response.json()
          setUserRole(data.role)
        }
      } catch (error) {
        console.error("Auth check failed:", error)
      }
    }
    checkAuth()
    fetchProduct()
  }, [params.id])

  const fetchProduct = async () => {
    try {
      const response = await fetch("/api/products")
      const data = await response.json()
      const p = data.products?.find((prod: Product) => prod._id === params.id)
      setProduct(p || null)
    } catch (error) {
      console.error("Failed to fetch product:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleBuyNow = async () => {
    try {
      const authResponse = await fetch("/api/auth/me")
      if (!authResponse.ok) {
        router.push("/signin")
        return
      }

      const authData = await authResponse.json()
      if (authData.role === "admin") {
        alert("Admin users cannot make purchases")
        return
      }

      if (product) {
        addToCart(product, quantity)
        sessionStorage.setItem("checkout-items", JSON.stringify([{ ...product, quantity }]))
        router.push("/checkout")
      }
    } catch (error) {
      console.error("Auth check failed:", error)
      router.push("/signin")
    }
  }

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity)
      setAddedToCart(true)
      setTimeout(() => setAddedToCart(false), 2000)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <nav className="bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center">
            <Link href="/" className="font-serif text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
              TIMEKEEPER
            </Link>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link href="/shop" className="text-primary hover:underline">
            Back to Shop
          </Link>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
            TIMEKEEPER
          </Link>
          <Link href="/shop" className="text-foreground hover:text-primary transition-smooth">
            ← Back to Shop
          </Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex items-center justify-center animate-slide-left">
            <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border-2 border-primary/20 overflow-hidden luxury-shine flex items-center justify-center">
              {product?.image ? (
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <span className="text-muted-foreground">No image available</span>
              )}
            </div>
          </div>

          <div className="animate-slide-right">
            <div className="mb-6">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">{product?.category}</p>
              <h1 className="font-serif text-5xl font-bold text-foreground mb-4">{product?.name}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{product?.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-card border border-border p-4 rounded-lg hover:border-primary transition-colors">
                <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">Category</p>
                <p className="text-lg font-semibold">
                  {product?.category.charAt(0).toUpperCase() + product?.category.slice(1)}
                </p>
              </div>
              <div className="bg-card border border-border p-4 rounded-lg hover:border-primary transition-colors">
                <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">Availability</p>
                <p className={`text-lg font-semibold ${product?.inStock ? "text-green-600" : "text-red-600"}`}>
                  {product?.inStock ? "In Stock" : "Out of Stock"}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20 p-8 rounded-lg mb-8">
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Premium Pricing</p>
              <p className="font-serif text-6xl font-bold text-accent">${product?.price?.toFixed(2)}</p>
            </div>

            {userRole === "admin" ? (
              <div className="bg-muted border border-border p-4 rounded-lg text-center">
                <p className="text-muted-foreground">Admin users cannot purchase products</p>
              </div>
            ) : product?.inStock ? (
              <div className="space-y-4">
                <div className="bg-card border border-border p-4 rounded-lg">
                  <label className="block text-sm font-semibold mb-3 text-foreground">Select Quantity</label>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="bg-background border border-border w-10 h-10 rounded flex items-center justify-center hover:bg-muted transition-colors"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                      className="w-16 text-center px-2 py-2 border border-input rounded bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="bg-background border border-border w-10 h-10 rounded flex items-center justify-center hover:bg-muted transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleBuyNow}
                  className="w-full bg-primary text-primary-foreground py-4 rounded-lg hover:opacity-90 transition-smooth hover-scale font-semibold text-lg"
                >
                  Buy Now
                </button>

                <button
                  onClick={handleAddToCart}
                  className={`w-full border-2 border-primary text-primary py-4 rounded-lg transition-all font-semibold text-lg ${
                    addedToCart ? "bg-primary text-primary-foreground" : "hover:bg-primary/10 bg-transparent"
                  }`}
                >
                  {addedToCart ? "✓ Added to Cart" : "Add to Cart"}
                </button>
              </div>
            ) : (
              <button
                disabled
                className="w-full bg-muted text-muted-foreground py-4 rounded-lg cursor-not-allowed font-semibold text-lg"
              >
                Out of Stock
              </button>
            )}

            <div className="mt-8 pt-8 border-t border-border space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xl">✓</span>
                <p className="text-sm text-muted-foreground">100% Authentic & Verified</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">🛡️</span>
                <p className="text-sm text-muted-foreground">Full Warranty & Support</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">🚚</span>
                <p className="text-sm text-muted-foreground">Secure Worldwide Shipping</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
