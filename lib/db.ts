import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  // We won't throw at import-time to avoid breaking static rendering;
  // API routes will handle missing env at runtime.
  console.warn("MONGODB_URI is not set. /api routes that need DB will fail until set.")
}

declare global {
  // eslint-disable-next-line no-var
  var __mongooseConn: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } | undefined
}

let cached = global.__mongooseConn || { conn: null, promise: null }

export async function dbConnect() {
  if (cached.conn) return cached.conn
  if (!MONGODB_URI) throw new Error("Missing MONGODB_URI env")
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((m) => m)
  }
  cached.conn = await cached.promise
  global.__mongooseConn = cached
  return cached.conn
}
