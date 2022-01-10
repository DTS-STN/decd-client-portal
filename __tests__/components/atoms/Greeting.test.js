import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { toHaveNoViolations } from 'jest-axe'
import Greeting from '../../../components/atoms/Greeting'

expect.extend(toHaveNoViolations)

describe('Greeting', () => {
  it('renders Greeting', () => {
    const primary = render(<Greeting name={'Jane'} />)
    expect(primary).toBeTruthy()
  })
})
