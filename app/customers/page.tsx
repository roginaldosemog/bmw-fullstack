import Link from 'next/link'

import { getCustomers } from '@/utils/customers'
import { Customer, CustomersRequestProps } from '@/types/customers'
import CustomersList from '@/components/CustomersList'

export default async function CustomersPage() {
  let customers: Customer[] = []

  try {
    const { customers: fetchedCustomers }: CustomersRequestProps =
      await getCustomers()
    if (fetchedCustomers) customers = fetchedCustomers
  } catch (error) {
    console.error('Error fetching customers:', error)
  }

  return (
    <div className="container" data-testid="customers-page">
      <div className="flex justify-between items-center pb-2">
        <h1>Customers</h1>
        <Link className="font-bold text-blue-700" href={'customers/create'}>
          Create Customer
        </Link>
      </div>
      <CustomersList customers={customers} />
    </div>
  )
}
