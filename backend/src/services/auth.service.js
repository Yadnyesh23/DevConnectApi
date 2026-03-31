import { addUser, getUserByEmail } from '../repositories/auth.repository.js'
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

export default registerUserService