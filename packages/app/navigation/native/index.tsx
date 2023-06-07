import { HomeScreen } from '../../features/home/screen'
import RegistrationOptionsScreen from '../../features/registration/RegistrationOptionsScreen'
import MailCreds from '../../features/registration/email/MailCredsContainer'
import GladScreen from '../../features/registration/GladScreen'
import ProfileScreen from 'app/features/user/profile-screen'
import { UserDetailScreen } from '../../features/user/detail-screen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator<{
  home: undefined
  'user-detail': {
    id: string
  }
  'mail-sign': undefined
  'glad-screen': undefined
  'user-profile': {
    id: string
  }
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={RegistrationOptionsScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="mail-sign"
        component={MailCreds}
        options={{
          title: 'Mail Sign',
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
    </Stack.Navigator>
  )
}
