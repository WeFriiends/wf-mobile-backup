import axios from 'axios'

type MailAccountRegistrationResponse = {
  result: number
  data: {
    message: string
  }
}

export const mailAccountRegistration = async (
  password1: string,
  password2: string,
  email: string
): Promise<MailAccountRegistrationResponse | undefined> => {
  try {
    const result = await axios.post(
      'https://clumsy-glasses-clam.cyclic.app/api/auth/register',
      {
        password: password1,
        password2: password2,
        email: email,
      }
    )
    console.log({ result })

    if (result.status === 200) {
      return result.data.m
    }
  } catch (err) {
    console.log(err.response)
  }
}

export const mailAccountConfirmation = async (confirmationCode) => {
  try {
    const result = await axios.get(
      `https://clumsy-glasses-clam.cyclic.app/api/auth/confirm/${confirmationCode}`,
      confirmationCode
    )
    console.log('result status: ', result.status)
    if (result.status === 200) return true
    else return false
  } catch (err) {
    console.log('error:', err)
    return false
  }
}
