// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    response: {
      UACommunicationList: [
        {
          UACommunication: {
            communication_id: 'COM0001112',
            subjectText: 'Upcoming change in OAS',
            communicationDate: 'October 4, 2021',
            coverEndDate: '01012025',
            userName: 'cnd',
            incomingInd: 'false',
            attachmentInd: true,
          },
        },
        {
          UACommunication: {
            communication_id: 'COM0001113',
            subjectText: 'An update regarding GIS',
            communicationDate: 'September 28, 2021',
            coverEndDate: '01012025',
            userName: 'cnd',
            incomingInd: 'false',
            attachmentInd: true,
          },
        },
        {
          UACommunication: {
            communication_id: 'COM0001113',
            subjectText: 'Your EI eligibility period ends',
            communicationDate: 'July 16, 2021',
            coverEndDate: '01012025',
            userName: 'cnd',
            incomingInd: 'false',
            attachmentInd: false,
          },
        },
      ],
    },
  })
}
