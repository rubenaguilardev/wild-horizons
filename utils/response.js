const responseUtil = ((res, statusCode, header, payload) => {
  res.statusCode = statusCode
  res.setHeader('Content-Type', header)
  res.end(JSON.stringify(payload))
})

export default responseUtil