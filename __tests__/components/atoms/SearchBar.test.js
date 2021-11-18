import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { toHaveNoViolations } from 'jest-axe'
import SearchBar from '../../../components/atoms/SearchBar'

expect.extend(toHaveNoViolations)

describe('SearchBar', () => {
  it('renders SearchBar', () => {
    const primary = render(<SearchBar />)
    expect(primary).toBeTruthy()
  })
})
