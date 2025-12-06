import { getAuthToken, parseToken } from "@/lib/auth"
import { connectDB } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const token = await getAuthToken()
    if (!token) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const decoded = parseToken(token)
    if (!decoded) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 })
    }

    const db = await connectDB()
    const ordersCollection = db.collection("orders")
    const orders = await ordersCollection.find({ userId: decoded.userId }).sort({ createdAt: -1 }).toArray()

    return NextResponse.json({ orders })
  } catch (error) {
    console.error("Get user orders error:", error)
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 })
  }
}
