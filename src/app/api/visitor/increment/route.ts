// app/api/visitor/increment/route.ts
import { connectToDatabase } from '@/app/lib/mongodb';

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const collection = db.collection('visitorCount');
    
    const result = await collection.findOneAndUpdate(
      { _id: "pageViews" },
      { $inc: { count: 1 } },
      { returnDocument: 'after', upsert: true }
    );
    
    return new Response(JSON.stringify({ count: result.count }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ 
      message: "Failed to increment visitor count", 
      error: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
    });
  }
}