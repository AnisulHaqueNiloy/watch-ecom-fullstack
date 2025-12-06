"use client"

import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import type { Order } from "@/lib/types"

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/me")
        if (!response.ok) {
          router.push("/signin")
          return
        }
        const userData = await response.json()
        setUser(userData)

        const ordersResponse = await fetch("/api/orders/user")
        const ordersData = await ordersResponse.json()
        setOrders(ordersData.orders || [])
      } catch (error) {
        console.error("Auth check failed:", error)
        router.push("/signin")
      } finally {
        setLoading(false)
      }
    }
    checkAuth()
  }, [router])

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", { method: "POST" })

      if (response.ok) {
        if (typeof window !== "undefined") {
          localStorage.removeItem("cart")
        }
        router.push("/")
      } else {
        console.error("Logout failed with status:", response.status)
      }
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar isLoggedIn={true} userRole="user" userName={user?.name} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 animate-slide-up">
          <h1 className="font-serif text-5xl font-bold mb-2">My Dashboard</h1>
          <p className="text-muted-foreground text-lg">Track your orders and purchases</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in">
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-muted-foreground text-sm font-medium">Total Orders</p>
            <p className="font-serif text-4xl font-bold text-primary mt-2">{orders.length}</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-muted-foreground text-sm font-medium">Pending Orders</p>
            <p className="font-serif text-4xl font-bold text-accent mt-2">
              {orders.filter((o) => o.status === "pending").length}
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-muted-foreground text-sm font-medium">Total Spent</p>
            <p className="font-serif text-4xl font-bold text-primary mt-2">
              ${orders.reduce((sum, o) => sum + o.totalPrice, 0).toFixed(2)}
            </p>
          </div>
        </div>

        {/* Order History */}
        <section className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="font-serif text-3xl font-bold mb-6">Order History</h2>

          {orders.length === 0 ? (
            <div className="bg-card border border-border p-12 rounded-lg text-center">
              <p className="text-muted-foreground mb-6 text-lg">You haven't placed any orders yet</p>
              <Link
                href="/shop"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-all font-semibold"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order, idx) => (
                <div
                  key={order._id}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <button
                    onClick={() => setExpandedOrder(expandedOrder === order._id ? null : order._id)}
                    className="w-full p-6 flex justify-between items-center text-left hover:bg-muted/30 transition-colors"
                  >
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground font-medium">Order #{String(order._id).slice(-8)}</p>
                      <p className="font-semibold text-foreground mt-1">
                        {new Date(order.createdAt!).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground font-medium">Items</p>
                      <p className="font-semibold text-foreground">{order.items.length} items</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground font-medium">Amount</p>
                      <p className="font-serif text-lg font-bold text-accent">${order.totalPrice.toFixed(2)}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground font-medium">Status</p>
                      <p
                        className={`font-semibold mt-1 ${
                          order.status === "confirmed"
                            ? "text-green-600"
                            : order.status === "pending"
                              ? "text-yellow-600"
                              : "text-red-600"
                        }`}
                      >
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </p>
                    </div>
                    <div className="text-muted-foreground ml-4">{expandedOrder === order._id ? "▼" : "▶"}</div>
                  </button>

                  {expandedOrder === order._id && (
                    <div className="border-t border-border p-6 bg-muted/20 space-y-6 animate-slide-down">
                      <div>
                        <h4 className="font-serif font-bold text-lg mb-4">Delivery Information</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground font-medium">Name</p>
                            <p className="text-foreground font-semibold">{order.userName}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground font-medium">Phone</p>
                            <p className="text-foreground font-semibold">{order.userPhone}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground font-medium">Email</p>
                            <p className="text-foreground font-semibold">{order.userEmail}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground font-medium">Address</p>
                            <p className="text-foreground font-semibold">{order.userAddress}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-serif font-bold text-lg mb-4">Order Items</h4>
                        <div className="space-y-3 bg-background rounded-lg p-4">
                          {order.items.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex justify-between items-center pb-3 border-b border-border last:border-0 last:pb-0"
                            >
                              <div>
                                <p className="font-semibold text-foreground">{item.productName}</p>
                                <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                              </div>
                              <p className="font-semibold text-accent">${(item.quantity * item.price).toFixed(2)}</p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-border flex justify-between">
                          <span className="font-semibold text-lg">Total</span>
                          <span className="font-serif text-2xl font-bold text-primary">
                            ${order.totalPrice.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
