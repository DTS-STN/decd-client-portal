import {
  COMMUNICATION,
  COMMUNICATION_MOCK,
  CPPBENEFIT,
  CPPBENEFIT_MOCK,
  EIBENEFIT,
  EIBENEFIT_MOCK,
  OASBENEFIT,
  OASBENEFIT_MOCK,
  PAYMENTS,
  PAYMENTS_MOCK,
  SUBMITTEDAPI,
  SUBMITTEDAPI_MOCK,
  USER,
  USER_MOCK,
} from './Constants'

export const getCppBenefitApi = async () => {
  let res
  try {
    res = await fetch(CPPBENEFIT)
  } catch (e) {
    res = await fetch(CPPBENEFIT_MOCK)
  }
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return data.cpp_benefits // will be passed to the page component as props
}
export const getOasBenefitApi = async () => {
  let res
  try {
    res = await fetch(OASBENEFIT)
  } catch (e) {
    res = await fetch(OASBENEFIT_MOCK)
  }
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  return data.oas_benefits
}

export const getEiBenefitApi = async () => {
  let res
  try {
    res = await fetch(EIBENEFIT)
  } catch (e) {
    res = await fetch(EIBENEFIT_MOCK)
  }
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  return data.ei_benefits // will be passed to the page component as props
}

export const getNameApi = async () => {
  let res
  try {
    res = await fetch(USER)
  } catch (e) {
    res = await fetch(USER_MOCK)
  }
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  return data.name // will be passed to the page component as props
}

export const getPaymentApi = async () => {
  let res
  try {
    res = await fetch(PAYMENTS)
  } catch (e) {
    res = await fetch(PAYMENTS_MOCK)
  }
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  return data.response.UAPaymentList // will be passed to the page component as props
}

export const getCommunicationApi = async () => {
  let res
  try {
    res = await fetch(COMMUNICATION)
  } catch (e) {
    res = await fetch(COMMUNICATION_MOCK)
  }
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  return data.response.UACommunicationList // will be passed to the page component as props
}

export const getSubmittedAppApi = async () => {
  let res
  try {
    res = await fetch(SUBMITTEDAPI)
  } catch (e) {
    res = await fetch(SUBMITTEDAPI_MOCK)
  }
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  return data.response.UASubmittedApplicationProgram // will be passed to the page component as props
}
