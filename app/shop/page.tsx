"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Product } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/use-cart";

export default function ShopPage() {
  const router = useRouter();
  const { cart, count, addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("watches");
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/me");
        if (response.ok) {
          const data = await response.json();
          setUserRole(data.role);
        }
      } catch (error) {
        console.error("Auth check failed:", error);
      }
    };
    checkAuth();
    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((p) => p.category === selectedCategory);
    setFilteredProducts(filtered);
  }, [selectedCategory, products]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data.products || []);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
  };

  const handleCartClick = () => {
    if (cart.length > 0) {
      sessionStorage.setItem("checkout-items", JSON.stringify(cart));
      router.push("/checkout");
    }
  };

  const categories = ["watches"];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
          >
            TimeKeeper
          </Link>
          <div className="flex gap-4 items-center">
            <Link href="/" className="text-foreground hover:text-primary">
              Home
            </Link>
            {userRole === "user" && (
              <Link
                href="/dashboard"
                className="text-foreground hover:text-primary"
              >
                Dashboard
              </Link>
            )}
            {userRole === "user" && (
              <button
                onClick={handleCartClick}
                className="relative bg-primary text-primary-foreground px-4 py-2 rounded hover:opacity-90 cursor-pointer"
              >
                Cart {count > 0 && `(${count})`}
              </button>
            )}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl font-bold mb-2">Our Collection</h1>
          <p className="text-muted-foreground">
            Explore our premium watches and accessories
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <div className="md:col-span-1">
            <div className="bg-card border border-border p-6 rounded-lg sticky top-20">
              <h3 className="font-semibold mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left px-4 py-2 rounded transition ${
                      selectedCategory === cat
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="md:col-span-3">
            {loading ? (
              <p className="text-center text-muted-foreground">
                Loading products...
              </p>
            ) : filteredProducts.length === 0 ? (
              <p className="text-center text-muted-foreground">
                No products in this category
              </p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product._id}
                    className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition"
                  >
                    <div className="bg-muted h-48 flex items-center justify-center">
                      {product.image ? (
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-muted-foreground">No image</span>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-1 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-serif text-lg font-bold text-accent">
                          ${product.price}
                        </span>
                        <span
                          className={`text-sm ${
                            product.inStock ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {product.inStock ? "In Stock" : "Out of Stock"}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Link
                          href={`/products/${product._id}`}
                          className="flex-1 bg-foreground/10 text-foreground hover:bg-foreground/20 px-3 py-2 rounded text-sm font-medium transition text-center"
                        >
                          View Details
                        </Link>
                        {userRole === "user" && product.inStock && (
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="flex-1 bg-primary text-primary-foreground hover:opacity-90 px-3 py-2 rounded text-sm font-medium transition"
                          >
                            Add to Cart
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
