const App = require('./app');
const config = require('./config/config')
const port = config.portCode

App.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})