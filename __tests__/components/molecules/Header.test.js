import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { toHaveNoViolations } from 'jest-axe'
import Header from '../../../components/molecules/Header'

expect.extend(toHaveNoViolations)

describe('Header', () => {
  it('renders Header', () => {
    const primary = render(<Header />)
    expect(primary).toBeTruthy()
  })
})
