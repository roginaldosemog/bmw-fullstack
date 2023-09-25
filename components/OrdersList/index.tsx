import { Order } from '@/lib/types'
import OrdersListItem from '../OrdersListItem'

const getOrders = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/orders', {
      cache: 'no-store',
    })

    if (!res.ok) {
      throw new Error('Failed to fetch orders')
    }

    return res.json()
  } catch (error) {
    console.log('Error loading orders: ', error)
  }
}

export default async function OrdersList() {
  const { orders }: { orders: Order[] } = await getOrders()

  return (
    <div className="flex flex-col gap-y-2" data-testid="orders-list">
      {orders.map((order, index) => (
        <OrdersListItem order={order} key={index} />
      ))}
    </div>
  )
}
