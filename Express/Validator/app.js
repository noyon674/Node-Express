const express = require('express');
const userRouter = require('./routers/routes');
const app = express();
const cors = require('cors')
const morgan = require('morgan');
const fileRouter = require('./routers/file.routes');


//builtin middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))

//require all the routes
app.use('/api/users', userRouter)

app.use('/api/file', fileRouter)

//mongodb connection
require('./config/db')

//client site error handling
app.use((req, res, next)=>{
    res.status(401).json("Page is not found")
})

//server site error handling
app.use((err, req, res, next)=>{
    res.status(500).json("Internal Problem")
})

module.exports = app;