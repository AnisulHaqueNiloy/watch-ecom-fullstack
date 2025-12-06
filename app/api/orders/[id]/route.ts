import { connectDB } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"
import { ObjectId } from "mongodb"

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const { status } = await request.json()

    const db = await connectDB()
    const ordersCollection = db.collection("orders")

    const result = await ordersCollection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          status,
          updatedAt: new Date(),
        },
      },
    )

    return NextResponse.json({ success: result.modifiedCount > 0 })
  } catch (error) {
    console.error("Update order error:", error)
    return NextResponse.json({ error: "Failed to update order" }, { status: 500 })
  }
}
