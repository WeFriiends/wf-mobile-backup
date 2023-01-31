import {
    useEffect,
    useState
} from 'react';

import AddDateOfBirth from 'app/components/profileBuilder/AddDateOfBirth';
import AddGender from 'app/components/profileBuilder/AddGender';
import AddImages from 'app/components/profileBuilder/AddImages';
import AddLocation from 'app/components/profileBuilder/AddLocation';
import AddName from 'app/components/profileBuilder/AddName'
import AddReason from 'app/components/profileBuilder/AddReason'
import Logo from 'app/components/Logo';
import { Profile } from 'app/types/Profile';
import ProfileConstants from 'app/lib/ProfileConstants';
import ProfileQuestions from 'app/lib/ProfileQuestions.json';
import { Step } from 'app/types/Step';
import { StyleSheet } from 'react-native';
import { View } from 'dripsy';
import { createParam } from 'solito';

const { useParam } = createParam<{ id: string }>()

const ProfileScreen = () => {
    const [id] = useParam('id');
    const [profile, setProfile] = useState<Profile>();
    const [currentStep, setCurrentStep] = useState<Step>(
    ProfileQuestions[ProfileConstants.INITIAL_STEP_ID]);

    useEffect(() => {
    // const counter = Object.keys(ProfileQuestions).length
    // setStepCounter(counter)
    }, [])

    const saveInput = async (value: string | {}, action: string) => {
        const profileCopy: Profile = profile as Profile;
        let profileToSave = { ...profileCopy, [currentStep.key]: value };
        setProfile(profileToSave);
        // await AsyncStorage.setItem('profile', JSON.stringify(profileToSave));
        getNextQuestion(action);
    }

    const navigateToPreviousStep = (action: string) => {
        getNextQuestion(action);
    }

    const getNextQuestion = (action: string) => {
        let nextStepId: string | null;
        if (action === 'next') {
            nextStepId = currentStep.next;
        } else {
        nextStepId = currentStep.prev
            ? currentStep.prev
            : 'c97c14ce-5936-428f-95b0-1347fa2bd056';
        }
        if (nextStepId) {
            setCurrentStep(ProfileQuestions[nextStepId as string])
        }
    }

    return (
        <View style={{ 
            backgroundColor: 
            'white', 
            flex: 1 
            }}
        >
            <View style={{ 
                height: 80, 
                marginTop: 30, 
                overflow: 'hidden' 
                }}
            >
                <Logo />
            </View>
            <View style={{ marginTop: 0 }}>
                {currentStep.key === 'name' ? (
                    <AddName 
                        step={currentStep} 
                        navigateToNextStep={getNextQuestion} 
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
        </View>
    )
}

const styles = StyleSheet.create({})

export default ProfileScreen;
