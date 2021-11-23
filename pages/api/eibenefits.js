// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    ei_benefits: [
      {
        name: 'EI',
        pay_amount: 734.34,
        next_payment_date: '10302021',
        payment_start_date: '10302021',
        payment_end_date: '06302022',
        payee_name: 'John Smith Doe',
        payee_institution_account_number: '1234567890-123456',
        payer_name: 'CRA',
        payment_status: 'issued',
        payee_address: '123 -00 Fake Street, On, A1A-1A1',
        payee_institution_number: '12345-67890',
        payment_deposit_date: '10012021',
        payment_type: 'direct deposit',
        additional_information: 'Your tax slips are ready in 2022',
      },
    ],
  })
}
