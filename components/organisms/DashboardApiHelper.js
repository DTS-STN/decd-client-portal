import {
  COMMUNICATION,
  CPPBENEFIT,
  EIBENEFIT,
  OASBENEFIT,
  PAYMENTS,
  SUBMITTEDAPI,
  USER,
} from './Constants'

export const getCppBenefitApi = async () => {
  const res = await fetch(CPPBENEFIT)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return data.cpp_benefits // will be passed to the page component as props
}
export const getOasBenefitApi = async () => {
  const res = await fetch(OASBENEFIT)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  return data.oas_benefits
}

export const getEiBenefitApi = async () => {
  const res = await fetch(EIBENEFIT)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  return data.ei_benefits // will be passed to the page component as props
}

export const getNameApi = async () => {
  const res = await fetch(USER)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  return data.name // will be passed to the page component as props
}

export const getPaymentApi = async () => {
  const res = await fetch(PAYMENTS)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  return data.response.UAPaymentList // will be passed to the page component as props
}

export const getCommunicationApi = async () => {
  const res = await fetch(COMMUNICATION)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  return data.response.UACommunicationList // will be passed to the page component as props
}

export const getSubmittedAppApi = async () => {
  const res = await fetch(SUBMITTEDAPI)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  return data.response.UASubmittedApplicationProgram // will be passed to the page component as props
}
