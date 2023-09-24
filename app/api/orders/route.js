import Order from '../schema'
import connectMongoDB from '../db'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const { car, user } = await request.json()
  await connectMongoDB()
  await Order.create({ car, user })
  return NextResponse.json({ message: 'Order created' }, { status: 201 })
}
