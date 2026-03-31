import User from '../models/user.model.js'

const getUserByEmail = (email) => {
    return User.findOne({ email })
}

const addUser = async (name, email, password) => {
    return await User.create({ name, email, password })
}

export { addUser, getUserByEmail }