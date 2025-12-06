"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminAuthPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || "Sign in failed")
        return
      }

      // Check if user is admin
      if (data.role !== "admin") {
        setError("You do not have admin access")
        return
      }

      router.push("/admin")
    } catch (error) {
      setError("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-card border border-border rounded-lg p-8">
          <h1 className="font-serif text-3xl font-bold mb-2 text-center text-primary">Admin Login</h1>
          <p className="text-center text-muted-foreground mb-8">Access the admin dashboard</p>

          {error && (
            <div className="bg-destructive/10 border border-destructive text-destructive p-3 rounded-lg mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@watchstore.com"
                className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:opacity-90 transition disabled:opacity-50 font-medium"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="mt-8 p-4 bg-muted rounded-lg text-sm text-muted-foreground">
            <p className="font-medium mb-2">Default Admin Credentials:</p>
            <p>Email: admin@watchstore.com</p>
            <p>Password: Admin@123456</p>
          </div>
        </div>
      </div>
    </div>
  )
}
