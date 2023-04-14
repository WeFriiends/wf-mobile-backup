import { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import Logo from 'app/components/Logo'
import { Avatar, Button, Card, Text, TextInput } from 'react-native-paper'
import FbAccount from './fb/FbAccount'
import GoogleRegistration from './google/GoogleRegistration'
import { createParam } from 'solito'

const ChooseAccScreen = () => {
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
        <View>
          <Text style={styles.coloredText} variant="headlineMedium">
            Choose an account
          </Text>
        </View>
        <FbAccount />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  registrationContainer: {
    margin: 20,
    display: 'flex',
    alignItems: 'center',
  },
  coloredText: {
    color: '#F46B5D',
  },
  logoView: {
    height: 80,
    marginTop: 30,
    overflow: 'hidden',
  },
})

export default ChooseAccScreen