import { Order } from '@/lib/types'
import Link from 'next/link'

export default function OrdersListItem({ order }: { order: Order }) {
  if (!order) {
    return null
  }

  return (
    <Link href={`/orders/${order._id}`}>
      <div
        className="h-12 px-6 flex justify-between items-center border-solid border border-blue-700 rounded shadow"
        data-testid="order-list-item"
      >
        <p className="w-1/2">{order.car}</p>
        <p className="w-1/2">{order.user}</p>
      </div>
    </Link>
  )
}
