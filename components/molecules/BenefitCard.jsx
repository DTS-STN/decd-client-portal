import React, { useState } from 'react'
import Button from '../atoms/Button'
import PropTypes from 'prop-types'
import EiBenefitCard from './EiBenefitCard'
import CppBenefitCard from './CppBenefitCard'
import OasBenefitCard from './OasBenefitCard'
import GisBenefitCard from './GisBenefitCard'

const BenefitCard = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [btnCaption, setBtnCaption] = useState('View Details')
  const handleClick = () => {
    setBtnCaption(isOpen ? 'View Details' : 'Read Less')
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
              <p className="text-gray-700 text-base">Payment Amount</p>
              <p className="font-bold text-2xl">
                $
                {props.payments.map((payment) => {
                  return payment.UAPayment.amount
                })}
              </p>
            </div>
            <div id="paymentEndDate">
              <p className="text-gray-700 text-base">Next Payment Date</p>
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
        <Button onClick={handleClick}>{btnCaption}</Button>
      </div>
    </div>
  )
}

export default BenefitCard
