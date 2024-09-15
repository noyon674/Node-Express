//importing http module
const http = require('http')

// server created
const server = http.createServer((request, response)=>{
    response.end('I am your first server')
    console.log()
});


//server runs in 3000 port
server.listen(3000, ()=>{
    console.log('Server is running...')
})