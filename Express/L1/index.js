const App = require('./app')
const port = 3100;

App.listen(port, ()=>{
    console.log(`Server is runing...http://localhost:${port}`)
})

