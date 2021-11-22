import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { toHaveNoViolations } from 'jest-axe'
import Nav from '../../../components/molecules/Nav'

expect.extend(toHaveNoViolations)

describe('Nav', () => {
  it('renders Nav', () => {
    const primary = render(<Nav />)
    expect(primary).toBeTruthy()
  })
})
