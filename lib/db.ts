import { MongoClient, type Db, type MongoClientOptions } from "mongodb";

const mongoUri =
  process.env.MONGODB_URI ||
  "mongodb+srv://watch-database:qFZWfCPdn3rWnao9@cluster0.djtn37n.mongodb.net/watch-database?appName=Cluster0";

// "mongodb+srv://e-commerce-watch:GHCSSPUwcdjxGEJB@cluster0.3zxuw.mongodb.net/ecom-collection?retryWrites=true&w=majority"

let client: MongoClient | null = null;
let db: Db | null = null;

export async function connectDB(): Promise<Db> {
  if (db) return db;

  try {
    client = new MongoClient(mongoUri, {
      maxPoolSize: 10,
    } as MongoClientOptions);

    await client.connect();
    db = client.db("ecom-collection");
    console.log("MongoDB connected");
    return db;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

export async function getDB(): Promise<Db> {
  if (db) return db;
  return connectDB();
}

export async function closeDB() {
  if (client) {
    await client.close();
    client = null;
    db = null;
  }
}
