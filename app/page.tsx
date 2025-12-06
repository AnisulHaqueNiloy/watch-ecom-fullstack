"use client"

import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Home() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userRole, setUserRole] = useState<string | null>(null)
  const [userName, setUserName] = useState<string | null>(null)
  const [featuredProducts, setFeaturedProducts] = useState<any[]>([])

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/me")
        if (response.ok) {
          const data = await response.json()
          setIsLoggedIn(true)
          setUserRole(data.role)
          setUserName(data.name)
        }
      } catch (error) {
        console.error("Auth check failed:", error)
      }
    }

    const fetchFeaturedProducts = async () => {
      try {
        const response = await fetch("/api/products")
        if (response.ok) {
          const data = await response.json()
          setFeaturedProducts((data.products || []).slice(0, 6))
        }
      } catch (error) {
        console.error("Failed to fetch products:", error)
      }
    }

    checkAuth()
    fetchFeaturedProducts()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar isLoggedIn={isLoggedIn} userRole={userRole} userName={userName} />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="animate-slide-up">
                <p className="text-primary font-semibold text-sm tracking-widest uppercase">Timeless Elegance</p>
                <h1 className="font-serif text-6xl md:text-7xl font-bold text-foreground mt-4 text-pretty leading-tight">
                  Precision & <span className="text-primary">Craftsmanship</span>
                </h1>
              </div>

              <p
                className="text-lg text-muted-foreground max-w-lg leading-relaxed animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                Discover our curated collection of luxury watches from world-renowned manufacturers. Each timepiece
                tells a story of exceptional artistry and unwavering quality.
              </p>

              <div className="flex gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
                <Link
                  href="/shop"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded font-semibold hover:opacity-90 transition-smooth hover-scale"
                >
                  Explore Collection
                </Link>
                <Link
                  href="/shop"
                  className="border-2 border-primary text-primary px-8 py-4 rounded font-semibold hover:bg-primary/5 transition-smooth"
                >
                  Learn More
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 animate-slide-up" style={{ animationDelay: "0.6s" }}>
                <div>
                  <p className="text-2xl font-serif font-bold text-accent">500+</p>
                  <p className="text-sm text-muted-foreground">Premium Watches</p>
                </div>
                <div>
                  <p className="text-2xl font-serif font-bold text-accent">10K+</p>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
                <div>
                  <p className="text-2xl font-serif font-bold text-accent">15+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>

            <div className="hidden md:block animate-slide-right">
              <div className="relative w-full h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border-2 border-primary/20 overflow-hidden luxury-shine flex items-center justify-center">
                <img
                  src="/luxury-watch-showcase.jpg"
                  alt="Premium watch collection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">Our Collection</p>
            <h2 className="font-serif text-5xl font-bold text-foreground mb-4">Featured Timepieces</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Handpicked selections from the world's finest watchmakers
            </p>
          </div>

          {featuredProducts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {featuredProducts.map((product, idx) => (
                <div
                  key={product._id}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-in hover-scale"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="relative h-64 bg-muted overflow-hidden">
                    {product.image ? (
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        No image
                      </div>
                    )}
                    {product.inStock && (
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide">
                        In Stock
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">
                      {product.category}
                    </p>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-serif text-3xl font-bold text-accent">${product.price.toFixed(2)}</span>
                    </div>
                    <Link
                      href={`/products/${product._id}`}
                      className="w-full bg-primary text-primary-foreground py-3 rounded font-semibold hover:opacity-90 transition-smooth text-center block"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading featured products...</p>
            </div>
          )}

          <div className="text-center mt-16 animate-slide-up">
            <Link
              href="/shop"
              className="inline-block border-2 border-primary text-primary px-8 py-4 rounded font-semibold hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-serif text-5xl font-bold text-foreground mb-4">Why Choose TimeKeeper</h2>
            <p className="text-muted-foreground">Discover what sets us apart in the luxury watch market</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⌚",
                title: "Authentic Collection",
                description: "Every watch is verified and certified as 100% authentic with full documentation.",
              },
              {
                icon: "✓",
                title: "Expert Curation",
                description: "Our team of horologists handpicks each piece for quality and investment value.",
              },
              {
                icon: "🛡️",
                title: "Lifetime Support",
                description: "Comprehensive warranty, maintenance, and white-glove customer service.",
              },
              {
                icon: "🌍",
                title: "Global Shipping",
                description: "Secure, insured delivery to any location with full tracking.",
              },
              {
                icon: "💳",
                title: "Flexible Payment",
                description: "Multiple payment options including installment plans available.",
              },
              {
                icon: "🏆",
                title: "Award Winning",
                description: "Trusted by collectors and enthusiasts worldwide since 2009.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="text-center p-8 bg-background rounded-lg border border-border hover:border-primary transition-colors animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <p className="text-5xl mb-4">{feature.icon}</p>
                <h3 className="font-serif text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="animate-slide-up">
            <h2 className="font-serif text-5xl font-bold text-foreground mb-6">Ready to Own Your Dream Watch?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join thousands of collectors who have found their perfect timepiece. Explore our exclusive collection
              today and get personalized recommendations from our expert team.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/shop"
                className="bg-primary text-primary-foreground px-8 py-4 rounded font-semibold hover:opacity-90 transition-smooth hover-scale"
              >
                Start Shopping Now
              </Link>
              <Link
                href="/signup"
                className="border-2 border-primary text-primary px-8 py-4 rounded font-semibold hover:bg-primary/5 transition-smooth"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">TIMEKEEPER</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Curating the world's finest timepieces for collectors and enthusiasts since 2009.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Shop</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                    All Watches
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                    Best Sellers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Customer Care</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Returns
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm">&copy; 2025 TimeKeeper. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
