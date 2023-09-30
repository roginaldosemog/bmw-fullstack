import { NextResponse } from 'next/server'

import connectDB from '@/app/api/db'
import Order from '@/app/api/models/Order'

export async function POST(request) {
  const { customer, carModel, pickDate, returnDate, totalValue } =
    await request.json()
  await connectDB()
  await Order.create({
    customer_id: customer,
    carModel,
    pickDate,
    returnDate,
    totalValue,
  })
  return NextResponse.json({ message: 'Order created' }, { status: 201 })
}

export async function GET() {
  await connectDB()
  const rawOrders = await Order.find().populate('customer_id')

  const orders = rawOrders.map((order) => ({
    id: order._id.toString(),
    customerData: {
      id: order.customer_id._id.toString(),
      name: order.customer_id.name,
      email: order.customer_id.email,
    },
    carModel: order.carModel,
    pickDate: order.pickDate,
    returnDate: order.returnDate,
    totalValue: order.totalValue,
    createdAt: order.createdAt,
    updatedAt: order.updatedAt,
  }))

  return NextResponse.json({ orders }, { status: 200 })
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get('id')
  await connectDB()
  await Order.findByIdAndDelete(id)
  return NextResponse.json({ message: 'Order deleted' }, { status: 200 })
}
