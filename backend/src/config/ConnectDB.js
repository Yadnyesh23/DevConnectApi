import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is not defined")
        }

        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`Database connected successfully \n
DB Name: ${conn.connection.name} \n
DB Host: ${conn.connection.host}`
                    )

    } catch (error) {
        console.error("Database connection failed:", error.message)
        process.exit(1) 
    }
}

export default connectDB