require('dotenv').config()
const App = require('./app');

const port = process.env.PORT

App.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`)
})