import Header from '../molecules/Header'
import Footer from '../molecules/Footer'
import BenefitCard from '../molecules/BenefitCard'
import MoreInfo from '../molecules/MoreInfo'
import MessageCenter from '../molecules/MessageCenter'
import MessageNotification from '../molecules/MessageNotification'
import SectionHeading from '../atoms/SectionHeading'
import Greeting from '../molecules/Greeting'
import useTranslation from 'next-translate/useTranslation'
import { useEffect, useState } from 'react'
import {
  COMMUNICATION,
  CPPBENEFIT,
  EIBENEFIT,
  OASBENEFIT,
  PAYMENTS,
  SUBMITTEDAPI,
  USER,
} from './constants'

export const getCppBenefitApi = async () => {
  const res = await fetch(CPPBENEFIT)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return data.cpp_benefits // will be passed to the page component as props
}

export const getOasBenefitApi = async () => {
  const res = await fetch(OASBENEFIT)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  return data.oas_benefits
}

export const getEiBenefitApi = async () => {
  const res = await fetch(EIBENEFIT)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  return data.ei_benefits // will be passed to the page component as props
}

export const getNameApi = async () => {
  const res = await fetch(USER)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  return data.name // will be passed to the page component as props
}

export const getPaymentApi = async () => {
  const res = await fetch(PAYMENTS)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  return data.response.UAPaymentList // will be passed to the page component as props
}

export const getCommunicationApi = async () => {
  const res = await fetch(COMMUNICATION)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  return data.response.UACommunicationList // will be passed to the page component as props
}

export const getSubmittedAppApi = async () => {
  const res = await fetch(SUBMITTEDAPI)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  return data.response.UASubmittedApplicationProgram // will be passed to the page component as props
}

const Layout = () => {
  const { t } = useTranslation('dashboard')
  const [canadaPensionPlan, updateCanadaPensionPlan] = useState([])
  const [oldAgeSecurity, updateOldAgeSecurity] = useState([])
  const [employmentInsurance, updateEmploymentInsurance] = useState([])
  const [payments, updatePayments] = useState([])
  const [name, updateName] = useState(null)
  const [message, updateMessage] = useState([])
  const [application, updateApplication] = useState([])

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

  useEffect(function effectFunction() {
    getCppBenefitApi().then((props) => {
      updateCanadaPensionPlan(props)
    })
  }, [])

  useEffect(function effectFunction() {
    getOasBenefitApi().then((props) => {
      updateOldAgeSecurity(props)
    })
  }, [])

  useEffect(function effectFunction() {
    getEiBenefitApi().then((props) => {
      updateEmploymentInsurance(props)
    })
  }, [])

  useEffect(function effectFunction() {
    getNameApi().then((props) => {
      updateName(props)
    })
  }, [])

  useEffect(function effectFunction() {
    getPaymentApi().then((props) => {
      updatePayments(props)
    })
  }, [])

  useEffect(function effectFunction() {
    getCommunicationApi().then((props) => {
      updateMessage(props)
    })
  }, [])

  useEffect(function effectFunction() {
    getSubmittedAppApi().then((props) => {
      updateApplication(props)
    })
  }, [])

  console.log(
    application.map((app) => {
      return app
    })
  )

  return (
    <div>
      <Header />
      <section className="py-4"></section>
      {name && <Greeting name={name} />}
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
      {canadaPensionPlan &&
        canadaPensionPlan.map((cpp) => {
          return <BenefitCard benefit={cpp} payments={payments} />
        })}

      <SectionHeading
        icon="/status-icon-pending.svg"
        title={t('title_pending_benefits')}
      />

      {oldAgeSecurity &&
        oldAgeSecurity.map((OAS) => {
          application.map((app) => {})
          return <BenefitCard benefit={OAS} application={application} />
        })}
      <BenefitCard benefit={guaranteedIncomeSupplement} />
      <SectionHeading
        icon="/status-icon-past.svg"
        title={t('title_past_benefits')}
      />

      {employmentInsurance &&
        employmentInsurance.map((EI) => {
          return <BenefitCard benefit={EI} />
        })}

      <MessageCenter
        messages={message.map((mes) => {
          return mes.UACommunication
        })}
      />
      <MoreInfo />
      <Footer
        footerNav="aboutThisSite"
        links={[
          {
            link: '/dashboard',
            linkText: t('footer_link_about_service_can'),
          },
          {
            link: '/dashboard',
            linkText: t('footer_link_about_can'),
          },
          {
            link: '/dashboard',
            linkText: t('footer_link_privacy'),
          },
          {
            link: '/dashboard',
            linkText: t('title_your_benefits'),
          },
        ]}
      />
    </div>
  )
}

export default Layout
