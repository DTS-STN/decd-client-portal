// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    cpp_benefits: [
      {
        name: 'CPP',
        pay_amount: 734.34,
        next_payment_date: '09302021',
        pension_start_date: '08012021',
        payee_name: 'John Smith Doe',
        account_number: '4443-344',
        payer_name: 'Government of Canada',
        payment_status: 'issued',
        payee_address: '123 -00 Fake Street, On, A1A-1A1',
        institution_number: '002',
        payment_deposit_date: '08302121',
        payment_type: 'direct deposit',
        additional_information: 'Your 2022 tax slip are ready',
      },
    ],
  })
}
