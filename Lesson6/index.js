const http = require('http')
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res)=>{
    console.log(req.url)
    if(req.url === "/"){
        fs.readFile('home.html', (err, data)=>{
            res.writeHead(200, {"content-type": "text/html"})
            res.write(data)
            res.end()
        })
    }
    res.end("Welcome to the server")
})

server.listen(port, ()=>{
    console.log('Server running...')
})