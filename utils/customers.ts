export async function getCustomers() {
  try {
    const res = await fetch('http://localhost:3000/api/customers', {
      cache: 'no-store',
    })

    if (!res.ok) {
      throw new Error('Failed to fetch customers')
    }

    return res.json()
  } catch (error) {
    console.log('Error loading customers: ', error)
  }
}
