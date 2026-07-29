import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import responseUtil from './utils/response.js'
import filterData from './utils/filterData.js'

const PORT = 8000

const server = http.createServer(async (req, res) => {

  const destinations = await getDataFromDB()

  if (req.url === '/api' && req.method === 'GET') {
    responseUtil(res, 200, destinations)
  } else if (req.url.startsWith('/api/continent') && req.method === 'GET') {
    const continent = req.url.split('/').pop()
    const filteredData = filterData(destinations, 'continent', continent)
    responseUtil(res, 200, filteredData)
  } else if (req.url.startsWith('/api/country') && req.method === 'GET') {
    const country = req.url.split('/').pop()
    const filteredData = filterData(destinations, 'country', country)
    responseUtil(res, 200, filteredData)
  }else {
    responseUtil(res, 404, {error: "not found", message: "The requested route does not exist"} )
  }
})

server.listen(PORT, () => console.log(`server running on port: ${PORT}`))