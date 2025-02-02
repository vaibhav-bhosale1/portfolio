// app/api/visitor/route.ts
import { connectToDatabase } from '@/app/lib/mongodb';
import { Document } from 'mongodb';

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const collection = db.collection('visitorCount');
    
    const visitor = await collection.findOne({ _id: "pageViews" } as Document);
    return Response.json({ count: visitor?.count || 0 });
  } catch (error) {
    return Response.json({ error: "Failed to fetch count" }, { status: 500 });
  }
}

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
    
    return Response.json({ count: result?.count || 0 });
  } catch (error) {
    return Response.json({ error: "Failed to increment count" }, { status: 500 });
  }
}