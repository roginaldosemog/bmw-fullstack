import { NextResponse } from 'next/server'

import connectDB from '@/app/api/db'
import Customer from '@/app/api/models/Customer'

export async function POST(request) {
  try {
    const requestData = await request.json()

    await connectDB()
    const createdCustomer = await Customer.create(requestData)

    return NextResponse.JSON({ message: 'Customer created' }, { status: 201 })
  } catch (error) {
    console.error('Error creating customer:', error)
    return NextResponse.JSON(
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
      return NextResponse.JSON(
        { message: 'No customer found' },
        { status: 404 },
      )
    }

    return NextResponse.JSON({ customer }, { status: 200 })
  } catch (error) {
    console.error('Error getting customers:', error)
    return NextResponse.JSON(
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
      return NextResponse.JSON(
        { message: 'Customer not found' },
        { status: 404 },
      )
    }

    await Order.deleteMany({ customer: id })

    return NextResponse.json({ message: 'Customer deleted' }, { status: 200 })
  } catch (error) {
    console.error('Error deleting customer:', error)
    return NextResponse.JSON(
      { message: 'Internal server error' },
      { status: 500 },
    )
  }
}
