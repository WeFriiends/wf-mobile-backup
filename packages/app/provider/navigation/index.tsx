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
              registration: {
                path: 'registration/:mail-option',
                // parse: { 'mail-option': String },
              },
              'user-detail': 'user/:id',
              'user-profile': 'user-profile',
              NotFound: '*', // https://reactnavigation.org/docs/configuring-links/#notfound-screen
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
