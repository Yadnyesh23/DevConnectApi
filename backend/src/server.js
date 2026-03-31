import app from './app.js'
import dotenv from 'dotenv'
import connectDB from './config/ConnectDB.js'

dotenv.config()

const PORT = process.env.PORT || 5000

function startServer(){
    try {
        connectDB()
        app.listen(PORT , ()=> {
            console.log(`DevConnectApi listening on port http://localhost:${PORT}`)
        })
    } catch (error) {
        throw new Error("Something went wrong in server : ", error.message)
    }
}

startServer()