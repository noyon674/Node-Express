require('dotenv').config()

const dev = {
    app: {
        port: process.env.PORT || 4000
    },
    db: {
        db_link: 'mongodb://localhost:27017/DemoDB'
    }
}

module.exports = dev