import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { toHaveNoViolations } from 'jest-axe'
import MessageNotification from '../../../components/molecules/MessageNotification'

expect.extend(toHaveNoViolations)

describe('MessageNotification', () => {
  it('renders MessageNotification', () => {
    const primary = render(<MessageNotification />)
    expect(primary).toBeTruthy()
  })
})
