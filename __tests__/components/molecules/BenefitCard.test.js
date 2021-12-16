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

const payments = {
  UAPaymentList: [
    {
      UAPayment: {
        amount: '734.34',
        bankAccountNumber: 'XXXX-123',
        bankSortCode: '002',
        checkNumber: '874541252100255',
        coverStartDate: 'August 1, 2021',
        coverEndDate: '01012025',
        currency: 'cnd',
        dueDate: '01-01-2021',
        method: 'Direct Deposit',
        nominatedPayeeAddress: '123 - 00 Fake Street, Ottawa, On A1A-1A1',
        nominatedPayeeName: 'John Smith Doe',
        payedByName: 'Government of Canada',
        payment_id: 'PA02220',
        paymentDate: 'August 30, 2021',
        status: 'Issued',
        statusOther: 'CODE01',
        external: 'false',
        voucherNumber: 'ABC00221121',
        paymentDetails: [
          {
            benefitName: 'OAS',
            caseId: 'CASE001',
            caseReference: 'RE99009999',
            coverEndDate: '02032021',
            coverStartDate: '02042021',
            creditAmount: '200.02',
            debitAmount: '0.0',
            entitlement: 'EN009',
          },
        ],
      },
    },
  ],
}

describe('<BenefitCard />', () => {
  it('Render components', () => {
    const wrapper = shallow(
      <BenefitCard
        benefit={() => canadaPensionPlan}
        payments={() => payments}
      />
    )
    expect(wrapper.find(Button).prop('children')).to.have.string('view_details')
  })

  it('Click View Details button', () => {
    const wrapper = shallow(
      <BenefitCard
        benefit={() => canadaPensionPlan}
        payments={() => payments}
      />
    )
    wrapper.find(Button).simulate('click')
    expect(wrapper.find(Button).prop('children')).to.have.string('read_less')
  })
})
