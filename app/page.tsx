import { fetchCars } from '@/utils/cars'
import CarsList from '@/components/CarsList'

export default async function CarsPage() {
  const cars = await fetchCars()

  return (
    <main className="pt-4" data-testid="carspage">
      <div className="container">
        <h1 className="pb-2">Available Cars</h1>
        <CarsList cars={cars} />
      </div>
    </main>
  )
}
