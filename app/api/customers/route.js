import { NextResponse } from 'next/server'

import connectMongoDB from '@/app/api/db'
import Customer from '@/app/api/models/Customer'

export async function POST(request) {
  const { name, email } = await request.json()
  await connectMongoDB()
  await Customer.create({ name, email })
  return NextResponse.status(201).json({ message: 'Customer created' })
}

export async function GET() {
  await connectMongoDB()
  const customers = await Customer.find()
  return NextResponse.status(200).json({ customers })
}

export async function DELETE(request) {
  try {
    await connectMongoDB()
    const id = request.nextUrl.searchParams.get('id')

    const deletedCustomer = await Customer.findByIdAndDelete(id)

    if (!deletedCustomer) {
      return NextResponse.status(404).json({ message: 'Customer not found' })
    }

    await Order.deleteMany({ customer: id })

    return NextResponse.status(204).send()
  } catch (error) {
    console.error(error)
    return NextResponse.status(500).json({ message: 'Internal server error' })
  }
}
