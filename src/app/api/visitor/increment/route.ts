// app/api/visitor/increment/route.ts
import { connectToDatabase } from '@/app/lib/mongodb';
import { Document } from 'mongodb';

export async function POST() {
  try {
    const { db } = await connectToDatabase();
    const collection = db.collection('visitorCount');
    
    const result = await collection.findOneAndUpdate(
      { _id: "pageViews" } as Document,
      { $inc: { count: 1 } },
      { 
        upsert: true,
        returnDocument: 'after'
      }
    );
    
    return new Response(JSON.stringify({ 
      count: result?.count || 0 
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ 
      message: "Failed to increment count"
    }), { status: 500 });
  }
}