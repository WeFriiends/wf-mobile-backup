import * as Linking from 'expo-linking'

import {NavigationContainer} from '@react-navigation/native'
import {useMemo} from 'react';

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

              'registration': {
                path:
                  'registration/:mail-option',
              }
              ,
              'mail-sign-up': '/mail-sign-up',
              'glad-screen': {path: 'registration/glad-screen/:id'}
              ,
              signIn: 'signIn',
              'user-detail': 'user/:id',
              'user-profile': 'user/profile',
              'user-search': 'user/search/men',
              error: '/error',
              error400: '/error400',
              error500: '/error500',
              NotFound: '*', // https://reactnavigation.org/docs/configuring-links/#notfound-screen,

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
