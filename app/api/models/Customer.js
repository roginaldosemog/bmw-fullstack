import mongoose, { Schema } from 'mongoose'

const customerSchema = new Schema({
  name: String,
  email: String,
})

const Customer =
  mongoose.models.Customer || mongoose.model('Customer', customerSchema)

export default Customer
