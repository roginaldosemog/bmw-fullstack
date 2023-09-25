import Link from 'next/link'
import { CustomersRequestProps } from '@/types/customers'
import { getCustomers } from '@/utils/customers'
import CustomersList from '@/components/CustomersList'

export default async function CustomersPage() {
  const { customers }: CustomersRequestProps = await getCustomers()

  return (
    <main className="pt-4" data-testid="customers-page">
      <div className="container">
        <div className="flex justify-between items-center pb-2">
          <h1>Customers</h1>
          <Link className="font-bold text-blue-700" href={'customers/create'}>
            Create Customer
          </Link>
        </div>
        <CustomersList customers={customers} />
      </div>
    </main>
  )
}
