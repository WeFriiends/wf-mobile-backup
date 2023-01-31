import * as Linking from 'expo-linking'

import { NavigationContainer } from '@react-navigation/native'
import { useMemo } from 'react'

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
              registration: 'registration',
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
