import { Button, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'

import Data from '../Data'
import Prompt from '../Prompt'
import SVGFemaleComponent from '../../lib/assets/FemaleSVG'
import SVGMaleComponent from '../../lib/assets/MaleSVG'
import { Step } from 'app/types/Step'
import { View } from 'dripsy'

type AddGenderProps = {
  step: Step
  saveInput: (value: string, action: string) => void
  navigateToPreviousStep: (action: string) => void
  gender: string | undefined
}

const DEFAULT_COLOR = '#F2F4F5'
const SELECTED_COLOR = '#FFF1EC'

const AddGender = (props: AddGenderProps) => {
  const [gender, setGender] = useState<string | undefined>(props.gender)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [isInputValidated, setIsInputValidated] = useState<boolean>(false)
  const [selectedColor, setSelectedColor] = useState<string>('')

  useEffect(() => {
    if (gender) {
      setSelectedColor(SELECTED_COLOR)
      setIsInputValidated(true)
    }
  }, [])

  const handlePress = async (action: string) => {
    if (action === 'next') {
      if (!isInputValidated) {
        setErrorMessage('Gender is a mandatory field')
      } else {
        props.saveInput(gender as string, action)
      }
    } else {
      props.navigateToPreviousStep('prev')
    }
  }

  const handleChange = (gender: string) => {
    gender ? setSelectedColor(SELECTED_COLOR) : setSelectedColor('')
    setGender(gender)
    setIsInputValidated(true)
    setErrorMessage('')
  }

  return (
    <View sx={{ alignItems: 'center' }}>
      <View>
        <Button title="Prev" onPress={() => handlePress('prev')} />
      </View>
      <View sx={{ mt: 3 }}>
        <Prompt text={props.step.prompt} />
      </View>
      <View sx={{ mt: 3, mb: 3 }}>
        <Data data={props.step.data} />
      </View>
      <View
        sx={{ mt: 2, flexDirection: 'row', marginStart: 50, marginEnd: 50 }}
      >
        <View sx={{ flex: 1, padding: 2, alignItems: 'center' }}>
          <TouchableOpacity onPress={() => handleChange('F')}>
            <SVGFemaleComponent color={gender === "F" ? selectedColor : DEFAULT_COLOR} />
            <View sx={{ alignItems: 'center' }}>
              <Text>Female</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View sx={{ flex: 1, padding: 2 }}>
          <TouchableOpacity onPress={() => handleChange('M')}>
            <SVGMaleComponent color={gender === "M"? selectedColor : DEFAULT_COLOR}/>
            <View sx={{ alignItems: 'center' }}>
              <Text>Male</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View>{errorMessage ? <Text>{errorMessage}</Text> : null}</View>
      <View sx={{ mt: 5 }}>
        <TouchableOpacity
          style={isInputValidated ? styles.validatedInput : styles.button}
          onPress={() => handlePress('next')}
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
  //  text: 'white',
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

export default AddGender
