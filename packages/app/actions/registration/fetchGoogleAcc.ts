import axios from 'axios'
import { baseUrl } from '../constants'

export const googleSignIn = async () => {
  window.open(`${baseUrl}/api/auth/google`)
}
