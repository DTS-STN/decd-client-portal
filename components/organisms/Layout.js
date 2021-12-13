import Header from '../molecules/Header'
import Footer from '../molecules/Footer'
import BenefitCard from '../molecules/BenefitCard'
import MoreInfo from '../molecules/MoreInfo'
import MessageCenter from '../molecules/MessageCenter'
import MessageNotification from '../molecules/MessageNotification'
import SectionHeading from '../atoms/SectionHeading'
import Greeting from '../molecules/Greeting'
import useTranslation from 'next-translate/useTranslation'

export default function Layout() {
  const { t } = useTranslation('common')
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

  const guaranteedIncomeSupplement = {
    benefitType: 'GIS',
    benefitName: 'Guaranteed Income Supplement',
    status: 'Pending',
    statusDesciption:
      'You application is pending, we will notify you with decision',
    applicationDate: 'August 1, 2021',
    applicationType: 'Guaranteed Income Supplement (GIS)',
    applicationDescription: 'Paper Application Rceived',
    withdrawalRequest: 'Pending',
    withdrawalStatus: 'Not Approved',
    withdrawalRequestDescription: 'In Progress',
    applicationWithdrawn: 'No',
    additionalInformation:
      'Your GIS payments will start as soon as you are approved. You may also qualify for the Old Age Security program. We will notify you if we require additional information from you',
  }

  const employmentInsurance = {
    benefitType: 'EI',
    benefitName: 'Employment Insurance',
    status: 'Past',
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
      <section className="py-4"></section>
      <Greeting name={'Jane'} />
      <MessageNotification />
      <section className="py-4">
        <div className="layout-container font-bold text-3xl">
          {t('title_your_benefits')}
        </div>
      </section>
      <SectionHeading
        icon="/status-icon-active.svg"
        title={t('title_active_benefits')}
      />
      <BenefitCard benefit={canadaPensionPlan} />
      <SectionHeading
        icon="/status-icon-pending.svg"
        title={t('title_pending_benefits')}
      />
      <BenefitCard benefit={oldAgeSecurity} />
      <BenefitCard benefit={guaranteedIncomeSupplement} />
      <SectionHeading
        icon="/status-icon-past.svg"
        title={t('title_past_benefits')}
      />
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
        footerNav="aboutThisSite"
        links={[
          {
            link: '/dashboard',
            linkText: t('common:footer_link_about_service_can'),
          },
          {
            link: '/dashboard',
            linkText: t('common:footer_link_about_can'),
          },
          {
            link: '/dashboard',
            linkText: t('common:footer_link_privacy'),
          },
          {
            link: '/dashboard',
            linkText: t('common:title_your_benefits'),
          },
        ]}
      />
    </div>
  )
}
