const express = require('express')
const app = express()

app.get('/test', (req, res)=>{
    res.send('Test api')
})

//file upload

//for show the html file
app.get('/upload', (req, res)=>{
    res.sendFile(__dirname+"/index.html")
})

//for pick the upload file or image
app.post('/upload', (req, res)=>{
    res.sendFile(__dirname+"/index.html")
})

module.exports = app