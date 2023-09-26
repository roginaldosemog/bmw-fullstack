const getOrderDetails = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/orders/${id}`, {
      cache: 'no-store',
    })

    if (!res.ok) {
      throw new Error('Failed to fetch order details')
    }

    return res.json()
  } catch (error) {
    console.log('Error loading order details: ', error)
  }
}

export default async function OrdersPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params
  const { order } = await getOrderDetails(id)
  const { car, user, createdAt } = order

  return (
    <div className="container" data-testid="orderspage">
      <h1 className="pb-2">{id}</h1>
      <p className="font-bold">Car</p>
      <p className="pb-2">{car}</p>
      <p className="font-bold">User</p>
      <p className="pb-2">{user}</p>
      <p className="font-bold">Created at</p>
      <p className="pb-2">{createdAt}</p>
    </div>
  )
}
