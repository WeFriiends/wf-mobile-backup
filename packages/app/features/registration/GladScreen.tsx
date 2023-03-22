import { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import { SolitoImage } from 'solito/image'
import Logo from 'app/components/Logo'
import { Avatar, Button, Card, Text, TextInput } from 'react-native-paper'
import FbRegistration from './fb/FbOption'
import GoogleRegistration from './google/GoogleOption'
import MailRegistration from './email/MailOption'

const GladScreen = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}
    >
      <SolitoImage
        src="/account-header.svg"
        height={100}
        width={100}
        alt=""
        style={undefined}
        resizeMode={'cover'}
      />
      <View style={styles.logoView}>
        <Logo />
      </View>
      <View style={styles.registrationContainer}>
        <View>
          <Text variant="titleMedium">
            Glad you're here! Hope, you'll enjoy!
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  registrationContainer: {
    margin: 20,
  },
  logoView: {
    height: 80,
    marginTop: 30,
    overflow: 'hidden',
  },
})

export default GladScreen
