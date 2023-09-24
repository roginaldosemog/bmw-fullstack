import { Car } from '@/app/lib/types'

export default function CarsListItem({ car }: { car: Car }) {
  return (
    <div className="h-12 px-6 flex justify-between items-center border-solid border border-blue-700 rounded shadow">
      <p className="w-1/3">
        {car.make} {car.model}
      </p>
      <p className="w-28">{car.year}</p>
    </div>
  )
}
