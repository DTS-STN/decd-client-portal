// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    response: {
      UACommunicationList: [
        {
          UACommunication: {
            communication_id: 'COM0001112',
            subjectText: 'Payment Letter',
            communicationDate: '01012020',
            coverEndDate: '01012025',
            userName: 'cnd',
            incomingInd: 'false',
            attachmentInd: 'false',
          },
        },
      ],
    },
  })
}
