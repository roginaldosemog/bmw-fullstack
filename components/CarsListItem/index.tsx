import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'
import { Car } from '@/types/cars'
import { capitalize } from '@/utils/string'

const transmissionMap: { [key: string]: string } = {
  a: 'Automatic',
  m: 'Manual',
}

export default function CarsListItem({ car }: { car: Car }) {
  return (
    <div
      className="md:px-6 md:py-4 p-2 flex flex-col border-solid border border-grey-700 rounded shadow-md"
      data-testid="cars-list-item"
    >
      <div className="flex flex-col md:flex-row justify-between gap-x-2 md:pb-2">
        <p className="text-ellipsis overflow-hidden whitespace-nowrap capitalize font-bold md:text-2xl text-lg">
          {car.model}
        </p>
        <p className="font-bold md:text-xl text-xs">{car.year}</p>
      </div>
      <div className="flex md:flex-row flex-col justify-between gap-x-2">
        <div className="flex justify-between gap-x-2">
          <div className="flex justify-between md:items-end gap-x-12 my-2 md:my-0">
            <div>
              <p className="text-xs font-bold text-gray-600">Fuel Type</p>
              <p className="text-sm md:text-base font-medium text-gray-600 capitalize">
                {car.fuel_type}
              </p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-600">Transmission</p>
              <p className="text-sm md:text-base font-medium text-gray-600">
                {transmissionMap[car.transmission]}
              </p>
            </div>
          </div>
        </div>
        <Link
          href={{
            pathname: '/orders/create',
            query: { model: capitalize(car.model) },
          }}
        >
          <div className="flex items-center justify-end md:justify-center bg-blue-700 font-medium text-white px-2 mt-auto h-8 rounded">
            <p className="text-xs pr-2">Create Order</p>
            <FaChevronRight size={10} />
          </div>
        </Link>
      </div>
    </div>
  )
}
