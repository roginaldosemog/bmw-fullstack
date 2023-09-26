import { NextResponse } from 'next/server'

import connectDB from '@/app/api/db'
import Customer from '@/app/api/models/Customer'
import Order from '@/app/api/models/Order'

export async function POST(request) {
  try {
    const requestData = await request.json()

    await connectDB()
    await Customer.create(requestData)

    return NextResponse.json({ message: 'Customer created' }, { status: 201 })
  } catch (error) {
    console.error('Error creating customer:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    )
  }
}

export async function GET() {
  try {
    await connectDB()
    const customers = await Customer.find()

    if (!customers) {
      return NextResponse.json(
        { message: 'No customer found' },
        { status: 404 },
      )
    }

    return NextResponse.json({ customers }, { status: 200 })
  } catch (error) {
    console.error('Error getting customers:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    )
  }
}

export async function DELETE(request) {
  try {
    await connectDB()
    const id = request.nextUrl.searchParams.get('id')

    const deletedCustomer = await Customer.findByIdAndDelete(id)

    if (!deletedCustomer) {
      return NextResponse.json(
        { message: 'Customer not found' },
        { status: 404 },
      )
    }

    const what = await Order.deleteMany({ customer_id: id })
    console.log(what)

    return NextResponse.json({ message: 'Customer deleted' }, { status: 200 })
  } catch (error) {
    console.error('Error deleting customer:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    )
  }
}
