// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    response: {
      UAPaymentList: [
        {
          UAPayment: {
            amount: '734.34',
            bankAccountNumber: 'XXXX-123',
            bankSortCode: '002',
            checkNumber: '874541252100255',
            coverStartDate: 'August 1, 2021',
            coverEndDate: '01012025',
            currency: 'cnd',
            dueDate: '01-01-2021',
            method: 'Direct Deposit',
            nominatedPayeeAddress: '123 - 00 Fake Street, Ottawa, On A1A-1A1',
            nominatedPayeeName: 'John Smith Doe',
            payedByName: 'Government of Canada',
            payment_id: 'PA02220',
            paymentDate: 'August 30, 2021',
            status: 'Issued',
            statusOther: 'CODE01',
            external: 'false',
            voucherNumber: 'ABC00221121',
            paymentDetails: [
              {
                benefitName: 'OAS',
                caseId: 'CASE001',
                caseReference: 'RE99009999',
                coverEndDate: '02032021',
                coverStartDate: '02042021',
                creditAmount: '200.02',
                debitAmount: '0.0',
                entitlement: 'EN009',
              },
            ],
          },
        },
      ],
    },
  })
}
