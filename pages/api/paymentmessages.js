// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    response: {
      UAPaymentMessageList: [
        {
          UAPaymentMessage: {
            paymentDate: '01012020',
            title: 'message title',
            messageText: 'the is a payment message text',
          },
        },
      ],
    },
  })
}
