import { useEffect, useState } from 'react'
import { StyleSheet, TextInput, Image } from 'react-native'
import { View } from 'dripsy'
import { createParam } from 'solito'
import AddDateOfBirth from 'app/components/profileBuilder/AddDateOfBirth'
import Logo from 'app/components/Logo'
import { Step } from 'app/types/Step'
import Prompt from '../../components/Prompt'
import {
  Avatar,
  Button,
  Card,
  Text,
  TextInput as TextInputR,
} from 'react-native-paper'

const RegistrationScreen = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}
    >
      <View
        style={{
          height: 80,
          marginTop: 30,
          overflow: 'hidden',
        }}
      >
        <Logo />
      </View>
      <View style={styles.registerSourceStyle}>
        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_username.png',
          }}
          style={styles.imageStyle}
        />
        <TextInput
          style={{ flex: 1 }}
          placeholder="Enter Your Name Here"
          underlineColorAndroid="transparent"
        />
      </View>

      <View>
        <Prompt text={'New here?'} />
        <Prompt text={'Create an account'} />
      </View>
      <View>
        <Prompt
          text={
            'By creating an account, I agree with The Terms of Service and Privacy Policy'
          }
        />
      </View>
      <View>
        <Prompt text={'Already have an account'} />
        <Prompt text={'Sign in'} />
        <TextInputR
          label="Email"
          value={'text'}
          onChangeText={(text) => console.log(text)}
        />
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
