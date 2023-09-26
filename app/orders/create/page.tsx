import { getCustomers } from '@/utils/customers'
import OrderForm from '@/components/OrderForm'
import { Customer, CustomersRequestProps } from '@/types/customers'

export default async function CreateOrder() {
  let customers: Customer[] = []

  try {
    const { customers: fetchedCustomers }: CustomersRequestProps =
      await getCustomers()
    if (fetchedCustomers) customers = fetchedCustomers
  } catch (error) {
    console.error('Error fetching customers:', error)
  }

  return (
    <div className="container" data-testid="create-order-page">
      <h1 className="pb-2">Create Order</h1>
      <OrderForm customers={customers} />
    </div>
  )
}
