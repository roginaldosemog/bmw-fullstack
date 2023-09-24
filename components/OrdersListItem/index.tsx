import { Order } from '@/libs/types'

export default function OrdersListItem({ order }: { order: Order }) {
  if (!order) {
    return null
  }

  return (
    <div
      className="h-12 px-6 flex justify-between items-center border-solid border border-blue-700 rounded shadow"
      data-testid="order-list-item"
    >
      <p className="w-1/2">{order.car}</p>
      <p className="w-1/2">{order.user}</p>
    </div>
  )
}
