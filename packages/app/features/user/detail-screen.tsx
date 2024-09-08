import {View} from 'dripsy'

import {TextLink} from 'solito/link'

export function UserDetailScreen() {

  return (
    <View sx={{flex: 1, justifyContent: 'center', alignItems: 'center', gap: 40}}>
      <TextLink href="/signIn">👈 Registration screen</TextLink>
      <TextLink href="/user/profile">👈 Go to Profile</TextLink>
      <TextLink href="/user/search/men">👈 Display men search</TextLink>
      <TextLink href="/error">👈 Error</TextLink>
      <TextLink href="/error400">👈 Error 400</TextLink>
      <TextLink href="/error500">👈 Error 500</TextLink>
    </View>
  )
}
