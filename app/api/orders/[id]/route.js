import connectMongoDB from '../../db'
import Order from '../../schema'
import { NextResponse } from 'next/server'

export async function PUT(request, { params }) {
  const { id } = params
  const { newCar: car, newUser: user } = await request.json()
  await connectMongoDB()
  await Order.findByIdAndUpdate(id, { car, user })
  return NextResponse.json({ message: 'Order updated' }, { status: 200 })
}

export async function GET(request, { params }) {
  const { id } = params
  await connectMongoDB()
  const order = await Order.findOne({ _id: id })
  return NextResponse.json({ order }, { status: 200 })
}
