import { NextResponse } from 'next/server'

import connectMongoDB from '@/app/api/db'
import Customer from '@/app/api/models/Customer'

export async function POST(request) {
  const { name, email } = await request.json()
  await connectMongoDB()
  await Customer.create({ name, email })
  return NextResponse.json({ message: 'Customer created' }, { status: 201 })
}

export async function GET() {
  await connectMongoDB()
  const customers = await Customer.find()
  return NextResponse.json({ customers }, { status: 200 })
}

export async function DELETE(request) {
  try {
    await connectMongoDB()
    const id = request.nextUrl.searchParams.get('id')

    const deletedCustomer = await Customer.findByIdAndDelete(id)

    if (!deletedCustomer) {
      return NextResponse.json(
        {
          message: 'Customer not found',
        },
        { status: 404 },
      )
    }

    await Order.deleteMany({ customer: id })

    return NextResponse.json({ message: 'Order deleted' }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Internal server error',
      },
      { status: 500 },
    )
  }
}
