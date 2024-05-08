import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'

import Data from '../Data'
import ErrorIndicator from '../ErrorIndicator'
import Prompt from '../Prompt'
import { Step } from 'app/types/Step'
import { TextInput } from 'react-native-paper'
import { View } from 'dripsy'
import LockOrientation from '../../lib/utils/LockOrientation'

type AddNameProps = {
  name: string | undefined
  step: Step
  navigateToNextStep: (action: string) => void
  saveInput: (value: string, action: string) => void
}

const WRONG_INPUT_ERROR_MESSAGE =
  "Invalid name. Please, don't use numbers, special characters or rude words"
const INPUT_LENGTH_ERROR_MESSAGE =
  'This field must contain between 2 and 15 characters'

const NAME_REGEX: RegExp = /^\s*(?:(?!\s\s)[\p{L}'-]{2,}|[\p{L}'-]\s[\p{L}'-]+)(?:\s[\p{L}'-]+)?\s*$/u

// /^\s*(?:(?!\s\s)[\p{L}'-]{2,}(?:\s[\p{L}'-]+)?){1,15}\s*$/u

const AddName = (props: AddNameProps) => {
  const [name, setName] = useState<string>('')
  const [initialName, setInitialName] = useState<string | undefined>(props.name)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [isInputValidated, setIsInputValidated] = useState<boolean>(false)
  const [orientation, setOrientation] = useState<number>(1)


  //(/^[a-zA-Z\u00C0-\u00FF\u0100-\u017F\u0180-\u024F ']+(?:-[a-zA-Z\u00C0-\u00FF\u0100-\u017F\u0180-\u024F ']+){0,14}$/
//.test(value))
  
  useEffect(() => {
    if (props.name) {
      setName(props.name)
      setIsInputValidated(true)
    }
    getOrientation()
  }, [props.name])

  const getOrientation = async () => {
    const orientation = await LockOrientation()
    setOrientation(orientation)
  }
  
  const onSubmit = (action: string) => {
    if (NAME_REGEX.test(name.trim() as string)) {
      handlePress(action)
      setErrorMessage('')
    } else {
      setErrorMessage(WRONG_INPUT_ERROR_MESSAGE)
    }
  }

  const handlePress = async (action: string) => {
    if (initialName !== name.trim() && name) {
      props.saveInput(name.trim() as string, action)
    } else {
      props.navigateToNextStep(action)
    }
  }

  const handleInput = (value: string) => {
    if (value.trim().length < 2 ) {
      setIsInputValidated(false)
      setErrorMessage(INPUT_LENGTH_ERROR_MESSAGE)
    } else if (NAME_REGEX.test(value.trim())) {
      setIsInputValidated(true)
      setErrorMessage('')
    } else {
      setIsInputValidated(false)
      setErrorMessage(WRONG_INPUT_ERROR_MESSAGE)
    }

    setName(value)
  }

  return (
    <ScrollView
      automaticallyAdjustKeyboardInsets={true}
      keyboardShouldPersistTaps="always"
    >
      <View sx={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        <View sx={{ mt: 5 }}>
          <Prompt text={props.step.prompt} />
        </View>

        <View sx={{ mt: 4, mb: 4 }}>
          <Data data={props.step.data} />
        </View>
        <View>
          <TextInput
            value={name}
            mode="outlined"
            outlineColor="#FFF1EC"
            activeOutlineColor="salmon"
            style={styles.input}
            label={'Name'}
            focusable
            maxLength={15}
            onChangeText={handleInput}
          />
        </View>
        <View style={styles.error}>
          {errorMessage ? <ErrorIndicator color={'#F1562A'} errorMessage={errorMessage} /> : null}
        </View>
        <View sx={{ mt: 5 }}>
          <TouchableOpacity
            style={ isInputValidated ? styles.validatedInput : styles.button}
            onPress={() => onSubmit('next')}
            disabled={!isInputValidated}
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
    width: 300,
    backgroundColor: '#FFF1EC',
    height: 40,
    textAlign: 'center',
    borderRadius: 5,
  },
  error: {
    width: 300,
    marginTop:5,
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
