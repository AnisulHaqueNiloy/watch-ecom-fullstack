import { MongoClient } from "mongodb"
import crypto from "crypto"

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/watch-store"

async function createAdmin() {
  const client = new MongoClient(MONGODB_URI)

  try {
    await client.connect()
    const db = client.db("watch-store")
    const usersCollection = db.collection("users")

    // Check if admin already exists
    const existingAdmin = await usersCollection.findOne({ role: "admin" })
    if (existingAdmin) {
      console.log("Admin user already exists:", existingAdmin.email)
      return
    }

    // Create admin user
    const adminEmail = "admin@watchstore.com"
    const adminPassword = "Admin@123456"
    const hashedPassword = crypto.createHash("sha256").update(adminPassword).digest("hex")

    const result = await usersCollection.insertOne({
      name: "Admin",
      email: adminEmail,
      password: hashedPassword,
      role: "admin",
      createdAt: new Date(),
    })

    console.log("Admin user created successfully!")
    console.log("Email:", adminEmail)
    console.log("Password:", adminPassword)
    console.log("ID:", result.insertedId)
    console.log("\nPlease change the password after first login!")
  } catch (error) {
    console.error("Error creating admin:", error)
  } finally {
    await client.close()
  }
}

createAdmin()
