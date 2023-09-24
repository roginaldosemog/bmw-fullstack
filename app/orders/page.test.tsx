/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import OrdersPage from './page'

it('Cars Page: Have the correct title', () => {
  render(<OrdersPage />)
  expect(screen.getByTestId('orderspage')).toBeInTheDocument()
})
