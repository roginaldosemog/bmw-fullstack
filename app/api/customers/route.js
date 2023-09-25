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
  return NextResponse.json({ customers })
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get('id')
  await connectMongoDB()
  await Customer.findByIdAndDelete(id)
  return NextResponse.json({ message: 'Customer deleted' }, { status: 200 })
}
