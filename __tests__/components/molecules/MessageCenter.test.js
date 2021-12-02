import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { toHaveNoViolations } from 'jest-axe'
import MessageCenter from '../../../components/molecules/MessageCenter'

expect.extend(toHaveNoViolations)

describe('MessageCenter', () => {
  it('renders MessageCenter', () => {
    const primary = render(
      <MessageCenter
        messages={[
          {
            messageSubject: 'Upcoming change in OAS',
            date: 'October 4, 2021',
            attachment: true,
          },
          {
            messageSubject: 'An update regarding GIS',
            date: 'September 28, 2021',
            attachment: true,
          },
          {
            messageSubject: 'Your EI eligibility period ends',
            date: 'July 16, 2021',
            attachment: false,
          },
        ]}
      />
    )
    expect(primary).toBeTruthy()
  })
})
