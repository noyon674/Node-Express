const homeController = (req, res)=>{
    res.status(200).json('Home page')
}

const registerController = (req, res)=>{
    res.send('hi')
}

module.exports = {homeController, registerController}