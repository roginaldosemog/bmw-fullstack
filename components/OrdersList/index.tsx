import { isDataEmpty } from '@/utils/data'
import { Order } from '@/types/orders'
import OrdersListItem from '@/components/OrdersListItem'

interface OrdersListProps {
  orders: Order[]
}

export default function OrdersList({ orders }: OrdersListProps) {
  if (isDataEmpty(orders)) return <p>No data to display</p>

  return (
    <div className="flex flex-col gap-y-2" data-testid="orders-list">
      {orders.map((order, index) => (
        <OrdersListItem order={order} key={index} />
      ))}
    </div>
  )
}
