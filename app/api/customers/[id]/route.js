import { NextResponse } from 'next/server'

import connectDB from '@/app/api/db'
import Customer from '@/app/api/models/Customer'

export async function PUT(request, { params }) {
  const { id } = params

  try {
    const requestData = await request.json()

    await connectDB()
    const updatedCustomer = await Customer.findByIdAndUpdate(id, requestData)

    if (!updatedCustomer) {
      return NextResponse.JSON(
        { message: 'Customer not found' },
        { status: 404 },
      )
    }

    return NextResponse.JSON({ message: 'Customer updated' }, { status: 200 })
  } catch (error) {
    console.error('Error updating customer:', error)
    return NextResponse.JSON(
      { message: 'Internal server error' },
      { status: 500 },
    )
  }
}

export async function GET(_, { params }) {
  const { id } = params

  try {
    await connectDB()
    const customer = await Customer.findOne({ _id: id })

    if (!customer) {
      return NextResponse.JSON(
        { message: 'Customer not found' },
        { status: 404 },
      )
    }

    return NextResponse.JSON({ customer }, { status: 200 })
  } catch (error) {
    console.error('Error getting customer:', error)
    return NextResponse.JSON(
      { message: 'Internal server error' },
      { status: 500 },
    )
  }
}
