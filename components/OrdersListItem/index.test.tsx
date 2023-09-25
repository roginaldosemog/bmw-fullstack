/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import OrdersListItem from '@/components/OrdersListItem'
import { Order } from '@/lib/types'

const fakeOrderData: Order = {
  _id: '0',
  car: '',
  user: '',
  createdAt: '0',
  updatedAt: '0',
}

it('Header: renders', () => {
  render(<OrdersListItem order={fakeOrderData} />)
  expect(screen.getByTestId('order-list-item')).toBeInTheDocument()
})
