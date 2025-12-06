import { connectDB } from "@/lib/db"
import { hashPassword, generateToken, setAuthCookie } from "@/lib/auth"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, password, name } = await request.json()

    if (!email || !password || !name) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const db = await connectDB()
    const usersCollection = db.collection("users")

    const existingUser = await usersCollection.findOne({ email })
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    const hashedPassword = hashPassword(password)
    const newUser = {
      email,
      password: hashedPassword,
      name,
      role: "user",
      createdAt: new Date(),
    }

    const result = await usersCollection.insertOne(newUser)
    const token = generateToken(result.insertedId.toString(), "user")

    await setAuthCookie(token)

    return NextResponse.json({
      success: true,
      userId: result.insertedId,
      name,
      email,
      role: "user",
    })
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json({ error: "Signup failed" }, { status: 500 })
  }
}
