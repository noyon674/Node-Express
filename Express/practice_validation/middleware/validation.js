const { body, validationResult } = require("express-validator")

const registrationValidation = [
    body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({min:5})
    .withMessage('Atlest 5 charecters'),
    body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email'),
    body('password')
    .trim()
    .notEmpty()
    .withMessage('Password is required')
    .isLength({min: 5})
    .withMessage('Must be atlest 5 charecters'),
    body('dob')
    .trim()
    .notEmpty()
    .withMessage('Date of Birth is required')
    .isISO8601()
    .toDate()
    .withMessage('Invalid date')
]

const loginValidation = [
    body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email'),
    body('password')
    .trim()
    .notEmpty()
    .withMessage('Password is required')
    .isLength({min: 5})
    .withMessage('Must be atlest 5 charecters'),
]


module.exports = {registrationValidation, loginValidation}