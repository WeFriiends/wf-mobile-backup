import {
   Button,
   Keyboard,
   StyleSheet,
   Text,
   TouchableWithoutFeedback
} from 'react-native'
import MaskInput, { Masks, useMaskedInputProps }from 'react-native-mask-input';
import React, { ReactNode } from "react";
import { enGB, registerTranslation } from 'react-native-paper-dates'
import { useEffect, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';
import Cleave from 'cleave.js/react';
import Data from '../Data'
import { DatePickerInput } from 'react-native-paper-dates';
import { Profile } from '../../types/Profile'
import Prompt from '../Prompt'
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Step } from '../../types/Step'
import { TextInput } from 'react-native-paper';
import { View } from 'dripsy'
import dayjs from 'dayjs';

registerTranslation('en-GB', enGB)

type AddDateOfBirthProps = {
  step: Step
  navigateToNextStep: any
  dob: any
}

const AddDateOfBirth = (props: AddDateOfBirthProps) => {
const [dob, setDob] = useState();
  const [profile, setProfile] = useState<Profile>()
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isValid, setIsValid] = useState(true);

  const handleDateChange = (text: string) => {
    // console.log(key, value);
    // setInputDate({...inputDate, [key]: value});
    // console.log(inputDate);
    const formattedDate = text.replace(/[^0-9]/g, '');

    // Insert '/' at appropriate positions
    if (formattedDate.length >= 2) {
      setDate(formattedDate.slice(0, 2) + (formattedDate.length >= 4 ? '/' : '') + formattedDate.slice(2, 4) + (formattedDate.length >= 6 ? '/' : '') + formattedDate.slice(4, 8));
    } else {
      setDate(formattedDate);
    }

  };
  interface Props {
    children?: ReactNode
    // any props that come into the component
}
  const DismissKeyboard = ({ children }: Props) => (
    <TouchableWithoutFeedback 
    onPress={() => Keyboard.dismiss()}> {children}
    </TouchableWithoutFeedback>
    );

    const [date, setDate] = useState('');

  const handleInput = (action: string) => {
    console.log(dob)
  }

  const handlePress = (action: string) => {
    
    props.navigateToNextStep(action)
  }

  return (
    // <DismissKeyboard> 
    <View sx={{ mt: 4, alignItems: 'center' }}>
      <View>
        <Prompt text={props.step.prompt} />
      </View>
      <View>
        <Data data={props.step.data} />
        </View>
        <View>
        <Button title="Prev" onPress={() => handleInput('prev')} />
     
      </View>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
  
     
      <View
        // sx={{  flexDirection: 'row',
        // alignContent: 'space-between', mt: 4,  mb: 4, }}
       >
         
         <TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={10} // Maximum length of the date input
        value={date}
        mode="outlined"
        onChangeText={handleDateChange}
        focusable
        label={"MM/DD/YYYY"}
      />
{/* <View sx={{pr:2}}>
<TextInput
           keyboardType="numeric"
           maxLength={2}
          value={inputDate.month || ''}
          onChangeText={(newValue) => handleDateChange("month", newValue)}
          style={styles.input}
          mode="outlined"
          label={"MM"}
          focusable
        />
</View>
<View  sx={{pr:2}}>
<TextInput
           keyboardType="numeric"
           maxLength={2}
          value={inputDate.day || ''}
          onChangeText={(newValue) => handleDateChange("day", newValue)}
          placeholder="DD"
          style={styles.input}
          label={"DD"}
          mode="outlined"
          focusable
        />
</View>
   <View sx={{pr:2}}>
   <TextInput
           keyboardType="numeric"
           maxLength={4}
          value={inputDate.year||''}
          onChangeText={(newValue) => handleDateChange("year", newValue)}
          placeholder="YYYY"
          style={styles.input}
          label={"YYYY"}
          mode="outlined"
          focusable
        />
    </View>    */}
      
   
      </View>
    
     <View>
      <Button title="Next" onPress={() => handleInput('next')} />
      </View>
    </View>
   
  )
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
      },
    input: {
      backgroundColor: '#FFF1EC',
      height: 40,
      textAlign: 'center',
    //  margin: 12,
    //  padding: 10,
      width: 160,
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
   
  })
export default AddDateOfBirth
/*
function isValidDate(dateString) {
  // Check if the input is a string
  if (typeof dateString !== 'string') {
    return false;
  }

  // Parse the date using the Date object
  const dateObject = new Date(dateString);

  // Check if the parsed date is a valid date
  if (isNaN(dateObject.getTime())) {
    return false;
  }

  // Check if the input date string matches the parsed date
  // This is to handle cases where the input date string has been modified (e.g., '2021-02-30' -> '2021-03-02')
  const parsedDateString = dateObject.toISOString().split('T')[0];
  return dateString === parsedDateString;
}

// Example usage:
const inputDate = '2021-12-31';
if (isValidDate(inputDate)) {
  console.log(`${inputDate} is a valid date.`);
} else {
  console.log(`${inputDate} is not a valid date.`);
}

*/
