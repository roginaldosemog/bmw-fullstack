/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import Home from './page'

it('Home Page: Have the correct title', () => {
  render(<Home />)
  expect(screen.getByRole('heading')).toHaveTextContent('Home')
})