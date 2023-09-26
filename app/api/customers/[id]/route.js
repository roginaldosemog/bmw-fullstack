import { NextResponse } from 'next/server'

import connectDB from '@/app/api/db'
import Customer from '@/app/api/models/Customer'

export async function PUT(request, { params }) {
  const { id } = params
  const { name, email } = await request.json()
  await connectDB()
  await Customer.findByIdAndUpdate(id, { name, email })
  return NextResponse.json({ message: 'Customer updated' }, { status: 200 })
}

export async function GET(_, { params }) {
  const { id } = params
  await connectDB()
  const customer = await Customer.findOne({ _id: id })
  return NextResponse.json({ customer }, { status: 200 })
}
