// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    oas_benefits: [
      {
        name: 'OAS',
        application_status: 'Pending',
        application_date: '08012021',
        application_type: 'Old Age Security Benefits (OAS)',
        application_description: 'Paper Application Received',
        withdrawal_request: 'Pending',
        withdrawal_request_description: 'In Progress',
        withdrawal_status: 'Not Approved',
        Application_withdrawn: 'No',
        institution_number: '002',
        additional_information:
          'Your OAS payments will start as soon as you are approved. You may also qualify for the Guaranteed Income Supplement. We will notify you if we require additional information from you',
      },
    ],
  })
}
