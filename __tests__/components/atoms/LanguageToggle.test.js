import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { toHaveNoViolations } from 'jest-axe'
import { useRouter } from 'next/router'
import LanguageToggle from '../../../components/atoms/LanguageToggle'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

expect.extend(toHaveNoViolations)

describe('LanguageToggle', () => {
  it('renders Toggle', () => {
    useRouter.mockImplementation(() => ({
      asPath: '/',
    }))

    const toggleRender = render(<LanguageToggle />)
    expect(render).toBeTruthy()
  })
})
