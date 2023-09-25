import mongoose, { Schema } from 'mongoose'

const orderSchema = new Schema(
  {
    customer_email: String,
    carModel: String,
    pickDate: Date,
    returnDate: Date,
    totalValue: String,
  },
  {
    timestamps: true,
  },
)

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema)

export default Order
