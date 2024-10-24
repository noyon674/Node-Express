const {body} = require('express-validator')

const inputValidation = [
    body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength()
]