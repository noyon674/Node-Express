const homeController = (req, res)=>{
    res.status(201).json('Home route')
}

const registerController = (req, res)=>{
    try {
        const {name, email, password, dob} = req.body
        const newUser = {
            name,
            email,
            password,
            dob
        }
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const loginController = (req, res)=>{
    res.status(201).json('Login page')
}

module.exports = {homeController, registerController, loginController};