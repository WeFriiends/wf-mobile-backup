import { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import Logo from 'app/components/Logo'
import { Avatar, Button, Card, Text, TextInput } from 'react-native-paper'
import FbRegistration from './fb/FbRegistration'
import GoogleRegistration from './google/GoogleRegistration'
import MailRegistration from './email/MailRegistration'

const RegistrationOptionsScreen = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}
    >
      <View style={styles.logoView}>
        <Logo />
      </View>
      <View style={styles.registrationContainer}>
        <View style={styles.textBlock}>
          <Text style={styles.coloredText} variant="headlineMedium">
            New here?
          </Text>
          <Text variant="titleLarge">Create an account</Text>
        </View>
        <View>
          <FbRegistration />
          <GoogleRegistration />
          <MailRegistration />
        </View>
        <View>
          <Text variant="titleMedium">
            By creating an account, I agree with The Terms of Service and
            Privacy Policy
          </Text>
        </View>
        <View style={styles.emptyContainer}></View>
        <View style={styles.signContainer}>
          <Text variant="titleLarge">Already have an account</Text>
          <Text style={styles.signText} variant="titleLarge">
            Sign in
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
  textBlock: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 50,
  },
  coloredText: {
    color: '#F46B5D',
  },
  logoView: {
    height: 80,
    marginTop: 30,
    overflow: 'hidden',
  },
  signContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  emptyContainer: {
    minHeight: '15%',
    maxHeight: '30%',
  },
  signText: {
    color: '#1D878C',
  },
})

export default RegistrationOptionsScreen
