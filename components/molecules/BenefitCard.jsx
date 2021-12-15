import React, { useState } from 'react'
import Button from '../atoms/Button'
import PropTypes from 'prop-types'
import EiBenefitCard from './EiBenefitCard'
import CppBenefitCard from './CppBenefitCard'
import OasBenefitCard from './OasBenefitCard'
import GisBenefitCard from './GisBenefitCard'
import useTranslation from 'next-translate/useTranslation'

const BenefitCard = (props) => {
  const { t } = useTranslation('dashboard')
  const [isOpen, setIsOpen] = useState(false)
  const [btnCaption, setBtnCaption] = useState('view_details')
  const handleClick = () => {
    setBtnCaption(isOpen ? 'view_details' : 'read_less')
    setIsOpen(!isOpen)
  }

  const renderBenefit = () => {
    switch (props.benefit.benefitType) {
      case 'CPP':
        return <CppBenefitCard canadaPensionPlan={props.benefit} />
      case 'OAS':
        return <OasBenefitCard oldAgeSecurity={props.benefit} />
      case 'EI':
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
                ${props.benefit.nextPaymentAmount}
              </p>
            </div>
            <div id="paymentEndDate">
              <p className="text-gray-700 text-base">
                {t('next_payment_date')}
              </p>
              <p className="font-bold text-xl">
                {props.benefit.nextPaymentDate}
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

  return (
    <div className="layout-container py-4">
      <div className="w-12/12 mx-auto rounded overflow-hidden shadow-lg">
        {/* Benefit Card */}
        <div className="px-6 py-4">
          <div className="font-bold text-4xl mb-2">
            {props.benefit.benefitType}
          </div>
          <p className="font-bold text-base">{props.benefit.benefitName}</p>
          <p className="text-gray-700 text-base">
            {props.benefit.statusDesciption}
          </p>
          {renderStatus()}
        </div>
        {/* Benefit Card Details */}
        <div>{isOpen && renderBenefit()}</div>
        <Button onClick={handleClick}>{t(btnCaption)}</Button>
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
