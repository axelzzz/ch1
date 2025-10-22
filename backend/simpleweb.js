import { createServer } from 'node:http'
import { readFileSync } from 'node:fs'

const server = createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(readFileSync('users.json', 'utf-8'))
})

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/')
})
