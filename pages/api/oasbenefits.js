// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    oas_benefits: [
      {
        benefitType: 'OAS',
        benefitName: 'Old Age Security',
        status: 'Pending',
        statusDesciption:
          'You application is pending, we will notify you with decision',
        applicationDate: 'August 1, 2021',
        applicationType: 'Old Age Security Benefits (OAS)',
        applicationDescription: 'Paper Application Rceived',
        withdrawalRequest: 'Pending',
        withdrawalStatus: 'Not Approved',
        withdrawalRequestDescription: 'In Progress',
        applicationWithdrawn: 'No',
        additionalInformation:
          'Your OAS payments will start as soon as you are approved. You may also qualify for the Guaranteed Income Supplement. We will notify you if we require additional information from you',
      },
    ],
  })
}
