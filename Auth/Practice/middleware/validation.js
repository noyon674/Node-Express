const {body} = require('express-validator')

const registrationValidation = [
    body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({min: 5})
    .withMessage('Name must be atlest 5 charecters'),
    body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid Email'),
    body('password')
    .trim()
    .notEmpty()
    .withMessage('Password is required')
    .isLength({min: 5})
    .withMessage('Password must be atlest 5 charecters')
]

module.exports = {registrationValidation}