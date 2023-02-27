import axios from 'axios'
import { baseUrl } from '../constants'

export const fetchGoogleAcc = async () => {
  try {
    const result = await axios.get(`${baseUrl}/api/auth/google`)
    console.log({ result })
  } catch (err) {
    console.log(err)
  }
}
