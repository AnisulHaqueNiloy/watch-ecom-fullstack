"use client"

import Link from "next/link"
import type { Product } from "@/lib/types"
import { useState } from "react"

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-smooth animate-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-muted h-48 flex items-center justify-center overflow-hidden relative">
        {product.image ? (
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className={`w-full h-full object-cover transition-smooth ${isHovered ? "scale-110" : "scale-100"}`}
          />
        ) : (
          <span className="text-muted-foreground">No image</span>
        )}
        {product.inStock && (
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
            In Stock
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-1 line-clamp-2 animate-slide-up">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="font-serif text-lg font-bold text-accent">${product.price}</span>
        </div>
        <div className="flex gap-2">
          <Link
            href={`/products/${product._id}`}
            className="flex-1 bg-foreground/10 text-foreground hover:bg-foreground/20 px-3 py-2 rounded text-sm font-medium transition-smooth text-center"
          >
            View Details
          </Link>
          {product.inStock && (
            <button
              onClick={() => onAddToCart(product)}
              className="flex-1 bg-primary text-primary-foreground hover:opacity-90 px-3 py-2 rounded text-sm font-medium transition-smooth"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
