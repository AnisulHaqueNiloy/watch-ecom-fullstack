import { parseToken, getAuthToken } from "@/lib/auth"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const token = await getAuthToken()

    if (!token) {
      return NextResponse.json({ isAdmin: false }, { status: 200 })
    }

    const decoded = parseToken(token)
    if (!decoded || decoded.role !== "admin") {
      return NextResponse.json({ isAdmin: false }, { status: 200 })
    }

    return NextResponse.json({ isAdmin: true, role: decoded.role }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ isAdmin: false }, { status: 200 })
  }
}
