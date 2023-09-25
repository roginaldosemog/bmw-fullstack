import { isDataEmpty } from '@/utils/data'
import { Customer } from '@/types/customers'
import CustomersListItem from '@/components/CustomersListItem'

interface CustomersListProps {
  customers: Customer[]
}

export default function CustomersList(props: CustomersListProps) {
  const { customers } = props

  if (isDataEmpty(customers)) return <p>No data to display</p>

  return (
    <div className="flex flex-col gap-y-2" data-testid="customers-list">
      {customers.map((customer, index) => (
        <CustomersListItem customer={customer} key={index} />
      ))}
    </div>
  )
}
