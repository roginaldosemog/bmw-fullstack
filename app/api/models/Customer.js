import mongoose, { Schema } from 'mongoose'

const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
})

const Customer =
  mongoose.models.Customer || mongoose.model('Customer', customerSchema)

export default Customer
