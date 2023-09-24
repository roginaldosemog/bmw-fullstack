import OrdersList from '@/components/OrdersList'

export default function OrdersPage() {
  return (
    <main className="pt-4" data-testid="orderspage">
      <div className="container">
        <h1 className="pb-2">Orders</h1>
        <OrdersList />
      </div>
    </main>
  )
}
