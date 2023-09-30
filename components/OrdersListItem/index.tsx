import Link from 'next/link'
import { format } from 'date-fns'

import { RequestedOrder } from '@/types/orders'

interface OrderItemProps {
  order: RequestedOrder
}

export default function OrdersListItem(props: OrderItemProps) {
  const { order } = props

  if (!order) return null

  const dateFormat = 'MM/dd/yyyy'
  let pickDate = format(new Date(order.pickDate), dateFormat)
  let returnDate = format(new Date(order.returnDate), dateFormat)
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <Link href={`/orders/${order.id}`}>
      <div
        className="flex flex-wrap py-2 px-6 flex justify-between items-center border-solid border border-blue-700 rounded shadow"
        data-testid="order-list-item"
      >
        <p className="basis-full md:basis-1/5">{order.carModel}</p>
        <p>{order.customerData.name}</p>
        <p>{pickDate}</p>
        <p>{returnDate}</p>
        <p>{USDollar.format(order.totalValue)}</p>
      </div>
    </Link>
  )
}
