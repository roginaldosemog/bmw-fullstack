import Link from 'next/link'

import { getOrders } from '@/utils/orders'
import { Order, OrdersRequestProps } from '@/types/orders'
import OrdersList from '@/components/OrdersList'

export default async function OrdersPage() {
  let orders: Order[] = []

  try {
    const { orders: fetchedOrders }: OrdersRequestProps = await getOrders()
    if (fetchedOrders) orders = fetchedOrders
  } catch (error) {
    console.error('Error fetching orders:', error)
  }

  return (
    <div className="container" data-testid="orders-page">
      <div className="flex justify-between items-center pb-2">
        <h1>Orders</h1>
        <Link className="font-bold text-blue-700" href={'orders/create'}>
          Create Order
        </Link>
      </div>
      <OrdersList orders={orders} />
    </div>
  )
}
