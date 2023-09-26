'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { Customer } from '@/types/customers'

interface OrderFormProps {
  customers: Customer[]
}

export default function OrderForm({ customers }: OrderFormProps) {
  const [customer, setCustomer] = useState('')
  const [carModel, setCarModel] = useState('')
  const [pickDate, setPickDate] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [totalValue, setTotalValue] = useState('')

  const router = useRouter()

  const handleSubmit = async () => {
    if (!customer || !carModel || !pickDate || !returnDate || !totalValue) {
      alert('All fields are required.')
      return
    }

    try {
      const res = await fetch('http://localhost:3000/api/orders', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          customer,
          carModel,
          pickDate,
          returnDate,
          totalValue,
        }),
      })

      if (res.ok) {
        router.push('/orders')
      } else {
        throw new Error('Failed to create a order')
      }
    } catch (error) {
      console.log(error)
    }
  }

  if (customers.length < 1) {
    return <p>You need to add customer to register a order</p>
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <select
        className="border border-slate-500 px-8 py-2"
        placeholder="Customer"
        value={customer}
        onChange={(e) => {
          setCustomer(e.target.value)
        }}
      >
        <option value="">Select customer</option>
        {customers.map((customer, index) => (
          <option value={customer._id} key={index}>
            {customer.name}
          </option>
        ))}
      </select>

      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Requested car model"
        value={carModel}
        onChange={(e) => setCarModel(e.target.value)}
      />

      <input
        className="border border-slate-500 px-8 py-2"
        type="date"
        placeholder="Pick date"
        value={pickDate}
        onChange={(e) => setPickDate(e.target.value)}
      />

      <input
        className="border border-slate-500 px-8 py-2"
        type="date"
        placeholder="Return date"
        value={returnDate}
        onChange={(e) => setReturnDate(e.target.value)}
      />

      <input
        className="border border-slate-500 px-8 py-2"
        type="number"
        min="0.00"
        max="10000.00"
        placeholder="Total value"
        value={totalValue}
        onChange={(e) => setTotalValue(e.target.value)}
      />

      <button
        type="submit"
        className="bg-blue-700 font-bold text-white py-3 px-6 w-fit"
      >
        Create Order
      </button>
    </form>
  )
}
