import User from "../models/user.model.js"

const getUserProfileController = async(req, res) => {
    try {
        const {id} = req.body
    if(!id){
        res.status(400).json({
            "success" : false,
            "message" : "Id required"
        })
    }
    const user = await User.findById(id)
    res.status(200).json({
        "success" : false,
        "message" : "User fecthed succesfully .",
        "data" : user,

    })
    } catch (error) {
        res.status(400).json({
            "success" : false,
            "message" : "Something went wrong"
        })
    }
}

export {getUserProfileController}