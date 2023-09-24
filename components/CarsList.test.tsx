/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import CarsList from './CarsList'

it('Header: renders', () => {
  render(<CarsList />)
  expect(screen.getByTestId('cars-list')).toBeInTheDocument()
})
