export default function handler(req, res) {
  res.status(200).json({
    response: {
      UASubmittedApplicationProgram: [
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
      ],
    },
  })
}
