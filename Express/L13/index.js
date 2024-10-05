const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3001
const multer = require('multer')
const db_url = 'mongodb://localhost:27017/fileupload'

//mongodb is connected with local mongodb
mongoose
.connect(db_url)
.then(e=>console.log("Mongodb connected"))
.catch(err=>console.log(err.message))

//creating schema and model
const demoSchema = mongoose.Schema({
    name:{
        type: String,
        require: [true, 'Name is required']
    },
    image: {
        type: String,
        require: [true, 'Image is required']
    }
})

//creating model

//file uploading processing code
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const name = Date.now()+"-"+file.originalname
      cb(null, name)
    }
  })
  
  const upload = multer({ storage: storage })


app.post('/', upload.single('file'), (req, res)=>{
    res.status(201).send("<h2>File is uploaded</h2>")

})

app.get('/', (req, res)=>{
    res.status(201).sendFile(__dirname+"/index.html")
})



app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})