import axios from 'axios'
import { baseUrl } from '../constants'

export const fetchGoogleAcc = () => {
  axios
    .get(`${baseUrl}/api/auth/google`)
    .then((result) => {
      console.log({ result })
    })
    .catch((err) => {
      console.log('Error: ', err.response.data.message)
    })
}
