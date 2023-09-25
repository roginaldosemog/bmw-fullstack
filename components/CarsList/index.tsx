import { CarProps } from '@/types/cars'
import CarsListItem from '@/components/CarsListItem'

interface CarsListProps {
  cars: CarProps[]
}

export default function CarsList(props: CarsListProps) {
  const { cars } = props

  const isDataEmpty = !Array.isArray(cars) || cars.length < 1 || !cars

  if (isDataEmpty) return <></>

  return (
    <div className="flex flex-col gap-y-2" data-testid="cars-list">
      {cars.map((car, index) => (
        <CarsListItem car={car} key={index} />
      ))}
    </div>
  )
}
