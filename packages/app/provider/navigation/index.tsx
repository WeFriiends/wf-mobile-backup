import { useMemo } from 'react'
import * as Linking from 'expo-linking'
import { NavigationContainer } from '@react-navigation/native'

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NavigationContainer
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL('/')],
          config: {
            initialRouteName: 'home',
            screens: {
              home: '',
              'mail-sign': 'registration/mail-sign',
              'user-detail': 'user/:id',
              'user-profile': 'user-profile',
            },
          },
        }),
        []
      )}
    >
      {children}
    </NavigationContainer>
  )
}
