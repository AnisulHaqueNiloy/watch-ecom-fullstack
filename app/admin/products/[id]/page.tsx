"use client"

import { AdminNav } from "@/components/admin-nav"
import { useRouter, useParams } from "next/navigation"
import { type FormEvent, useEffect, useState } from "react"
import type { Product } from "@/lib/types"

export default function EditProductPage() {
  const router = useRouter()
  const params = useParams()
  const productId = params.id as string
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "watches",
    price: "",
    image: "",
    inStock: true,
  })

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products`)
        const data = await response.json()
        const product = data.products?.find((p: Product) => p._id === productId)

        if (product) {
          setFormData({
            name: product.name,
            description: product.description,
            category: product.category,
            price: product.price.toString(),
            image: product.image || "",
            inStock: product.inStock,
          })
        }
      } catch (error) {
        console.error("Failed to fetch product:", error)
      } finally {
        setLoading(false)
      }
    }

    if (productId) fetchProduct()
  }, [productId])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          price: Number.parseFloat(formData.price),
        }),
      })

      if (response.ok) {
        router.push("/admin/products")
      } else {
        alert("Failed to update product")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Error updating product")
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <AdminNav />
        <main className="max-w-2xl mx-auto px-4 py-12">
          <p className="text-center text-muted-foreground">Loading...</p>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <main className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="font-serif text-3xl font-bold mb-8 animate-slide-up">Edit Product</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-card border border-border p-8 rounded-lg space-y-6 animate-slide-up"
        >
          <div>
            <label className="block text-sm font-medium mb-2">Product Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition"
              rows={4}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition"
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
                className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Image URL</label>
            <input
              type="text"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={formData.inStock}
              onChange={(e) => setFormData({ ...formData, inStock: e.target.checked })}
              id="inStock"
              className="w-4 h-4"
            />
            <label htmlFor="inStock" className="text-sm font-medium cursor-pointer">
              In Stock
            </label>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg hover:opacity-90 transition disabled:opacity-50 font-medium"
            >
              {submitting ? "Updating..." : "Update Product"}
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className="flex-1 bg-muted text-foreground py-2 rounded-lg hover:opacity-90 transition font-medium"
            >
              Cancel
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}
