import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

const uri = process.env.MONGODB_URI;
console.log("MongoDB URI configured:", uri.substring(0, 20) + "..."); // Log partial URI for safety

export async function connectToDatabase() {
  try {
    const client = new MongoClient(uri);
    console.log('Attempting to connect to MongoDB...');
    await client.connect();
    console.log('Connected to MongoDB successfully');
    
    const dbName = process.env.MONGODB_DB || "portfolio";
    console.log('Using database:', dbName);
    const db = client.db(dbName);
    
    // Test the connection
    await db.command({ ping: 1 });
    console.log("Database connection verified");
    
    return { db };
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
}