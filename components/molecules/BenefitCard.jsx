import React, { useState } from 'react'
import Button from './Button'
import PropTypes from 'prop-types'
import EiBenefitCard from './EiBenefitCard'
import CppBenefitCard from './CppBenefitCard'
import OasBenefitCard from './OasBenefitCard'

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
        return <CppBenefitCard canadaPensionPlan={props.benefit} />
      case 'OAS':
        return <OasBenefitCard oldAgeSecurity={props.benefit} />
      case 'EI':
        return <EiBenefitCard employmentInsurance={props.benefit} />
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
                ${props.benefit.nextPaymentAmount}
              </p>
            </div>
            <div id="paymentEndDate">
              <p className="text-gray-700 text-base">Next Payment Date</p>
              <p className="font-bold text-xl">
                {props.benefit.nextPaymentDate}
              </p>
            </div>
          </div>
        )
      case 'Pending':
        return (
          <div id="paymentStartDate" className="mt-6 ml-2">
            <p>Application Status</p>
            <p className="font-bold text-base">{props.benefit.status}</p>
          </div>
        )
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

        <div className="px-6 py-4">
          <Button onClick={handleClick}>{btnCaption}</Button>
        </div>
      </div>
    </div>
  )
}

export default BenefitCard
