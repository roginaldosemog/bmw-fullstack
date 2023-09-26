import { NextResponse } from 'next/server'

import connectMongoDB from '@/app/api/db'
import Order from '@/app/api/models/Order'

export async function PUT(request, { params }) {
  const { id } = params
  const { customerEmail, carModel, pickDate, returnDate, totalValue } =
    await request.json()
  await connectMongoDB()
  await Order.findByIdAndUpdate(id, {
    customer_email: customerEmail,
    carModel,
    pickDate,
    returnDate,
    totalValue,
  })
  return NextResponse.json({ message: 'Order updated' }, { status: 200 })
}

export async function GET(_, { params }) {
  const { id } = params
  await connectMongoDB()
  const order = await Order.findOne({ _id: id })
  return NextResponse.json({ order }, { status: 200 })
}
