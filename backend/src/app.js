import express from 'express'
import cors from 'cors'
import logger from './middlewares/logger.middleware.js'
const app = express()

// Middlewares
app.use(express.json())
app.use(cors())
app.use(logger)

// Routes
import healthcheckRoute from './routes/healthcheck.route.js'
import authRoutes from './routes/auth.route.js'


app.use('/api/v1', healthcheckRoute )
app.use('/api/v1/auth', authRoutes)

export default app