"use client"

import Link from "next/link"

export function AnimatedHero() {
  return (
    <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-pretty animate-slide-up">
          Timeless Elegance
        </h1>
        <p
          className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Discover our curated collection of premium watches crafted for those who appreciate precision and style.
        </p>
        <Link
          href="/shop"
          className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-smooth animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          Browse Collection
        </Link>
      </div>
    </section>
  )
}
