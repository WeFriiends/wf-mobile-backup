import * as GeoLocation from 'expo-location';

import {
    Button,
    Platform,
    StyleSheet,
    Text,
    View
} from "react-native";
import {
    useEffect,
    useRef,
    useState
} from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';
import CountryPicker from 'react-native-country-picker-modal';
import { Location } from "app/types/Location";
import { Profile } from "app/types/Profile";
import React from "react";
import { Step } from "app/types/Step";

type AddLocationProps = {
    step: Step,
    saveInput: any,
    navigateToPreviousStep: any
}

const AddLocation = (props: AddLocationProps) => {
    const [initialLocation, setInitialLocation] = useState<Location>();
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [countryCode, setCountryCode] = useState<string>('');
    const [country, setCountry] = useState<any>();
    const countryRef = useRef();
    countryRef.current = country;
    const [location, setLocation] = useState<any>();

    // useEffect(() => {
    //     getProfile();
    // }, []);

    const [errorMsg, setErrorMsg] = useState<string>();
    useEffect(() => {
        (async () => {
          
          let { status } = await GeoLocation.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await GeoLocation.getCurrentPositionAsync({});
          setLocation(location);
        })();
      }, []);
    
      let text = 'Waiting..';
      if (errorMsg) {
        text = errorMsg;
      } else if (location) {
        text = JSON.stringify(location);
      }

    const getProfile = async() => {
        const profile: Profile = await JSON.parse(await AsyncStorage.getItem('profile')as string);
        if (profile.location) {
            const location: any = profile.location;
            setInitialLocation(location);
            setCountryCode(location.countryCode);
        }
    }

    const onSelect = (country) => {
        setCountryCode(country.cca2);
        setCountry(country);
      }

    const handlePress = (action: string) => {
        const country  = countryRef.current;
        const locationToSave: Location = {
            countryCode: '091', 
            countryName: 'Canada'
        } 
       props.saveInput(locationToSave, action);
    }
    
    const handleInput = (action: string) => {
        if (action === 'next') { 
            if (countryCode !== "") {
                handlePress(action);
            } else {
                setErrorMessage("Field cannot be empty");
            }
        } else if (action === 'prev') {
            if (countryCode === '' || (initialLocation && initialLocation.countryCode === countryCode)) {
                props.navigateToPreviousStep(action);
            } else {
                handlePress(action);
            }
        }
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
            <View>
                <Text>{text}</Text>
            </View>
            <CountryPicker
                countryCode={countryCode as "AF"}
                withFilter={true}
                withFlag={true}
                withCountryNameButton={true}
                withAlphaFilter={true}
                onSelect={onSelect}
                visible={false}
            />
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

export default AddLocation;