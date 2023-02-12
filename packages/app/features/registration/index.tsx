import { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import Logo from 'app/components/Logo'
import { Avatar, Button, Card, Text, TextInput } from 'react-native-paper'
import FbRegistration from './fb/FbRegistration'
import GoogleRegistration from './google/GoogleRegistration'
import MailRegistration from './email/MailRegistration'

const RegistrationScreen = () => {
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
      <View>
        <Text variant="titleMedium">New here?</Text>
        <Text variant="titleMedium">Create an account</Text>
      </View>
      <View>
        <FbRegistration />
        <GoogleRegistration />
        <MailRegistration />
      </View>
      <View>
        <Text variant="titleMedium">
          By creating an account, I agree with The Terms of Service and Privacy
          Policy
        </Text>
      </View>
      <View>
        <Text variant="titleMedium">Already have an account</Text>
        <Text variant="titleMedium">Sign in</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  logoView: {
    height: 80,
    marginTop: 30,
    overflow: 'hidden',
  },
  registerSourceStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
})

export default RegistrationScreen
