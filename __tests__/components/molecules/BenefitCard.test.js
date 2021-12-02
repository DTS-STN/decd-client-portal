import React from 'react'
import BenefitCard from '../../../components/molecules/BenefitCard'
import Button from '../../../components/atoms/Button'
import Enzyme, { shallow } from 'enzyme'
import chai from 'chai'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })
const expect = chai.expect

const canadaPensionPlan = {
  benefitType: 'CPP',
  benefitName: 'Canada Pension Plan',
  status: 'Active',
  statusDesciption:
    'You are currently receiving Canada Pension Plan retirement benefits',
  nextPaymentAmount: 734.34,
  nextPaymentDate: 'September 30, 2021',
  pensionStartDate: 'August 1, 2021',
  payeeFullName: 'John Smith Doe',
  payeeAddress: '123 - 00 Fake Street, Ottawa, On A1A-1A1',
  accountNumber: 'XXXX-123',
  institutionNumber: '002',
  payerName: 'Government of Canada',
  paymentDepositDate: 'August 30, 2021',
  paymentStatus: 'Issued',
  paymentType: 'Direct Deposit',
  additionalInformation: 'Your 2022 tax slips are ready',
}

describe('<BenefitCard />', () => {
  it('Render components', () => {
    const wrapper = shallow(<BenefitCard benefit={canadaPensionPlan} />)
    expect(wrapper.find('#paymentStartDate')).to.have.lengthOf(1)
    expect(wrapper.find(Button).prop('children')).to.have.string('View Details')
  })

  it('Click View Details button', () => {
    const wrapper = shallow(<BenefitCard benefit={canadaPensionPlan} />)
    wrapper.find(Button).simulate('click')
    expect(wrapper.find(Button).prop('children')).to.have.string('Read Less')
  })
})
