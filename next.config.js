const nextTranslate = require('next-translate')

module.exports = {
  reactStrictMode: true,
  ...nextTranslate(),
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/payments-mock',
        destination:
          'https://decd-client-portal-main.bdm-dev.dts-stn.com/api/payments',
      },
      {
        source: '/api/cppbenefits-mock',
        destination:
          'https://decd-client-portal-main.bdm-dev.dts-stn.com/api/cppbenefits',
      },
      {
        source: '/api/oasbenefits-mock',
        destination:
          'https://decd-client-portal-main.bdm-dev.dts-stn.com/api/oasbenefits',
      },
      {
        source: '/api/eibenefits-mock',
        destination:
          'https://decd-client-portal-main.bdm-dev.dts-stn.com/api/eibenefits',
      },
      {
        source: '/api/user-mock',
        destination:
          'https://decd-client-portal-main.bdm-dev.dts-stn.com/api/user',
      },
      {
        source: '/api/communications-mock',
        destination:
          'https://decd-client-portal-main.bdm-dev.dts-stn.com/api/communications',
      },
      {
        source: '/api/submitted-app-mock',
        destination:
          'https://decd-client-portal-main.bdm-dev.dts-stn.com/api/submitted-app',
      },
    ]
  },
}
