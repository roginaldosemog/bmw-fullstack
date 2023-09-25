import { NextResponse } from 'next/server'

import connectMongoDB from '@/app/api/db'
import Order from '@/app/api/models/Order'

export async function POST(request) {
  const { customerEmail, carModel, pickDate, returnDate, totalValue } =
    await request.json()
  await connectMongoDB()
  await Order.create({
    customer_email: customerEmail,
    carModel,
    pickDate,
    returnDate,
    totalValue,
  })
  return NextResponse.json({ message: 'Order created' }, { status: 201 })
}

export async function GET() {
  await connectMongoDB()
  const orders = await Order.find()
  return NextResponse.json({ orders })
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get('id')
  await connectMongoDB()
  await Order.findByIdAndDelete(id)
  return NextResponse.json({ message: 'Order deleted' }, { status: 200 })
}
