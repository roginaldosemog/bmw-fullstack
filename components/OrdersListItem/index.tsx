import Link from 'next/link'
import { format } from 'date-fns'

import { Order } from '@/types/orders'

interface OrderItemProps {
  order: Order
}

export default function OrdersListItem(props: OrderItemProps) {
  const { order } = props

  if (!order) return null

  let pickDate = format(new Date(order.pickDate), 'MM/dd/yyyy')
  let returnDate = format(new Date(order.returnDate), 'MM/dd/yyyy')

  return (
    <Link href={`/orders/${order._id}`}>
      <div
        className="h-12 px-6 flex justify-between items-center border-solid border border-blue-700 rounded shadow"
        data-testid="order-list-item"
      >
        <p>{order.carModel}</p>
        <p>{order.customerEmail}</p>
        <p>{pickDate}</p>
        <p>{returnDate}</p>
      </div>
    </Link>
  )
}
