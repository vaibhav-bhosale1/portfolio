import { MongoClient } from 'mongodb';

// MongoDB URI
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = 'visitorDB'; // Your database name

let cachedClient = null;
let cachedDb = null;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();

  const db = client.db(MONGODB_DB);
  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
