import Link from 'next/link'

import { getOrders } from '@/utils/orders'
import { OrdersRequestProps } from '@/types/orders'
import OrdersList from '@/components/OrdersList'

export default async function OrdersPage() {
  const { orders }: OrdersRequestProps = await getOrders()

  return (
    <main className="pt-4" data-testid="orders-page">
      <div className="container">
        <div className="flex justify-between items-center pb-2">
          <h1>Orders</h1>
          <Link className="font-bold text-blue-700" href={'customers/create'}>
            Create Order
          </Link>
        </div>
        <OrdersList orders={orders} />
      </div>
    </main>
  )
}
