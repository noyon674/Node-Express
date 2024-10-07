const App = require('./app');
const config = require('./config/config')
const port = config.app.Port


//server running
App.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`)
})