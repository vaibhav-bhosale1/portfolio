// app/api/visitor/get/route.ts
import { connectToDatabase } from '@/app/lib/mongodb';

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const collection = db.collection('visitorCount');
    
    let visitor = await collection.findOne({ _id: "pageViews" });
    
    return new Response(JSON.stringify({ count: visitor?.count || 0 }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ 
      message: "Failed to fetch visitor count", 
      error: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
    });
  }
}