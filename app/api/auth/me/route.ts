import { getAuthToken, parseToken } from "@/lib/auth"
import { connectDB } from "@/lib/db"
import { NextResponse } from "next/server"
import { ObjectId } from "mongodb"

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
    const usersCollection = db.collection("users")
    const user = await usersCollection.findOne({ _id: new ObjectId(decoded.userId) })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    return NextResponse.json({
      userId: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    })
  } catch (error) {
    console.error("Me endpoint error:", error)
    return NextResponse.json({ error: "Failed to get user" }, { status: 500 })
  }
}
