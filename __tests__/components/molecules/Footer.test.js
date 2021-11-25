import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { toHaveNoViolations } from 'jest-axe'
import Footer from '../../../components/molecules/Footer'

expect.extend(toHaveNoViolations)

describe('Footer', () => {
  it('renders Footer', () => {
    const primary = render(
      <Footer
        footerLogoAltText="symbol2"
        footerNav="aboutThisSite"
        links={[
          {
            link: '/dashboard',
            linkText: 'About Service Canada',
          },
          {
            link: '/dashboard',
            linkText: 'About Canada.ca',
          },
          {
            link: '/dashboard',
            linkText: 'Privacy',
          },
          {
            link: '/dashboard',
            linkText: 'Terms & Conditions',
          },
        ]}
      />
    )
    expect(primary).toBeTruthy()
  })
})
