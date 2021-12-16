import React from 'react'
import PropTypes from 'prop-types'
import useTranslation from 'next-translate/useTranslation'

const GisBenefitCard = (props) => {
  const { t } = useTranslation('dashboard')
  return (
    <div className="grid grid-cols-1 divide-y divide-grey-500">
      <section></section>
      <section className="mt-4 mx-8" id="paymentDate">
        <div className="sm:flex sm:justify-around sm:grid sm:grid-cols-2 sm:gap-4 sm:mx-auto sm:mt-4">
          <div id="applicationDate">
            <p>{t('application_date')}</p>
            <p className="font-bold text-base">
              {props.guaranteedIncomeSupplement.applicationDate}
            </p>
          </div>
          <div id="applicationType">
            <p>{t('application_type')}</p>
            <p className="font-bold text-base">
              {props.guaranteedIncomeSupplement.applicationType}
            </p>
          </div>
          <div></div>
          <div id="applicationDescription">
            <p>{t('application_description')}</p>
            <p className="font-bold text-base">
              {props.guaranteedIncomeSupplement.applicationDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="mt-4 mx-8" id="payeeInfo">
        <div className="sm:flex sm:justify-around sm:grid sm:grid-cols-2 sm:gap-4 sm:mx-auto sm:mt-4">
          <div id="withdrawalRequest" className="mb-4 sm:mb-0">
            <p>{t('withdrawal_request')}</p>
            <p className="font-bold text-base">
              {props.guaranteedIncomeSupplement.withdrawalRequest}
            </p>
          </div>
          <div id="withdrawalStatus" className="mb-4 sm:mb-0">
            <p>{t('withdrawal_status')}</p>
            <p className="font-bold text-base">
              {props.guaranteedIncomeSupplement.withdrawalStatus}
            </p>
          </div>

          <div id="withdrawalRequestDescription" className="mb-4 sm:mb-0">
            <p>{t('withdrawal_request_description')}</p>
            <p className="font-bold text-base">
              {props.guaranteedIncomeSupplement.withdrawalRequestDescription}
            </p>
          </div>
          <div id="applicationWithdrawn" className="mb-4 sm:mb-0">
            <p>{t('application_withdrawn')}</p>
            <p className="font-bold text-base">
              {props.guaranteedIncomeSupplement.applicationWithdrawn}
            </p>
          </div>
        </div>
      </section>

      <section className="mt-4 mx-8" id="additionalInfoSection">
        <div id="additionalInfo" className="mx-auto mt-4">
          <p className="font-bold text-base">{t('additional_information')}</p>
          <p>{props.guaranteedIncomeSupplement.additionalInformation}</p>
        </div>
      </section>
    </div>
  )
}

GisBenefitCard.propTypes = {
  benefit: PropTypes.shape({
    benefitType: PropTypes.string,
    benefitName: PropTypes.string,
    status: PropTypes.oneOf(['Active', 'Pending']),
    statusDesciption: PropTypes.string,
    applicationdate: PropTypes.date,
    applicationType: PropTypes.string,
    applicationDescription: PropTypes.string,
    withdrawalRequest: PropTypes.string,
    withdrawalStatus: PropTypes.string,
    withdrawalRequestDescription: PropTypes.string,
    applictionWithdrawn: PropTypes.string,
    additionalInformation: PropTypes.string,
  }),
}

export default GisBenefitCard
