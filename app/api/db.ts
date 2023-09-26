import mongoose from 'mongoose'

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB_URL)

    console.log('Connected to MongoDB')
  } catch (error) {
    throw error
  }
}

export default connectDB
