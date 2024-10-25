const { homeController, fileUpload } = require('../controller/controller')
const upload = require('../utils/api')
const userRouter = require('express').Router()

userRouter.get('/', homeController)
userRouter.post('/', upload.single('image'), fileUpload)

module.exports = userRouter