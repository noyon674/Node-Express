const homeController = (req, res)=>{
    res.status(200).json('Home page')
}

const registerController = (req, res)=>{
    res.status(200).json('Registration page')
}

module.exports = {homeController, registerController}