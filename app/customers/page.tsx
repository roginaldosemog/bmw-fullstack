import Link from 'next/link'

export default function CustomersPage() {
  return (
    <main className="pt-4" data-testid="customers-page">
      <div className="container">
        <div className="flex justify-between items-center pb-2">
          <h1>Customers</h1>
          <Link className="font-bold text-blue-700" href={'customers/create'}>
            Create Customer
          </Link>
        </div>
      </div>
    </main>
  )
}
