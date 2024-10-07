const homeController = (req, res)=>{
    res.send('I am Home routes')
}

const loginController = (req, res)=>{
    try {
        const {email, password} = req.body
        if(email=='admin@gmail.com' && password==12345){
            res.status(201).json('user loggedin')
        }else
        res.status(201).json('Invalid')
        
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const registerController = (req, res)=>{
    try {
        //fetching data from postman
        const {name, email, password, dob} = req.body;
        //create newuser
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
module.exports = {homeController, loginController, registerController}