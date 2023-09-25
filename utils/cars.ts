export async function fetchCars() {
  const headers: HeadersInit = {
    'X-RapidAPI-Key': '08ea738329msh2b7b37e85257adep156b19jsn32eb6b7d71db',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  }

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=bmw&limit=10`,
    {
      headers: headers,
    },
  )

  const result = await response.json()

  return result
}
