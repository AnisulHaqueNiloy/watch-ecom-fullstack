"use client";

import type React from "react";
import { useCart } from "@/hooks/use-cart";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Product, OrderItem } from "@/lib/types";

export default function CheckoutPage() {
  const router = useRouter();
  const { clearCart } = useCart();
  const [user, setUser] = useState<any>(null);
  const [items, setItems] = useState<(Product & { quantity: number })[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    phone: "",
    address: "",
  });

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/auth/me");
      if (!response.ok) {
        router.push("/signin");
        return;
      }

      const userData = await response.json();
      setUser(userData);

      const checkoutItems = sessionStorage.getItem("checkout-items");
      if (checkoutItems) {
        const parsed = JSON.parse(checkoutItems);
        setItems(parsed);
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      router.push("/signin");
    } finally {
      setLoading(false);
    }
  };

  const calculateTotal = () => {
    return items
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const orderItems: OrderItem[] = items.map((item) => ({
        productId: item._id!,
        productName: item.name,
        quantity: item.quantity,
        price: item.price,
      }));

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.userId,
          userName: user.name,
          userEmail: user.email,
          userPhone: formData.phone,
          userAddress: formData.address,
          items: orderItems,
          totalPrice: Number.parseFloat(calculateTotal()),
        }),
      });

      if (!response.ok) {
        alert("Failed to create order");
        return;
      }

      const orderData = await response.json();

      const message = generateWhatsAppMessage(
        user,
        formData,
        items,
        calculateTotal()
      );
      const whatsappPhone =
        process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+8801639316678";
      const whatsappLink = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
        message
      )}`;

      clearCart();
      sessionStorage.removeItem("checkout-items");

      window.open(whatsappLink, "_blank");

      alert(
        "Order created! You will be redirected to WhatsApp to confirm with the admin."
      );

      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } catch (error) {
      console.error("Checkout error:", error);
      alert("An error occurred during checkout");
    } finally {
      setSubmitting(false);
    }
  };

  const generateWhatsAppMessage = (
    user: any,
    formData: any,
    items: any[],
    total: string
  ) => {
    let message = `*New Order from ${user.name}*\n\n`;
    message += `*Customer Details:*\n`;
    message += `Name: ${user.name}\n`;
    message += `Email: ${user.email}\n`;
    message += `Phone: ${formData.phone}\n`;
    message += `Address: ${formData.address}\n\n`;
    message += `*Items:*\n`;

    items.forEach((item) => {
      message += `• ${item.name} (${item.quantity}x @ $${item.price}) = $${(
        item.quantity * item.price
      ).toFixed(2)}\n`;
    });

    message += `\n*Total: $${total}*`;
    return message;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <nav className="bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center">
            <Link
              href="/"
              className="font-serif text-2xl font-bold text-primary"
            >
              TIMEKEEPER
            </Link>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <Link href="/shop" className="text-primary hover:underline">
            Continue Shopping
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/shop"
            className="font-serif text-2xl font-bold text-primary"
          >
            TIMEKEEPER
          </Link>
          <Link
            href="/shop"
            className="text-foreground hover:text-primary transition-smooth"
          >
            ← Back to Shop
          </Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 animate-slide-down">
          <h1 className="font-serif text-5xl font-bold mb-2">
            Secure Checkout
          </h1>
          <p className="text-muted-foreground">
            Complete your purchase securely
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 animate-slide-left">
            <form
              onSubmit={handleSubmit}
              className="bg-card border-2 border-primary/20 p-8 rounded-lg space-y-6"
            >
              <h2 className="font-serif text-2xl font-bold mb-8 text-foreground">
                Delivery Information
              </h2>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">
                  Full Name
                </label>
                <input
                  type="text"
                  value={user?.name}
                  disabled
                  className="w-full px-4 py-3 border border-border rounded-lg bg-muted cursor-not-allowed text-muted-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">
                  Email Address
                </label>
                <input
                  type="email"
                  value={user?.email}
                  disabled
                  className="w-full px-4 py-3 border border-border rounded-lg bg-muted cursor-not-allowed text-muted-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">
                  Delivery Address *
                </label>
                <textarea
                  required
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  rows={5}
                  placeholder="Enter your complete delivery address"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary text-primary-foreground py-4 rounded-lg hover:opacity-90 transition-smooth disabled:opacity-50 font-semibold text-lg mt-8"
              >
                {submitting ? "Processing..." : "Proceed to WhatsApp"}
              </button>

              <p className="text-xs text-muted-foreground text-center pt-4">
                By placing this order, you agree to our terms and conditions.
                You will be redirected to WhatsApp to confirm with our admin
                team.
              </p>
            </form>
          </div>

          <div className="animate-slide-right">
            <div className="bg-card border-2 border-primary/20 p-8 rounded-lg sticky top-24 space-y-6">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Order Summary
              </h2>

              <div className="space-y-4 pb-6 border-b-2 border-border">
                {items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">
                        {item.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="font-semibold text-accent ml-4">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">${calculateTotal()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="flex justify-between border-t-2 border-border pt-3">
                  <span className="font-semibold text-foreground">Total</span>
                  <span className="font-serif text-2xl font-bold text-accent">
                    ${calculateTotal()}
                  </span>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg text-sm">
                <p className="text-foreground">
                  <span className="font-semibold">Secure Payment:</span>{" "}
                  WhatsApp-based order confirmation
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
