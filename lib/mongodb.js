import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.DB_URI;
const dbName = process.env.DB_NAME;

if (!uri) {
  throw new Error('Please add your MongoDB URI to .env as DB_URI');
}
if (!dbName) {
  throw new Error('Please add your database name to .env as DB_NAME');
}

let client;
let clientPromise;

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

// Initialize MongoClient once
if (!client) {
  client = new MongoClient(uri, options);
  clientPromise = client.connect().catch((error) => {
    console.error('Failed to connect MongoClient:', error);
    throw new Error('MongoDB connection failed during initialization');
  });
}

async function getDB() {
  try {
    const connectedClient = await clientPromise;
    console.log('Connected to MongoDB');
    if (!connectedClient) {
      throw new Error('MongoDB client is not initialized');
    }
    return connectedClient.db(dbName);
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw new Error('Database connection failed: ' + error.message);
  }
}

async function getCollection(collectionName) {
  try {
    const db = await getDB();
    const collection = db.collection(collectionName);
    const collections = await db.listCollections().toArray();
    const collectionExists = collections.some(
      (col) => col.name === collectionName
    );
    if (!collectionExists) {
      console.warn(`Collection ${collectionName} not found, creating it`);
      // Optionally create the collection if it doesn't exist
      await db.createCollection(collectionName);
    }
    return collection;
  } catch (error) {
    console.error('Failed to get collection:', error);
    throw new Error(
      `Failed to access collection ${collectionName}: ${error.message}`
    );
  }
}

export { clientPromise, getDB, getCollection };
export default clientPromise;
