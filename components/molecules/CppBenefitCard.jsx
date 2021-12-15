import React from 'react'
import PropTypes from 'prop-types'
import useTranslation from 'next-translate/useTranslation'

const CppBenefitCard = (props) => {
  const { t } = useTranslation('dashboard')
  return (
    <div className="grid grid-cols-1 divide-y divide-grey-500">
      <section></section>
      <section className="mt-4 mx-8" id="paymentDate">
        <div className="sm:flex sm:justify-around sm:grid sm:grid-cols-2 sm:gap-4 sm:mx-auto sm:mt-4">
          <div id="pensionStartDate">
            <p>{t('pension_start_date')}</p>
            <p className="font-bold text-base">
              {props.canadaPensionPlan.pensionStartDate}
            </p>
          </div>
        </div>
      </section>

      <section className="mt-4 mx-8" id="payeeInfo">
        <div className="sm:flex sm:justify-around sm:grid sm:grid-cols-2 sm:gap-4 sm:mx-auto sm:mt-4">
          <div id="payeeName" className="mb-4 sm:mb-0">
            <p>{t('payee_name')}</p>
            <p className="font-bold text-base">
              {props.canadaPensionPlan.payeeFullName}
            </p>
          </div>
          <div id="payeeAddress" className="mb-4 sm:mb-0">
            <p>{t('payee_address')}</p>
            <p className="font-bold text-base">
              {props.canadaPensionPlan.payeeAddress}
            </p>
          </div>

          <div id="accountNumber" className="mb-4 sm:mb-0">
            <p>{t('account_number')}</p>
            <p className="font-bold text-base">
              {props.canadaPensionPlan.accountNumber}
            </p>
          </div>
          <div id="institutionNumber" className="mb-4 sm:mb-0">
            <p>{t('institution_number')}</p>
            <p className="font-bold text-base">
              {props.canadaPensionPlan.institutionNumber}
            </p>
          </div>

          <div id="payerName" className="mb-4 sm:mb-0">
            <p>{"Payer's Name"}</p>
            <p className="font-bold text-base">
              {props.canadaPensionPlan.payerName}
            </p>
          </div>
          <div id="paymentDepositDate" className="mb-4 sm:mb-0">
            <p>{t('payment_deposit_date')}</p>
            <p className="font-bold text-base">
              {props.canadaPensionPlan.paymentDepositDate}
            </p>
          </div>

          <div id="paymentStatus" className="mb-4">
            <p>{t('payment_status')}</p>
            <p className="font-bold text-base">
              {props.canadaPensionPlan.paymentStatus}
            </p>
          </div>
          <div id="paymentType" className="mb-4">
            <p>{t('payment_type')}</p>
            <p className="font-bold text-base">
              {props.canadaPensionPlan.paymentType}
            </p>
          </div>
        </div>
      </section>

      <section className="mt-4 mx-8" id="additionalInfoSection">
        <div className="flex justify-around grid grid-cols-2 gap-4 mx-auto mt-4">
          <div id="additionalInfo">
            <p>{t('additional_information')}</p>
            <p className="font-bold text-base">
              {props.canadaPensionPlan.additionalInformation}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

CppBenefitCard.propTypes = {
  benefit: PropTypes.shape({
    benefitType: PropTypes.string,
    benefitName: PropTypes.string,
    status: PropTypes.oneOf(['Active', 'Pending']),
    statusDesciption: PropTypes.string,
    paymentAmount: PropTypes.number,
    nextPaymentDate: PropTypes.date,
    pensionStartDate: PropTypes.date,
    payeeFullName: PropTypes.string,
    payeeAddress: PropTypes.string,
    accountNumber: PropTypes.string,
    institutionNumber: PropTypes.string,
    payerName: PropTypes.string,
    paymentDepositDate: PropTypes.date,
    paymentStatus: PropTypes.oneOf(['Issued', 'Not Approved']),
    paymentType: PropTypes.oneOf(['Direct Deposit', 'Credit card', 'Cheques']),
    additionalInformation: PropTypes.string,
  }),
}

export default CppBenefitCard
