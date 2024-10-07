const App = require('./app')
const port = 3001


//server run
App.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})