import CarsListItem from './CarsListItem'
import { CARS_LIST } from '@/app/lib/constants'

export default function CarsList() {
  return (
    <div className="flex flex-col gap-y-2">
      {CARS_LIST.map((car, index) => (
        <CarsListItem car={car} key={index} />
      ))}
    </div>
  )
}
