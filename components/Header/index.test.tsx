/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'

it('Header: should render correctly', () => {
  render(<Header />)
  expect(screen.getByTestId('header')).toBeInTheDocument()
})
