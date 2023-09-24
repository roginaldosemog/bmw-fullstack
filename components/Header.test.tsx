/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import Header from './Header'

it('Header: renders', () => {
  render(<Header />)
  expect(screen.getByTestId('header')).toBeInTheDocument()
})
