/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import CarsListItem from './CarsListItem'

const fakeCarData = {
  id: 0,
  make: '',
  model: '',
  year: 0,
}

it('Header: renders', () => {
  render(<CarsListItem car={fakeCarData} />)
  expect(screen.getByTestId('cars-list-item')).toBeInTheDocument()
})
