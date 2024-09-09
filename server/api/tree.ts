import { defineEventHandler } from 'h3'
import fs from 'node:fs/promises'

export default defineEventHandler(async () => {
  return await fs.readFile('./public/tree.json')
})