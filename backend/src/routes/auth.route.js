import express from 'express'
import {registerController, loginController} from '../controllers/auth.controller.js'
import {getUserProfileController} from '../controllers/user.controller.js'
import validateJWT from '../middlewares/auth.middleware.js'

const router = express.Router()

router.post('/register', registerController)
router.post('/login', loginController)


export default router