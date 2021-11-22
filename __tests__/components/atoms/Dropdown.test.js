import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { toHaveNoViolations } from 'jest-axe'
import Dropdown from '../../../components/atoms/Dropdown'

expect.extend(toHaveNoViolations)

describe('Dropdown', () => {
  it('renders Dropdown', () => {
    const primary = render(<Dropdown text="test" />)
    expect(primary).toBeTruthy()
  })
})
