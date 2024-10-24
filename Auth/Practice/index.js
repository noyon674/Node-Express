const App = require('./app')
const port = 3001
App.listen(port, ()=>{
    console.log(`server run http://localhost:${port}`)
})