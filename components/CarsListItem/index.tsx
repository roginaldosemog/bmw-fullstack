import { Car } from '@/libs/types'

export default function CarsListItem({ car }: { car: Car }) {
  return (
    <div
      className="h-12 px-6 flex justify-between items-center border-solid border border-blue-700 rounded shadow"
      data-testid="cars-list-item"
    >
      <p className="w-1/3">
        {car.make} {car.model}
      </p>
      <p className="w-28">{car.year}</p>
    </div>
  )
}
