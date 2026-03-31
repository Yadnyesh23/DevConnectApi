import registerUserService from "../services/auth.service.js"

const registerController = (req, res) => {
    try {
        const {name , email, password} = req.body
        if(!name || !email || !password){
            res.status(400).json({
                "status" : 400,
                "success" : false,
                "message" : "All Fields are required."
            })
        }
        const result = registerUserService(name , email , password)
        res.status(201).json({
            "status" : 201,
            "success" : true,
            "message" : "Registeration successful.",
            "data" :result
        })
    } catch (error) {
        res.status(400).json({
            "status" : 400,
            "success" : false,
            "message" : "Something went wrong while registeration" || error.message
        })
    }
}

export {registerController}