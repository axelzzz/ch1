import { createServer } from 'node:http'
import { MongoClient } from 'mongodb'

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)
const dbName = 'ch1'

try {
  await client.connect()
  console.log('Connected successfully to MongoDB server')
} catch (err) {
  console.error('MongoDB connection error:', err)
}

const server = createServer(async (req, res) => {
  const db = client.db(dbName)
  const collection = db.collection('users')
  const users = await collection.find({}).toArray()

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(users))
})

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/')
})
