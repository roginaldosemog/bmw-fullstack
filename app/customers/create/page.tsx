'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateCustomer() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name || !email) {
      alert('All fields are required.')
      return
    }

    try {
      const res = await fetch('http://localhost:3000/api/customers', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      })

      if (res.ok) {
        router.push('/customers')
      } else {
        throw new Error('Failed to create new customer')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Customer name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="border border-slate-500 px-8 py-2"
        type="email"
        placeholder="Customer email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        type="submit"
        className="bg-blue-700 font-bold text-white py-3 px-6 w-fit"
      >
        Create Customer
      </button>
    </form>
  )
}
