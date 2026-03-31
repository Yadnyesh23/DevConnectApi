import {getUserProfileController} from '../controllers/user.controller.js'
import validateJWT from '../middlewares/auth.middleware.js'
import express from 'express'


const router = express.Router()

router.get('/profile' ,validateJWT, getUserProfileController)

export default router