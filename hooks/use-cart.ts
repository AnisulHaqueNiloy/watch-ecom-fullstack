"use client"

import { useEffect, useState } from "react"
import type { Product } from "@/lib/types"

export interface CartItem extends Product {
  quantity: number
}

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [loaded, setLoaded] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("cart")
    if (saved) {
      try {
        setCart(JSON.parse(saved))
      } catch (e) {
        console.error("Failed to parse cart from localStorage:", e)
      }
    }
    setLoaded(true)
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (loaded) {
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }, [cart, loaded])

  const addToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item._id === product._id)
      if (existing) {
        return prev.map((item) => (item._id === product._id ? { ...item, quantity: item.quantity + quantity } : item))
      }
      return [...prev, { ...product, quantity }]
    })
  }

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item._id !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      setCart((prev) => prev.map((item) => (item._id === productId ? { ...item, quantity } : item)))
    }
  }

  const clearCart = () => {
    setCart([])
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const count = cart.reduce((sum, item) => sum + item.quantity, 0)

  return {
    cart,
    count,
    total: total.toFixed(2),
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    loaded,
  }
}
