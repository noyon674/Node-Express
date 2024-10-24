const App = require('./app');
const config = require('./config/config')
const port = config.app.portCode;

App.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`)
})

