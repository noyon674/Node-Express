require('dotenv').config()
const config = require('./config/config')
const App = require('./app')
const port = config.app.port

App.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`)
})