// This is a placeholder for additional auth routes if needed in the future
import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({ message: "Auth routes available" })
}
