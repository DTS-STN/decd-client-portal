import Header from '../molecules/Header'
import Footer from '../molecules/Footer'
import Card from '../atoms/Card'
import BenefitCard from '../molecules/BenefitCard'
import MoreInfo from '../molecules/MoreInfo'
import MessageCenter from '../molecules/MessageCenter'

export default function Layout() {
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

  const oldAgeSecurity = {
    benefitType: 'OAS',
    benefitName: 'Old Age Security',
    status: 'Pending',
    statusDesciption:
      'You application is pending, we will notify you with decision',
    applicationDate: 'August 1, 2021',
    applicationType: 'Old Age Security Benefits (OAS)',
    applicationDescription: 'Paper Application Rceived',
    withdrawalRequest: 'Pending',
    withdrawalStatus: 'Not Approved',
    withdrawalRequestDescription: 'In Progress',
    applicationWithdrawn: 'No',
    additionalInformation:
      'Your OAS payments will start as soon as you are approved. You may also qualify for the Guaranteed Income Supplement. We will notify you if we require additional information from you',
  }

  const employmentInsurance = {
    benefitType: 'EI',
    benefitName: 'Employment Insurance',
    status: 'Active',
    statusDesciption: 'You are currently enrolled in the Employment Insurance',
    nextPaymentAmount: 578.56,
    nextPaymentDate: 'October 30, 2021',
    paymentStartDate: 'October 30, 2021',
    paymentEndDate: 'June 30, 2022',
    payeeFullName: 'John Smith Doe',
    payeeAddress: '123 - 00 Fake Street, Ottawa, On A1A-1A1',
    payeeInstitutionAccountNumber: '1234567890-123456',
    payeeInstitutionSortCode: '12345-67890',
    payerName: 'CRA',
    paymentDepositDate: 'October 1, 2021',
    paymentStatus: 'Issued',
    paymentType: 'Direct Deposit',
    additionalInformation: 'Your tax slips are ready in 2022',
  }

  return (
    <div>
      <Header />
      <BenefitCard benefit={canadaPensionPlan} />
      <BenefitCard benefit={oldAgeSecurity} />
      <BenefitCard benefit={employmentInsurance} />
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
      <MoreInfo />
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
    </div>
  )
}
