import registerUserService from "../services/auth.service.js"

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

export {registerController}