import Order from '../models'
import connectMongoDB from '../db'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const { car, user } = await request.json()
  await connectMongoDB()
  await Order.create({ car, user })
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
