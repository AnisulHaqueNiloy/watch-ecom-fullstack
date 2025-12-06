"use client"

import { AdminNav } from "@/components/admin-nav"
import { type FormEvent, useState } from "react"
import { useRouter } from "next/navigation"

export default function NewProductPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "watches",
    price: "",
    image: "",
    inStock: true,
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          price: Number.parseFloat(formData.price),
        }),
      })

      if (response.ok) {
        router.push("/admin/products")
      } else {
        alert("Failed to add product")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Error adding product")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <main className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="font-serif text-3xl font-bold mb-8">Add New Product</h1>

        <form onSubmit={handleSubmit} className="bg-card border border-border p-8 rounded-lg">
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Product Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              rows={4}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="watches">Watches</option>
                <option value="headphones">Headphones</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Price</label>
              <input
                type="number"
                required
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Image URL</label>
            <input
              type="text"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="mb-6 flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.inStock}
              onChange={(e) => setFormData({ ...formData, inStock: e.target.checked })}
              id="inStock"
            />
            <label htmlFor="inStock" className="text-sm">
              In Stock
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </main>
    </div>
  )
}
