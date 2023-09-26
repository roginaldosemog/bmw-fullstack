'use client'

import { useRouter } from 'next/navigation'
import { HiOutlineTrash } from 'react-icons/hi'

import { Customer } from '@/types/customers'

interface CustomerItemProps {
  customer: Customer
}

export default function CustomersListItem(props: CustomerItemProps) {
  const { customer } = props

  if (!customer) return null

  const router = useRouter()

  const removeCustomer = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const confirmed = confirm(
      'Are you sure? It will delete all orders associated with this costumer!',
    )

    if (confirmed) {
      const res = await fetch(
        `http://localhost:3000/api/customers?id=${customer._id}`,
        {
          method: 'DELETE',
        },
      )

      if (res.ok) {
        router.refresh()
      }
    }
  }

  return (
    <div
      className="h-12 px-6 flex justify-between items-center border-solid border border-blue-700 rounded shadow"
      data-testid="customer-list-item"
    >
      <p className="w-1/2">{customer.name}</p>
      <p className="w-1/2">{customer.email}</p>
      <button onClick={removeCustomer} className="text-red-400">
        <HiOutlineTrash size={24} />
      </button>
    </div>
  )
}
