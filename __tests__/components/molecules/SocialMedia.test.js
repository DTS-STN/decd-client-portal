import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { toHaveNoViolations } from 'jest-axe'
import SocialMedia from '../../../components/molecules/SocialMedia'

expect.extend(toHaveNoViolations)

describe('SocialMedia', () => {
  it('renders Socials', () => {
    const primary = render(<SocialMedia />)
    expect(primary).toBeTruthy()
  })
})
