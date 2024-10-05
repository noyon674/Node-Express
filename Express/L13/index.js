const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3001
const multer = require('multer')
const db_url = 'mongodb://localhost:27017/fileupload'

app.use(express.urlencoded({extends: false}))
app.use(express.json())

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
const User = mongoose.model('files', demoSchema);

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


app.post('/', upload.single('image'), async (req, res)=>{
    try {
        //use the model which is created
        const newPost = new User({
            name: req.body.name,
            image: req.file.filename
        })
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(500).json(error.message)
    }

})

app.get('/img', async(req, res)=>{
    try {
        const findData = await User.find()
        res.status(201).json(findData)
        
    } catch (error) {
        res.status(500).json(error.message)
    }
})

app.get('/', (req, res)=>{
    res.status(201).sendFile(__dirname+"/index.html")
})



app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})