import mongoose from 'mongoose'
import connectDB from './db'

console.log = jest.fn()

jest.mock('mongoose', () => ({
  connect: jest.fn(),
}))

describe('ConnectDB: ', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should request connection to mongodb', async () => {
    await connectDB()
    expect(mongoose.connect).toHaveBeenCalledWith(process.env.MONGODB_URL)
  })

  it('should catch error', async () => {
    const errorMessage = 'Fake error'
    mongoose.connect = jest.fn().mockRejectedValueOnce(new Error(errorMessage))

    try {
      await connectDB()
    } catch (error) {
      expect(error.message).toBe(errorMessage)
    }
  })
})
