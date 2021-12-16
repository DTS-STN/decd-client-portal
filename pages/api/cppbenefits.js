// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    cpp_benefits: [
      {
        benefitType: 'CPP',
        benefitName: 'Canada Pension Plan',
        status: 'Active',
        statusDesciption:
          'You are currently receiving Canada Pension Plan retirement benefits',
        nextPaymentAmount: 735.34,
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
      },
    ],
  })
}
