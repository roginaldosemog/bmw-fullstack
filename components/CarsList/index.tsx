import { CARS_LIST } from '@/libs/constants'
import CarsListItem from '@/components/CarsListItem'

export default function CarsList() {
  return (
    <div className="flex flex-col gap-y-2" data-testid="cars-list">
      {CARS_LIST.map((car, index) => (
        <CarsListItem car={car} key={index} />
      ))}
    </div>
  )
}
