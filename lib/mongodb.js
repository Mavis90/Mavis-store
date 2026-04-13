// MongoDB connection utility
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function connectToDatabase() {
    if (!client.isConnected()) {
        await client.connect();
    }
    return client.db();
}

module.exports = connectToDatabase;