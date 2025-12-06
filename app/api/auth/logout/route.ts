import { clearAuthCookie } from "@/lib/auth"
import { NextResponse } from "next/server"

export async function POST() {
  try {
    await clearAuthCookie()

    const response = NextResponse.json({ success: true })
    response.cookies.set("auth-token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 0,
    })

    return response
  } catch (error) {
    console.error("Logout error:", error)
    return NextResponse.json({ error: "Logout failed" }, { status: 500 })
  }
}
