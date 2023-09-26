import mongoose, { Schema } from 'mongoose'

const orderSchema = new Schema(
  {
    customer_id: {
      type: Schema.Types.ObjectId,
      ref: 'Customer',
      required: true,
    },
    carModel: {
      type: String,
      required: true,
    },
    pickDate: {
      type: Date,
      required: true,
    },
    returnDate: {
      type: Date,
      required: true,
    },
    totalValue: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema)

export default Order
