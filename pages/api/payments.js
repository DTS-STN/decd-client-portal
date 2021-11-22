// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    response: {
      UAPaymentList: [
        {
          UAPayment: {
            amount: '20.1',
            bankAccountNumber: '3214569854265874',
            bankSortCode: '5265412545',
            checkNumber: '874541252100255',
            coverStartDate: '01012020',
            coverEndDate: '01012025',
            currency: 'cnd',
            dueDate: '01012021',
            method: 'AD01',
            nominatedPayeeAddress: '10 King St, Toronto, ON, K3E 3E4',
            nominatedPayeeName: 'John Doe',
            payedByName: 'BMO',
            payment_id: 'PA02220',
            paymentDate: '03032021',
            status: 'RST01',
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
