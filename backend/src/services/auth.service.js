import { addUser, getUserByEmail } from '../repositories/auth.repository.js'
import { generateJWT } from "../utils/jwt.js"
import bcrypt from 'bcrypt'

const registerUserService = async (name, email, password) => {

    const existUser = await getUserByEmail(email)

    if (existUser) {
        throw new Error("User already registered")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await addUser(name, email, hashedPassword)

    const { password: _, ...safeUser } = newUser.toObject()

    return safeUser
}

const loginUserService = async(email, enteredPassword) => {
    const existUser = await getUserByEmail(email)
    if(!existUser){
        throw new Error("User not found")
    } 

    const storedHashedPassword = existUser.password

    const isMatch = await bcrypt.compare(enteredPassword, storedHashedPassword)

    if(!isMatch){
        throw new Error("Invalid Credentials.")
    }

    const jwtToken = generateJWT({
        id: existUser._id,
    email: existUser.email
    })

    const loginedUser = {
    name: existUser.name,
    email: existUser.email,
    token: jwtToken
}
    return loginedUser
}

export {registerUserService , loginUserService}