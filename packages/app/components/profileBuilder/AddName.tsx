import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import Data from '../Data'
import { Profile } from 'app/types/Profile'
import Prompt from '../Prompt'
import { Step } from 'app/types/Step'
import { TextInput } from 'react-native-paper'
import { View } from 'dripsy'
import axios from 'axios'

type AddNameProps = {
  name: string | undefined
  step: Step
  navigateToNextStep: any
}

const AddName = (props: AddNameProps) => {
  const [name, setName] = useState<string | undefined>(props.name)
  const [initialName, setInitialName] = useState<string | undefined>(props.name)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [isInputValidated, setIsInputValidated] = useState<boolean>(false)
  const [token, setToken] = useState<any>()

  useEffect(() => {
    getToken()
  })

  const getToken = async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      setToken(token)
    }
  }

  const handleInput = (action: string) => {
    console.log('buton clicked')
    console.log('name ', name)
    if (name) {
      handlePress(action)
      setErrorMessage('')
    } else {
      setErrorMessage('Field cannot be empty')
    }
  }

  const handlePress = async (action: string) => {
    console.log('initial name ', initialName)
    console.log(initialName === name)
    if (initialName !== name) {
      console.log('here')
      try {
        await axios.post(
          'https://blushing-pajamas-bear.cyclic.app/api/profile/name',
          {
            name,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          }
        )
      } catch (e) {
        console.log(e)
      }
    }

    props.navigateToNextStep(action)
  }

  return (
    <ScrollView
      automaticallyAdjustKeyboardInsets={true}
      keyboardShouldPersistTaps="always"
    >
      <View sx={{ alignItems: 'center', flex: 1 }}>
        <View sx={{ mt: 5 }}>
          <Prompt text={props.step.prompt} />
        </View>

        <View sx={{ mt: 4, mb: 4 }}>
          <Data data={props.step.data} />
        </View>
        <TextInput
          value={name}
          //  autoCapitalize="none"
          //  autoCorrect={false}
          mode="outlined"
          outlineColor="#FFF1EC"
          activeOutlineColor="salmon"
          style={styles.input}
          label={'Name'}
          focusable
          onChangeText={(newValue) => {
            if (newValue.length > 0) {
              setIsInputValidated(true)
            } else {
              setIsInputValidated(false)
            }

            setName(newValue)
          }}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <View sx={{ mt: 5 }}>
          <TouchableOpacity
            style={isInputValidated ? styles.validatedInput : styles.button}
            onPress={() => handleInput('next')}
          >
            <Text
              style={isInputValidated ? styles.validatedText : styles.btnText}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 4,
  },
  input: {
    // backgroundColor: '#FFF1EC',
    // height: 40,
    // margin: 12,
    // padding: 10,
    width: 300,
    // borderRadius: 5,
    //---------------------
    backgroundColor: '#FFF1EC',
    height: 40,
    textAlign: 'center',
    //  margin: 12,
    //  padding: 10,
    //  width: 160,
    borderRadius: 5,
    //   borderColor: "red",
    //   borderWidth: 2
  },
  button: {
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'salmon',
    width: 300,
    height: 40,
    alignItems: 'center',
    padding: 5,
  },
  btnText: {
    fontSize: 18,
    color: 'salmon',
  },
  validatedText: {
    fontSize: 18,
    color: 'white',
  },
  validatedInput: {
    backgroundColor: 'salmon',
    text: 'white',
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'salmon',
    width: 300,
    height: 40,
    alignItems: 'center',
    padding: 5,
  },
})

export default AddName
