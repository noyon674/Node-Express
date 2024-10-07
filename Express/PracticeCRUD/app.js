const express = require('express');
const userRouter = require('./routers/routes');
const app = express();
const cors = require('cors')
const morgan = require('morgan');
const fileRouter = require('./routers/file.routes');
const multer = require('multer')
const path = require('path')
const upload = require('./utils/fileUpload')

//builtin middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))


//file upload
app.use('/api/file', fileRouter)

//require all the routes
app.use('/api/users', userRouter)


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