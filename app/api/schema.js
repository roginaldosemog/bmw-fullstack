import mongoose, { Schema } from 'mongoose'

const orderSchema = new Schema(
  {
    car: String,
    user: String,
  },
  {
    timestamps: true,
  },
)

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema)

export default Order
