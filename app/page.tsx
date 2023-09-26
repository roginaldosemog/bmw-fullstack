import { fetchCars } from '@/utils/cars'
import CarsList from '@/components/CarsList'

export default async function CarsPage() {
  const cars = await fetchCars()

  return (
    <div className="container" data-testid="cars-page">
      <h1 className="pb-2">Available Cars</h1>
      <CarsList cars={cars} />
    </div>
  )
}
