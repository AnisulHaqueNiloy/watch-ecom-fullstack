import { connectDB } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"

export async function GET() {
  try {
    const db = await connectDB()
    const productsCollection = db.collection("products")
    const products = await productsCollection.find({}).toArray()

    return NextResponse.json({ products })
  } catch (error) {
    console.error("Get products error:", error)
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, description, category, price, image, inStock } = await request.json()

    if (!name || !description || !category || !price) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const db = await connectDB()
    const productsCollection = db.collection("products")

    const result = await productsCollection.insertOne({
      name,
      description,
      category,
      price,
      image,
      inStock: inStock !== false,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return NextResponse.json({
      success: true,
      productId: result.insertedId,
    })
  } catch (error) {
    console.error("Create product error:", error)
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
  }
}
