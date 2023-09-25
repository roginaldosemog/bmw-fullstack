import mongoose, { Schema } from 'mongoose'

const orderSchema = new Schema({
  customer_email: String,
  model: String,
  pickDate: String,
  returnDate: String,
  value: String,
})

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema)

export default Order
