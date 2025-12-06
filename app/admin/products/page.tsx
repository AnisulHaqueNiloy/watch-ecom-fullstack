"use client"

import { AdminNav } from "@/components/admin-nav"
import { useEffect, useState } from "react"
import Link from "next/link"
import type { Product } from "@/lib/types"

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products")
      const data = await response.json()
      setProducts(data.products || [])
    } catch (error) {
      console.error("Failed to fetch products:", error)
    } finally {
      setLoading(false)
    }
  }

  const deleteProduct = async (id: string) => {
    if (!confirm("Are you sure?")) return
    try {
      await fetch(`/api/products/${id}`, { method: "DELETE" })
      setProducts(products.filter((p) => p._id !== id))
    } catch (error) {
      console.error("Failed to delete product:", error)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-serif text-3xl font-bold">Products</h1>
          <Link
            href="/admin/products/new"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition"
          >
            Add Product
          </Link>
        </div>

        {loading ? (
          <p className="text-center text-muted-foreground">Loading...</p>
        ) : products.length === 0 ? (
          <p className="text-center text-muted-foreground">No products found</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold">Name</th>
                  <th className="text-left py-3 px-4 font-semibold">Category</th>
                  <th className="text-left py-3 px-4 font-semibold">Price</th>
                  <th className="text-left py-3 px-4 font-semibold">Stock</th>
                  <th className="text-left py-3 px-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id} className="border-b border-border hover:bg-muted/50">
                    <td className="py-3 px-4">{product.name}</td>
                    <td className="py-3 px-4">{product.category}</td>
                    <td className="py-3 px-4">${product.price}</td>
                    <td className="py-3 px-4">
                      <span className={product.inStock ? "text-green-600" : "text-red-600"}>
                        {product.inStock ? "In Stock" : "Out of Stock"}
                      </span>
                    </td>
                    <td className="py-3 px-4 flex gap-2">
                      <Link href={`/admin/products/${product._id}`} className="text-primary hover:underline">
                        Edit
                      </Link>
                      <button onClick={() => deleteProduct(product._id!)} className="text-destructive hover:underline">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  )
}
