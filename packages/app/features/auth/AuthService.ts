import AsyncStorage from '@react-native-async-storage/async-storage'
import { fetchMailSignIn } from '../../actions/registration/mail/mailSignIn'

;

export const mailSignIn = async (email: string, password: string) => {
  const response = await fetchMailSignIn(email, password);
//  await AsyncStorage.clear();
  const token = response.data.token
  if (token) {
    await AsyncStorage.setItem('user', token)
  }

  return response.data
}

export const isAuthenticated = async() => {
  const user =  await AsyncStorage.getItem('user')
  if (!user) {
    return {}
  }
  return JSON.parse(user)
}
