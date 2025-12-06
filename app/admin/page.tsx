"use client"

import { AdminNav } from "@/components/admin-nav"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
    pendingOrders: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [productsRes, ordersRes] = await Promise.all([fetch("/api/products"), fetch("/api/orders")])

        const productsData = await productsRes.json()
        const ordersData = await ordersRes.json()

        const products = productsData.products || []
        const orders = ordersData.orders || []
        const totalRevenue = orders.reduce((sum: number, order: any) => sum + order.totalPrice, 0)
        const pendingOrders = orders.filter((o: any) => o.status === "pending").length

        setStats({
          totalProducts: products.length,
          totalOrders: orders.length,
          totalRevenue,
          pendingOrders,
        })
      } catch (error) {
        console.error("Failed to fetch stats:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 animate-slide-up">
          <h1 className="font-serif text-5xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground text-lg">Manage your watch store operations</p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Total Products", value: stats.totalProducts, icon: "📦", delay: 0 },
            { label: "Total Orders", value: stats.totalOrders, icon: "🛒", delay: 0.1 },
            { label: "Total Revenue", value: `$${stats.totalRevenue.toFixed(2)}`, icon: "💰", delay: 0.2 },
            { label: "Pending Orders", value: stats.pendingOrders, icon: "⏳", delay: 0.3 },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${stat.delay}s` }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
                  <p className="font-serif text-4xl font-bold text-accent mt-2">{loading ? "-" : stat.value}</p>
                </div>
                <div className="text-4xl">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <Link
            href="/admin/products"
            className="bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/30 p-8 rounded-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  Manage Products
                </h2>
                <p className="text-muted-foreground mt-2">Add, edit, or remove watches from your catalog</p>
              </div>
              <div className="text-4xl group-hover:scale-110 transition-transform duration-300">📦</div>
            </div>
            <span className="inline-block mt-4 text-primary font-semibold group-hover:translate-x-2 transition-transform">
              Go to Products →
            </span>
          </Link>

          <Link
            href="/admin/orders"
            className="bg-gradient-to-br from-accent/10 to-primary/5 border border-accent/30 p-8 rounded-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                  View Orders
                </h2>
                <p className="text-muted-foreground mt-2">Manage and track customer orders in real-time</p>
              </div>
              <div className="text-4xl group-hover:scale-110 transition-transform duration-300">🛒</div>
            </div>
            <span className="inline-block mt-4 text-accent font-semibold group-hover:translate-x-2 transition-transform">
              Go to Orders →
            </span>
          </Link>
        </div>
      </main>
    </div>
  )
}
