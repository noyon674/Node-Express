const {body, validationResult, check} = require('express-validator')

const registerValidation = [
    check('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({min: 5})
    .withMessage('Must have atlest 5 charecters'),
    //email validation
    check('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Not a valide email'),
    //password validation
    check('password')
    .trim()
    .notEmpty()
    .withMessage('Password is required')
    .isLength({min:5})
    .withMessage('Must be atlest 5 charecters'),
    //date of birth validation
    check('dob')
    .trim()
    .notEmpty()
    .withMessage('Date of Birth is required')
    .isISO8601()
    .toDate()
    .withMessage('Not a valid dob')
]


const loginValidation = [
    body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail().withMessage('Not a valide email'),
    body('password')
    .trim()
    .notEmpty()
    .withMessage('Password is required')
    .isLength({min:5})
    .withMessage('Must be atlest 5 charecters')
]

module.exports = {registerValidation, loginValidation}