const homeController = (req, res)=>{
    res.status(201).json('Home route')
}

const registerController = (req, res)=>{
    res.status(201).json('Register page')
}

const loginController = (req, res)=>{
    res.status(201).json('Login page')
}

module.exports = {homeController, registerController, loginController};