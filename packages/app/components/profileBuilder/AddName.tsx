import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native'
import { useEffect, useState } from 'react'

import Data from '../Data'
import { Profile } from 'app/types/Profile'
import Prompt from '../Prompt'
import { Step } from 'app/types/Step'
import { View } from 'dripsy'

type AddNameProps = {
  step: Step
  navigateToNextStep: any
}

const AddName = (props: AddNameProps) => {
  const [name, setName] = useState<string>('')
  const [profile, setProfile] = useState<Profile>()
  const [errorMessage, setErrorMessage] = useState<string>()
  const [isInputValidated, setIsInputValidated] = useState<boolean>(false)

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = async () => {}

  const handleInput = (action: string) => {
    if (name !== '') {
      handlePress(action)
    } else {
      setErrorMessage('Field cannot be empty')
    }
  }

  const handlePress = (action: string) => {
    if (profile && name !== profile?.name) {
      // edit name
    } else if (!profile) {
      //save name to db
    }
    setName('')
    props.navigateToNextStep(action)
  }

  return (
    <View sx={{ mt: 4, alignItems: 'center' }}>
      <Prompt text={props.step.prompt} />
      <View>
        <Data data={props.step.data} />
      </View>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <TextInput
        value={name || ''}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        onChangeText={(newValue) => {
          if (newValue.length > 0) {
            setIsInputValidated(true)
          } else {
            setIsInputValidated(false)
          }

          setName(newValue)
        }}
      />
      <TouchableOpacity
        style={isInputValidated ? styles.validatedInput : styles.button}
        onPress={() => handleInput('next')}
      >
        <Text style={isInputValidated ? styles.validatedText : styles.btnText}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFF1EC',
    height: 40,
    margin: 12,
    padding: 10,
    width: 300,
    borderRadius: 5,
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