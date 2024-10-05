const express = require('express');
const userRouter = require('./routers/user.routes');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')

//built-in middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/api/users', userRouter)

//database connection
require('./config/db')

// handle clint site error
app.use((req, res, next)=>{
    res.status(401).send('Page not found')
})

// handle server site error
app.use((err, req, res, next)=>{
    res.status(501).send({
        message: 'Internal error'
    })
})

module.exports = app