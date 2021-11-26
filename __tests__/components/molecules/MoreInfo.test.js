import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { toHaveNoViolations } from 'jest-axe'
import MoreInfo from '../../../components/molecules/MoreInfo'

expect.extend(toHaveNoViolations)

describe('MoreInfo', () => {
  it('renders MoreInfo', () => {
    const primary = render(<MoreInfo />)
    expect(primary).toBeTruthy()
  })
})
