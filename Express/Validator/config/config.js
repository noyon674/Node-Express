require('dotenv').config()

const dev = {
    app: {
        Port: process.env.PORT
    },
    db: {
        DBURL: process.env.DBLINK
    }
}

module.exports = dev