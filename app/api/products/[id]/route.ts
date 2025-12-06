import { connectDB } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"
import { ObjectId } from "mongodb"

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const { name, description, category, price, image, inStock } = await request.json()

    const db = await connectDB()
    const productsCollection = db.collection("products")

    const result = await productsCollection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          name,
          description,
          category,
          price,
          image,
          inStock,
          updatedAt: new Date(),
        },
      },
    )

    return NextResponse.json({ success: result.modifiedCount > 0 })
  } catch (error) {
    console.error("Update product error:", error)
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const db = await connectDB()
    const productsCollection = db.collection("products")

    const result = await productsCollection.deleteOne({ _id: new ObjectId(id) })

    return NextResponse.json({ success: result.deletedCount > 0 })
  } catch (error) {
    console.error("Delete product error:", error)
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 })
  }
}
