export default function handler(req, res) {
  res.status(200).json({
    response: {
      UASubmittedApplicationProgram: [
        {
          application_id: '1111',
          submittedOn: 'August 1, 2021',
          name: 'CPP',
          status: 'Active',
          description:
            'You are currently receiving Canada Pension Plan retirement benefits',
          application_program_id: '',
          case_id: '',
          programStatusDetails: {
            hasPendingWithdrawalRequest: false,
            status: '',
            withdrawalRequestStatusMessage: '',
            canBeWithdrawn: '',
          },
        },
        {
          application_id: '2222',
          submittedOn: 'September 1, 2021',
          name: 'OAS',
          status: 'Pending',
          description:
            'You application is pending, we will notify you with decision',
          application_program_id: '',
          case_id: '',
          programStatusDetails: {
            hasPendingWithdrawalRequest: true,
            status: 'Not Approved',
            withdrawalRequestStatusMessage: 'In Progress',
            canBeWithdrawn: 'No',
          },
        },
        {
          application_id: '3333',
          submittedOn: 'October 1, 2021',
          name: 'EI',
          status: 'Past',
          description: 'You received your last payment',
          application_program_id: '',
          case_id: '',
          programStatusDetails: {
            hasPendingWithdrawalRequest: false,
            status: '',
            withdrawalRequestStatusMessage: '',
            canBeWithdrawn: '',
          },
        },
      ],
    },
  })
}
