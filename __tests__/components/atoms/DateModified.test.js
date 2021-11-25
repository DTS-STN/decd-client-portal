import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { toHaveNoViolations } from 'jest-axe'
import DateModified from '../../../components/atoms/DateModified'

expect.extend(toHaveNoViolations)

describe('DateModified', () => {
  it('renders DateModified', () => {
    const primary = render(<DateModified />)
    expect(primary).toBeTruthy()
  })
})
