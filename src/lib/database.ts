import mongoose from "mongoose"

export const connectDB = async () => {
    mongoose.set('strictQuery', true)

    try {
        if (mongoose.connections[0].readyState) {
            console.log("MongoDB is already connected")
            return true
        }

        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is not defined in .env.local")
        }

        await mongoose.connect(process.env.MONGODB_URI)

        console.log("MongoDB Connected Successfully")
        return true
    } catch (err) {
        console.error("MongoDB Connection Error:", err)
        throw err
    }
}