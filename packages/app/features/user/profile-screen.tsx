import { Text, View } from 'dripsy'
import { useEffect, useState } from 'react'

import AddDateOfBirth from '../../components/profileBuilder/AddDateOfBirth'
import AddGender from '../../components/profileBuilder/AddGender'
import AddImages from '../../components/profileBuilder/AddImages'
import AddLocation from '../../components/profileBuilder/AddLocation'
import AddName from '../../components/profileBuilder/AddName'
import AddReason from 'app/components/profileBuilder/AddReason'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Logo from 'app/public/Logo'
import { Profile } from 'app/types/Profile'
import ProfileConstants from 'app/lib/ProfileConstants'
import ProfileQuestions from 'app/lib/ProfileQuestions.json'
import { Step } from 'app/types/Step'
import { StyleSheet } from 'react-native'
import axios from 'axios'

type Key = keyof typeof ProfileQuestions

const ProfileScreen = () => {
  const [profile, setProfile] = useState<Profile>()
  const [currentStep, setCurrentStep] = useState<Step>(
    ProfileQuestions[ProfileConstants.INITIAL_STEP_ID as Key]
  )
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    getProfile()
  }, [currentStep])

  const getProfile = async () => {
    const token = await AsyncStorage.getItem('user')

    if (token) {
      try {
        const response: any = await axios.get(
          'https://blushing-pajamas-bear.cyclic.app/api/profile',
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          }
        )
       
        setProfile(response.data)
        setIsLoading(false)
      } catch (e) {
        console.log(e)
      }
    }
  }

  const saveInput = async (value: string | {}, action: string) => {
    const profileCopy: Profile = profile as Profile
    let profileToSave = { ...profileCopy, [currentStep.key]: value }
    setProfile(profileToSave)
    getNextQuestion(action)
  }

  const navigateToPreviousStep = (action: string) => {
    getNextQuestion(action)
  }

  const getNextQuestion = (action: string) => {
    let nextStepId: string | null
    if (action === 'next') {
      nextStepId = currentStep.next
    } else {
      nextStepId = currentStep.prev
        ? currentStep.prev
        : ProfileConstants.INITIAL_STEP_ID //'c97c14ce-5936-428f-95b0-1347fa2bd056'
    }

    if (nextStepId) {
      const nextStep: Step = ProfileQuestions[nextStepId as Key]
      setCurrentStep(nextStep)
    }
  }

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
      {isLoading ? (
        <Text>Loading</Text>
      ) : (
        <View style={{ marginTop: 0 }}>
          {currentStep.key === 'name' ? (
            <AddName
              step={currentStep}
              navigateToNextStep={getNextQuestion}
              name={profile?.name}
            />
          ) : null}
          {currentStep.key === 'gender' ? (
            <AddGender
              step={currentStep}
              saveInput={saveInput}
              navigateToPreviousStep={navigateToPreviousStep}
            />
          ) : null}
          {currentStep.key === 'dateOfBirth' ? (
            <AddDateOfBirth
              step={currentStep}
              navigateToNextStep={getNextQuestion}
              dob={profile?.dob}
              navigateToPreviousStep={navigateToPreviousStep}
            />
          ) : null}
          {currentStep.key === 'location' ? (
            <AddLocation
              step={currentStep}
              saveInput={saveInput}
              navigateToPreviousStep={navigateToPreviousStep}
            />
          ) : null}
          {currentStep.key === 'purpose' ? (
            <AddReason
              step={currentStep}
              saveInput={saveInput}
              navigateToPreviousStep={navigateToPreviousStep}
            />
          ) : null}
          {currentStep.key === 'images' ? (
            <AddImages
              step={currentStep}
              saveInput={saveInput}
              navigateToPreviousStep={navigateToPreviousStep}
            />
          ) : null}
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({})

export default ProfileScreen
