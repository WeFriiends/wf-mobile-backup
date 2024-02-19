import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'

import Data from '../Data'
import LockOrientation from '../../lib/utils/LockOrientation'
import Prompt from '../Prompt'
import { Step } from 'app/types/Step'
import { TextInput } from 'react-native-paper'
import { View } from 'dripsy'

type AddNameProps = {
  name: string | undefined
  step: Step
  navigateToNextStep: (action: string) => void
  saveInput: (value: string, action: string) => void
}

const AddName = (props: AddNameProps) => {
  const [name, setName] = useState<string | undefined>(props.name)
  const [initialName, setInitialName] = useState<string | undefined>(props.name)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [isInputValidated, setIsInputValidated] = useState<boolean>(false)
  const [orientation, setOrientation] = useState<number>(1)

  //(/^[a-zA-Z\u00C0-\u00FF\u0100-\u017F\u0180-\u024F ']+(?:-[a-zA-Z\u00C0-\u00FF\u0100-\u017F\u0180-\u024F ']+){0,14}$/
//.test(value))
  
  useEffect(() => {
    if (name) {
      setIsInputValidated(true)
    }
    getOrientation()
  }, [])

  const getOrientation = async () => {
    const orientation = await LockOrientation()
    setOrientation(orientation)
  }

  const handleInput = (action: string) => {
    if (name) {
      handlePress(action)
      setErrorMessage('')
    } else {
      setErrorMessage('Field cannot be empty')
    }
  }

  const handlePress = async (action: string) => {
    if (initialName !== name) {
      props.saveInput(name as string, action)
    } else {
      props.navigateToNextStep(action)
    }
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
