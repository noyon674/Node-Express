const express = require('express')
const app = express()
const multer = require('multer')

app.get('/test', (req, res)=>{
    res.send('Test api')
})

//file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const name = Date.now()+'-'+file.originalname
      cb(null, name)
    }
  })
  
  const upload = multer({ storage: storage })

//for show the html file
app.get('/upload', (req, res)=>{
    res.sendFile(__dirname+"/index.html")
})

//for pick the upload file or image
app.post('/upload', (req, res)=>{
    res.status(201).json('File is uploaded')
})

module.exports = app