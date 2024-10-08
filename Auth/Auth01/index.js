require('dotenv').config()
const App = require('./app')
const port = process.env.PORT || 5000

App.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})