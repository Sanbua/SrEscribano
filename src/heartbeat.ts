import http from 'node:http'

const server = http.createServer((req, res) => {
  res.writeHead(200)
  res.end('OK')
})

server.listen(process.env.PORT || 8000, () => {
  console.log('Heartbeat server running')
})
