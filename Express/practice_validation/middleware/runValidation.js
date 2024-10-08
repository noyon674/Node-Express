const runValidator = (req, res, next)=>{
    const result = validationResult(req);
    if (result.isEmpty()) {
      next()
    }
  
    res.send({ errors: result.array() });
}

module.exports = runValidator