export async function getOrders() {
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
