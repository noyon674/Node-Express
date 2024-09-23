const express = require('express')
const app = express();
const userRouter = require('./router');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(userRouter)


app.use((req, res)=>{
    res.send('Page not found')
    res.end()
})

module.exports = app