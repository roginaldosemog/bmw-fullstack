import { Customer } from '@/types/customers'

interface CustomerItemProps {
  customer: Customer
}

export default function CustomersListItem(props: CustomerItemProps) {
  const { customer } = props

  if (!customer) return null

  return (
    <div
      className="h-12 px-6 flex justify-between items-center border-solid border border-blue-700 rounded shadow"
      data-testid="customer-list-item"
    >
      <p className="w-1/2">{customer.name}</p>
      <p className="w-1/2">{customer.email}</p>
    </div>
  )
}
