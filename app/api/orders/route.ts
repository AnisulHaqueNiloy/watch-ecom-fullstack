import { connectDB } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"

export async function GET() {
  try {
    const db = await connectDB()
    const ordersCollection = db.collection("orders")
    const orders = await ordersCollection.find({}).sort({ createdAt: -1 }).toArray()

    return NextResponse.json({ orders })
  } catch (error) {
    console.error("Get orders error:", error)
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId, userName, userEmail, userPhone, userAddress, items, totalPrice } = await request.json()

    if (!userId || !items || !totalPrice) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const db = await connectDB()
    const ordersCollection = db.collection("orders")

    const result = await ordersCollection.insertOne({
      userId,
      userName,
      userEmail,
      userPhone,
      userAddress,
      items,
      totalPrice,
      status: "pending",
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return NextResponse.json({
      success: true,
      orderId: result.insertedId,
    })
  } catch (error) {
    console.error("Create order error:", error)
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
  }
}
