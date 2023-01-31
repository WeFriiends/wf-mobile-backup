import {
    Button,
    StyleSheet,
    Text,
    View
} from "react-native";
import{
    useEffect,
    useState
} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Profile } from "app/types/Profile";
import React from "react";
import { Step } from "app/types/Step";

type AddGenderProps = {
    step: Step,
    saveInput: any,
    navigateToPreviousStep: any
}

const AddGender = (props: AddGenderProps) => {
    
    const [gender, setGender] = useState<string>('');
    const [profile, setProfile] = useState<Profile>();
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        getGender;
    }, []);
    
    const getGender = async() => {
        const profile: Profile = await JSON.parse(await AsyncStorage.getItem('profile') as string);
        if (profile.gender) {
            setProfile(profile);
            setGender(profile.gender);
        }
    }

    const handleInput = (action: string) => {
        if (action === 'next') {
            if (gender !== "") {
                handlePress(action);
            } else {
                setErrorMessage("Field cannot be empty");
            }
        } else if (action === 'prev') {
            if (gender !== profile?.gender) {
                handlePress(action);
            } else {
                props.navigateToPreviousStep(action);
            }
        }
        
    }
    const handlePress = (action: string) => {
        setGender('');
        props.saveInput(gender, action);
    }
    
    return (
        <>
            <Text>
                {props.step.prompt}
            </Text>
            <Text>
                {props.step.data}
            </Text>
            {
                errorMessage ? 
                (<Text style={styles.error}>
                    {errorMessage}
                </Text>) : null
            }
            
            <MaterialCommunityIcons 
                name="human-female" 
                size={68} 
                color="pink"
                onPress={() => {
                    setErrorMessage('');
                    setGender('F')
                }} 
            />
            <Text>Female</Text>
            <View style={{borderColor: "black", borderWidth: 1, width: 80, borderRadius: 35}}>
            <MaterialCommunityIcons 
                name="human-male" 
                size={68} 
                color="lightblue"
                onPress={() => {
                    setErrorMessage("Only females can create an account")
                }}  
            />
            </View>
            
            <Text>Male</Text>
            <Button 
                title="Next"
                onPress={() => handleInput('next')}
            />
            <Button 
                    title="Prev"
                    onPress={() => handleInput('prev')}
            />
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'pink',
        margin: 15,
        borderRadius: 4,
        padding: 10
    },
    error: {
        color: 'red'
    }
})

export default AddGender;