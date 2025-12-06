"use client"

import { AdminNav } from "@/components/admin-nav"
import { useEffect, useState } from "react"
import type { Order } from "@/lib/types"

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    try {
      const response = await fetch("/api/orders")
      const data = await response.json()
      setOrders(data.orders || [])
    } catch (error) {
      console.error("Failed to fetch orders:", error)
    } finally {
      setLoading(false)
    }
  }

  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/orders/${orderId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      })

      if (response.ok) {
        setOrders(orders.map((o) => (o._id === orderId ? { ...o, status: newStatus as any } : o)))
      }
    } catch (error) {
      console.error("Failed to update order:", error)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-serif text-3xl font-bold mb-8">Orders</h1>

        {loading ? (
          <p className="text-center text-muted-foreground">Loading...</p>
        ) : orders.length === 0 ? (
          <p className="text-center text-muted-foreground">No orders found</p>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order._id} className="bg-card border border-border p-6 rounded-lg">
                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Order ID</p>
                    <p className="font-semibold">{String(order._id).slice(-8)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Customer</p>
                    <p className="font-semibold">{order.userName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total</p>
                    <p className="font-semibold">${order.totalPrice}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <select
                      value={order.status}
                      onChange={(e) => updateOrderStatus(order._id!, e.target.value)}
                      className="mt-1 px-3 py-1 border border-input rounded bg-background text-sm"
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded mb-4">
                  <h4 className="font-semibold mb-2">Items</h4>
                  <ul className="space-y-1 text-sm">
                    {order.items.map((item, idx) => (
                      <li key={idx}>
                        {item.productName} × {item.quantity} @ ${item.price}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-sm text-muted-foreground">
                  <p>Phone: {order.userPhone}</p>
                  <p>Address: {order.userAddress}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
