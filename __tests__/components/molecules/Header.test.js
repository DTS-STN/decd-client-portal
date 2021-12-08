import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { toHaveNoViolations } from 'jest-axe'
import { useRouter } from 'next/router'
import Header from '../../../components/molecules/Header'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

expect.extend(toHaveNoViolations)

describe('Header', () => {
  it('renders Header', () => {
    useRouter.mockImplementation(() => ({
      asPath: '/',
    }))

    const headerRender = render(<Header />)
    expect(render).toBeTruthy()
  })
})
