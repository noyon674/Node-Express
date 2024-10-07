const mongoose = require('mongoose')
const config = require('../config/config')
const db_url = config.db.DBURL

mongoose
.connect(db_url)
.then(e=> console.log("MongoDB compass connected."))
.catch(err=>{
    console.log(err.message)
    process.exit(1)
})