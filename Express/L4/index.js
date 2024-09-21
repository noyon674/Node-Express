const App = require('./app')
const port = 3100

App.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`)
})