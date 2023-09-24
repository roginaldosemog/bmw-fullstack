/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import CarsPage from './page'

it('Cars Page: Have the correct title', () => {
  render(<CarsPage />)
  expect(screen.getByTestId('carspage')).toBeInTheDocument()
})
