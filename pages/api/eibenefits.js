// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    ei_benefits: [
      {
        benefitType: 'EI',
        benefitName: 'Employment Insurance',
        status: 'PastBenefits',
        statusDesciption:
          'You are currently enrolled in the Employment Insurance',
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
      },
    ],
  })
}
