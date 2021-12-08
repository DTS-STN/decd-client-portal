import '@testing-library/jest-dom/extend-expect'
import Footer from '../../../components/molecules/Footer'
import Enzyme, { mount } from 'enzyme'
import chai from 'chai'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })
const expect = chai.expect

describe('<ScrollToTop />', () => {
  it('Render components', () => {
    const wrapper = mount(
      <Footer
        footerLogoAltText="symbol2"
        footerNav="aboutThisSite"
        links={[]}
      />
    )

    expect(wrapper.find('#btnScrollToTop')).to.have.lengthOf(1)
  })
})
