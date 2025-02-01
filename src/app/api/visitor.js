import { connectToDatabase } from '../lib/mongodb';

async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { db } = await connectToDatabase(); // Connect to MongoDB
      const collection = db.collection('visitorCount');
      
      // Check if the count document exists
      let count = await collection.findOne({ _id: 'visitorCount' });

      if (!count) {
        // If it doesn't exist, create a new document with count = 0
        count = { _id: 'visitorCount', count: 0 };
        await collection.insertOne(count);
      }

      // Increment the visitor count
      const updatedCount = count.count + 1;

      await collection.updateOne(
        { _id: 'visitorCount' },
        { $set: { count: updatedCount } }
      );

      // Respond with the updated count
      res.status(200).json({ count: updatedCount });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to fetch visitor count' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

export default handler;
