const fileRouter = require('express').Router()
const { 
    formShow, 
    fileUpload 
} = require('../controllers/file.controller')
const upload = require('../utils/fileUpload')


fileRouter.get('/', formShow)
fileRouter.post('/', upload.single('image'), fileUpload)

module.exports = fileRouter