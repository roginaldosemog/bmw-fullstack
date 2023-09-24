/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import Layout from './layout'

function FakeComponent() {
  return <div data-testid="fake-component">FakeComponent</div>
}

it('Layout: renders children', () => {
  render(<Layout children={<FakeComponent />} />)
  expect(screen.getByTestId('fake-component')).toBeInTheDocument()
})
