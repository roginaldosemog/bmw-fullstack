'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateOrder() {
  const [car, setCar] = useState('')
  const [user, setUser] = useState('')

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!car || !user) {
      alert('All fields are required.')
      return
    }

    try {
      const res = await fetch('http://localhost:3000/api/orders', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ car, user }),
      })

      if (res.ok) {
        router.push('/')
      } else {
        throw new Error('Failed to create a order')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setCar(e.target.value)}
        value={car}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Order Car"
      />

      <input
        onChange={(e) => setUser(e.target.value)}
        value={user}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Order User"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Order
      </button>
    </form>
  )
}
