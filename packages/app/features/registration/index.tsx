import { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
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
      <View style={styles.logoView}>
        <Logo />
      </View>
      {/* <View style={styles.registerSourceStyle}>
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
      </View> */}

      <View>
        <Text>New here?</Text>
        <Text>Create an account</Text>
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
