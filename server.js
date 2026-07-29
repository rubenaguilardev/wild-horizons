import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import responseUtil from './utils/response.js'

const PORT = 8000

const server = http.createServer(async (req, res) => {

  const destinations = await getDataFromDB()

  if (req.url === '/api' && req.method === 'GET') {
    responseUtil(res, 200, 'application/json', destinations)
  } else if (req.url.startsWith('/api/continent') && req.method === 'GET') {
    const continent = req.url.split('/').pop()
    const filteredData = destinations.filter(destination => destination.continent.toLowerCase() === continent.toLowerCase())
    responseUtil(res, 200, 'application/json', filteredData)
  } else {
    responseUtil(res, 404, 'application/json', {error: "not found", message: "The requested route does not exist"} )
  }
})

server.listen(PORT, () => console.log(`server running on port: ${PORT}`))