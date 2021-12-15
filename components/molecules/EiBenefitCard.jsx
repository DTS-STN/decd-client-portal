import React from 'react'
import PropTypes from 'prop-types'
import useTranslation from 'next-translate/useTranslation'

const EiBenefitCard = (props) => {
  const { t } = useTranslation('dashboard')
  return (
    <div className="grid grid-cols-1 divide-y divide-grey-500">
      <section></section>
      <section className="mt-4 mx-8" id="paymentDate">
        <div className="sm:flex sm:justify-around sm:grid sm:grid-cols-2 sm:gap-4 sm:mx-auto sm:mt-4">
          <div id="paymentStartDate">
            <p>{t('payment_start_date')}</p>
            <p className="font-bold text-base">
              {props.employmentInsurance.paymentStartDate}
            </p>
          </div>
          <div id="paymentEndDate">
            <p>{t('payment_end_date')}</p>
            <p className="font-bold text-base">
              {props.employmentInsurance.paymentEndDate}
            </p>
          </div>
        </div>
      </section>

      <section className="mt-4 mx-8" id="payeeInfo">
        <div className="sm:flex sm:justify-around sm:grid sm:grid-cols-2 sm:gap-4 sm:mx-auto sm:mt-4">
          <div id="paymentFullName" className="mb-4 sm:mb-0">
            <p>{t('payee_full_name')}</p>
            <p className="font-bold text-base">
              {props.employmentInsurance.payeeFullName}
            </p>
          </div>
          <div id="payeeAddress" className="mb-4 sm:mb-0">
            <p>{t('payee_address')}</p>
            <p className="font-bold text-base">
              {props.employmentInsurance.payeeAddress}
            </p>
          </div>

          <div id="payeeInsAccNum" className="mb-4 sm:mb-0">
            <p>{t('payee_institution_account_number')}</p>
            <p className="font-bold text-base">
              {props.employmentInsurance.payeeInstitutionAccountNumber}
            </p>
          </div>
          <div id="payeeInsSortCode" className="mb-4 sm:mb-0">
            <p>{t('payee_institution_sort_code')}</p>
            <p className="font-bold text-base">
              {props.employmentInsurance.payeeInstitutionSortCode}
            </p>
          </div>

          <div id="payerName" className="mb-4 sm:mb-0">
            <p>{t('payers_name')}</p>
            <p className="font-bold text-base">
              {props.employmentInsurance.payerName}
            </p>
          </div>
          <div id="paymenTDepositDate" className="mb-4 sm:mb-0">
            <p>{t('payment_deposit_date')}</p>
            <p className="font-bold text-base">
              {props.employmentInsurance.paymentDepositDate}
            </p>
          </div>

          <div id="paymentStatus" className="mb-4">
            <p>{t('payment_status')}</p>
            <p className="font-bold text-base">
              {props.employmentInsurance.paymentStatus}
            </p>
          </div>
          <div id="paymentStatus" className="mb-4">
            <p>{t('payment_type')}</p>
            <p className="font-bold text-base">
              {props.employmentInsurance.paymentType}
            </p>
          </div>
        </div>
      </section>

      <section className="mt-4 mx-8" id="paymentDate">
        <div className="flex justify-around grid grid-cols-2 gap-4 mx-auto mt-4">
          <div id="additionalInfo">
            <p>{t('additional_information')}</p>
            <p className="font-bold text-base">
              {props.employmentInsurance.additionalInformation}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

EiBenefitCard.propTypes = {
  benefit: PropTypes.shape({
    benefitType: PropTypes.string,
    benefitName: PropTypes.string,
    status: PropTypes.oneOf(['Active', 'Pending']),
    statusDesciption: PropTypes.string,
    nextPaymentAmount: PropTypes.number,
    nextPaymentDate: PropTypes.date,
    paymentStartDate: PropTypes.date,
    paymentEndDate: PropTypes.date,
    payeeFullName: PropTypes.string,
    payeeAddress: PropTypes.string,
    payeeInstitutionAccountNumber: PropTypes.string,
    payeeInstitutionSortCode: PropTypes.string,
    payerName: PropTypes.string,
    paymentDepositDate: PropTypes.date,
    paymentStatus: PropTypes.oneOf(['Issued', 'Not Approved']),
    paymentType: PropTypes.oneOf(['Direct Deposit', 'Credit card', 'Cheques']),
    additionalInformation: PropTypes.string,
  }),
}

export default EiBenefitCard
