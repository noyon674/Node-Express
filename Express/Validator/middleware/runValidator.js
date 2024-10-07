const { validationResult } = require("express-validator");

const runValidator = (req, res, next)=>{
    const result = validationResult(req);
    if (result.isEmpty()) {
        next()
    }
    const errorList = result.array().map(err=>err.msg)
    res.send({ errors: errorList });
}

module.exports = runValidator