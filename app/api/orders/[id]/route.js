import { NextResponse } from 'next/server'

import connectDB from '@/app/api/db'
import Order from '@/app/api/models/Order'

export async function PUT(request, { params }) {
  const { id } = params
  const { customer, carModel, pickDate, returnDate, totalValue } =
    await request.json()
  await connectDB()
  await Order.findByIdAndUpdate(id, {
    customer_id: customer,
    carModel,
    pickDate,
    returnDate,
    totalValue,
  })
  return NextResponse.json({ message: 'Order updated' }, { status: 200 })
}

export async function GET(_, { params }) {
  const { id } = params
  await connectDB()
  const order = await Order.findOne({ _id: id }).populate('customer_id')

  return NextResponse.json(
    { order: { customer: order.customer_id, ...order } },
    { status: 200 },
  )
}
