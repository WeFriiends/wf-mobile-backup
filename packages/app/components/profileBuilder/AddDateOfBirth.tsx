import { Button, StyleSheet, Text } from 'react-native'
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'
import { useEffect, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import Data from '../Data'
import { Profile } from 'app/types/Profile'
import Prompt from '../Prompt'
import React from 'react'
import { Step } from 'app/types/Step'
import { View } from 'dripsy'

type AddDateOfBirthProps = {
  step: Step
  navigateToNextStep: any
}

const AddDateOfBirth = (props: AddDateOfBirthProps) => {
  const [dateOfBirth, setDateOfBirth] = useState<string>()
  const [profile, setProfile] = useState<Profile>()
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)

  const onChange = (event: DateTimePickerEvent, selectedDate: Date) => {
    const currentDate = selectedDate
    setDate(currentDate)
  }

  useEffect(() => {
    getDateOfBirth()
  }, [])

  const getDateOfBirth = async () => {
    const profile: Profile = await JSON.parse(
      (await AsyncStorage.getItem('profile')) as string
    )
    if (profile) {
      setProfile(profile)
      setDateOfBirth(profile.dateOfBirth)
    }
  }

  const handleInput = (action: string) => {
    if (action === 'next') {
      if (dateOfBirth !== '') {
        handlePress(action)
      } else {
        setErrorMessage('Field cannot be empty')
      }
    } else if (action === 'prev') {
      if (dateOfBirth !== profile?.dateOfBirth) {
        handlePress(action)
      } else {
        props.navigateToNextStep(action)
      }
    }
  }

  const handlePress = (action: string) => {
    setDateOfBirth('')
    props.navigateToNextStep(action)
  }

  return (
    <View>
      <View>
        <Prompt text={props.step.prompt} />
      </View>
      <View>
        <Data data={props.step.data} />
      </View>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode="date"
        display="spinner"
        onChange={onChange}
        textColor="black"
      />
      <Button title="Next" onPress={() => handleInput('next')} />
      <Button title="Prev" onPress={() => handleInput('prev')} />
    </View>
  )
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
})

export default AddDateOfBirth
