import GladScreen from '../../features/registration/glad-screen/GladScreen'
import { HomeScreen } from 'app/features/home/screen'
import MailCreds from '../../features/registration/email/MailCredsContainer'
import MenSearchScreen from '../../features/search/men-search-screen'
import ErrorScreen from '../../features/error/ErrorScreen'
import ProfileScreen from 'app/features/user/profile-screen'
import RegistrationOptionsScreen from '../../features/registration/RegistrationOptionsScreen'
import { UserDetailScreen } from 'app/features/user/detail-screen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export type RootStackParamList = {
  home: undefined
  signIn: undefined
  'mail-sign-up': undefined
  'registration': undefined  //added ''
  'mail-sign-in': undefined
  'glad-screen': {
    id: string
  } //undefined
  'user-detail': {
    id: string
  }
  'user-profile': {
    id: string
  }
  'user-search': {
    id: string
  }
  'error': undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}  //it was RegistrationOptionsScreen, porb needs to be home
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="signIn"
        component={RegistrationOptionsScreen}
        options={{
          title: 'Sign In',
        }}
      />
      <Stack.Screen
        name="registration" // it used to be mail-sign-up, renamed to registration
        component={MailCreds}
        options={{
          title: 'Mail Registration',
        }}
      />
      <Stack.Screen
        name="mail-sign-in"
        component={MailCreds}
        options={{
          title: 'Mail Sign In',
        }}
      />
      <Stack.Screen
        name="glad-screen"
        component={GladScreen}
        options={{
          title: 'Glad Screen',
        }}

      />
      <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: 'User',
        }}
      />
      <Stack.Screen
        name="user-profile"
        component={ProfileScreen}
        options={{
          title: 'User Profile',
        }}
      />
      <Stack.Screen
        name="user-search"
        component={MenSearchScreen}
        options={{
          title: 'Men Search'
        }}
      />
      <Stack.Screen
        name="error"
        component={ErrorScreen}
      />
    </Stack.Navigator>
  )
}
