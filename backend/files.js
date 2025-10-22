import { writeFileSync, readFileSync } from 'node:fs'

const users = [{ name: 'Adam Ondra', email: 'adam.ondra@climb.ing' }]
const usersJSON = JSON.stringify(users)

writeFileSync('users.json', usersJSON)

const data = readFileSync('users.json', 'utf-8')
const usersFromFile = JSON.parse(data)

console.log(usersFromFile)
