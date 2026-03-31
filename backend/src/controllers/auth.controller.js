import {registerUserService , loginUserService} from "../services/auth.service.js"

const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.status(400).json({
                status: 400,
                success: false,
                message: "All fields are required."
            })
        }

        const result = await registerUserService(name, email, password)

        res.status(201).json({
            status: 201,
            success: true,
            message: "Registration successful.",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 400,
            success: false,
            message: error.message || "Something went wrong"
        })
    }
}

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({
                status: 400,
                success: false,
                message: "All fields are required."
            })
        }

        const result = await loginUserService(email, password)

        res.status(200).json({
            success: true,
            message: "Login successful",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || "Login failed"
        })
    }
}

export {registerController, loginController}