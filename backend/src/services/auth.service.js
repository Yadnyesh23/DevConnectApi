import {addUser, getUser} from '../repositories/auth.repository.js'
import bcrypt from 'bcrypt'

const registerUserService = async (name, email, password) => {
        const existUser =  getUser(name, email)

        if(existUser){
            throw new Error("User already registered")
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = addUser(name, email, hashedPassword)

        const { password: _, ...safeUser } = newUser

        return safeUser
}

export default registerUserService;