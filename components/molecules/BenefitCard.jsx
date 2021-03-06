import React, { useState } from 'react'
import Button from '../atoms/Button'
import PropTypes from 'prop-types'
import EiBenefitCard from './EiBenefitCard'
import CppBenefitCard from './CppBenefitCard'
import OasBenefitCard from './OasBenefitCard'
import GisBenefitCard from './GisBenefitCard'
import useTranslation from 'next-translate/useTranslation'

const BenefitCard = (props) => {
  const { t, lang } = useTranslation('dashboard')
  const [isOpen, setIsOpen] = useState(false)
  const [btnCaption, setBtnCaption] = useState('view_details')
  const handleClick = () => {
    setBtnCaption(isOpen ? 'view_details' : 'view_less')
    setIsOpen(!isOpen)
  }

  const renderBenefit = () => {
    switch (props.benefit.benefitType) {
      case 'CPP':
        return (
          <CppBenefitCard
            canadaPensionPlan={props.benefit}
            payments={props.payments}
          />
        )
      case 'OAS':
        return (
          <OasBenefitCard
            oldAgeSecurity={props.benefit}
            application={props.application}
          />
        )
      case 'EI':
        return (
          <EiBenefitCard
            employmentInsurance={props.benefit}
            payments={props.payments}
          />
        )
        return <EiBenefitCard employmentInsurance={props.benefit} />
      case 'GIS':
      // We don't need to display details of GIS for simulation.
      // return <GisBenefitCard guaranteedIncomeSupplement={props.benefit} />
      default:
        return null
    }
  }

  const renderStatus = () => {
    switch (props.benefit.status) {
      case 'Active':
        return (
          <div className="sm:flex sm:justify-around sm:grid sm:grid-cols-2 sm:gap-4 sm:mx-auto mt-6">
            <div id="paymentStartDate">
              <p className="text-gray-700 text-base">{t('payment_amount')}</p>
              <p className="font-bold text-2xl">
                {lang === 'en' && '$'}
                {props.payments.map((payment) => {
                  return payment.UAPayment.amount
                })}
                {lang === 'fr' && '$'}
              </p>
            </div>
            <div id="paymentEndDate">
              <p className="text-gray-700 text-base">
                {t('next_payment_date')}
              </p>
              <p className="font-bold text-xl">
                {props.payments.map((payment) => {
                  return payment.UAPayment.coverStartDate
                })}
              </p>
            </div>
          </div>
        )
      case 'Pending':
      case 'Past':
      default:
        return null
    }
  }

  const renderAdditionalButtons = () => {
    switch (props.benefit.status) {
      case 'Active':
        return (
          <>
            <Button onClick={console.log('Payment Details')}>
              {t('payment_details')}
            </Button>
            <Button onClick={console.log('Your documents')}>
              {t('your_documents')}
            </Button>
          </>
        )
      case 'Pending':
        return (
          <>
            <Button onClick={console.log('View Your Application')}>
              {t('view_your_application')}
            </Button>
            <Button onClick={console.log('Your documents')}>
              {t('your_documents')}
            </Button>
          </>
        )
      case 'Past':

      default:
        return null
    }
  }

  return (
    <div className="layout-container py-4">
      <div className="w-12/12 mx-auto rounded overflow-hidden shadow-lg">
        {/* Benefit Card */}
        <div className="px-6 py-4">
          <div className="font-bold font-display text-5xl mb-1">
            {props.benefit.benefitType}
          </div>
          <p className="font-bold font-display text-base">
            {props.benefit.benefitName}
          </p>
          <p className="font-body text-gray-700 text-base">
            {props.benefit.statusDesciption}
          </p>
          {renderStatus()}
        </div>
        {/* Benefit Card Details */}
        <div>{isOpen && renderBenefit()}</div>
        <div>
          {isOpen && renderAdditionalButtons()}
          <Button onClick={handleClick} lightMode={isOpen}>
            {t(btnCaption)}
          </Button>
        </div>
      </div>
    </div>
  )
}

BenefitCard.propTypes = {
  benefit: PropTypes.shape({
    benefitType: PropTypes.oneOf(['CPP', 'OAS', 'GIS', 'EI']),
    benefitName: PropTypes.oneOf([
      'Canada Pension Plan',
      'Old Age Security',
      'Guaranteed Income Supplement',
      'Employment Insurance',
    ]),
    status: PropTypes.oneOf(['Active', 'Pending', 'Past']),
  }),
}

export default BenefitCard
