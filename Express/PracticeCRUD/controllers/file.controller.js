const path = require('path')

const formShow = (req, res)=>{
    res.status(201).sendFile(path.join(__dirname+"/../views/index.html"))
}

const fileUpload = (req, res)=>{
    res.status(201).json("File uploaded")
}
module.exports = {formShow, fileUpload}