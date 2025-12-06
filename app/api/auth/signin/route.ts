import { connectDB } from "@/lib/db"
import { hashPassword, generateToken, setAuthCookie } from "@/lib/auth"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const db = await connectDB()
    const usersCollection = db.collection("users")

    const user = await usersCollection.findOne({ email })
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 401 })
    }

    const hashedPassword = hashPassword(password)
    if (user.password !== hashedPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 })
    }

    const token = generateToken(user._id.toString(), user.role)
    await setAuthCookie(token)

    return NextResponse.json({
      success: true,
      userId: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    })
  } catch (error) {
    console.error("Signin error:", error)
    return NextResponse.json({ error: "Signin failed" }, { status: 500 })
  }
}
