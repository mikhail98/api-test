import http from 'http'

const server = http.createServer((request, response) => {
    switch (request.url) {
        case "/getList":
            response.writeHead(200, {
                'Content-type': "application/json"
            })
            response.end('{"data": [{"id": 1}, {"id": 2}, {"id": 3}]}')
            break
        case "/getList2":
            response.writeHead(200, {
                'Content-type': "application/json"
            })
            response.end('{"data": 1}')
            break
        default:
            response.writeHead(404, {
                'Content-type': "application/json"
            })
            response.end('{"data": "Not Found"}')
    }
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log("Started..")
})