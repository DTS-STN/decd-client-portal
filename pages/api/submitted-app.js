export default function handler(req, res) {
  res.status(200).json({
    response: {
      UASubmittedApplicationProgram: [
        {
          application_id: '1111',
          application_date: 'August 1, 2021',
          application_type: 'CPP',
          application_status: 'Active',
          application_description:
            'You are currently receiving Canada Pension Plan retirement benefits',
          application_program_id: '',
          case_id: '',
          program_status_details: {
            withdrawal_request_pending: false,
            withdrawal_request_status: '',
            withdrawal_request_description: '',
            can_be_withdrawn: '',
          },
        },
        {
          application_id: '2222',
          application_date: 'September 1, 2021',
          application_type: 'OAS',
          application_status: 'Pending',
          application_description:
            'You application is pending, we will notify you with decision',
          application_program_id: '',
          case_id: '',
          program_status_details: {
            withdrawal_request_pending: true,
            withdrawal_request_status: 'Not Approved',
            withdrawal_request_description: 'In Progress',
            can_be_withdrawn: 'No',
          },
        },
        {
          application_id: '3333',
          application_date: 'October 1, 2021',
          application_type: 'EI',
          application_status: 'Past',
          application_description: 'You received your last payment',
          application_program_id: '',
          case_id: '',
          program_status_details: {
            withdrawal_request_pending: false,
            withdrawal_request_status: '',
            withdrawal_request_description: '',
            can_be_withdrawn: '',
          },
        },

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
      ],
    },
  })
}
