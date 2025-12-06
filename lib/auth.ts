import crypto from "crypto"
import { cookies } from "next/headers"

export interface User {
  _id?: string
  name: string
  email: string
  password?: string
  phone?: string
  address?: string
  role: "user" | "admin"
  createdAt?: Date
}

const TOKEN_SECRET = process.env.TOKEN_SECRET || "your-secret-key-change-in-production"

export function hashPassword(password: string): string {
  return crypto.createHash("sha256").update(password).digest("hex")
}

export function generateToken(userId: string, role: string): string {
  const payload = {
    userId,
    role,
    iat: Date.now(),
  }
  return Buffer.from(JSON.stringify(payload)).toString("base64")
}

export async function setAuthCookie(token: string) {
  const cookieStore = await cookies()
  cookieStore.set("auth-token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60, // 7 days
  })
}

export async function getAuthToken() {
  const cookieStore = await cookies()
  return cookieStore.get("auth-token")?.value
}

export async function clearAuthCookie() {
  const cookieStore = await cookies()
  cookieStore.delete("auth-token")
}

export function parseToken(token: string) {
  try {
    const decoded = Buffer.from(token, "base64").toString("utf-8")
    return JSON.parse(decoded)
  } catch (error) {
    return null
  }
}
