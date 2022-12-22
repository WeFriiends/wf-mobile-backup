import { HomeScreen } from '../../features/home/screen'
import ProfileScreen from 'app/features/user/profile-screen';
import { UserDetailScreen } from '../../features/user/detail-screen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<{
  home: undefined
  'user-detail': {
    id: string
  }
  'user-profile': {
    id: string
  }
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
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
