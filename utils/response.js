const responseUtil = ((res, statusCode, payload) => {
  res.statusCode = statusCode
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(payload))
})

export default responseUtil