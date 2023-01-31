import {
    Button,
    Dimensions,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";
import { FlatList, PermissionsAndroid, View } from "react-native";
import {
    useEffect,
    useState
} from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Profile } from "app/types/Profile";
import React from "react";
import { Step }
 from "app/types/Step";

type AddReasonProps = {
    step: Step,
    saveInput: any,
    navigateToPreviousStep: any
}

const AddReason = (props: AddReasonProps) => {
    const [purpose, setPurpose] = useState<string>('');
    const [profile, setProfile] = useState<Profile>();
    const [errorMessage, setErrorMessage] = useState<string>('');
 //   const [options, setOptions] = useState<Array<string>>([]);
    const [orientation, setOrientation] = useState<string>();
    const [options,] = useState<Array<string>>(props.step.options)
    useEffect(() => {
        getProfile();
    }, []);

    const getProfile = async() => {
        const profile: any = await JSON.parse(await AsyncStorage.getItem('profile') as string);
        if (profile) {
            setProfile(profile);
            setPurpose(profile.purpose);
        }
    }

    const handlePress = (action: string) => {
        setPurpose('');
        props.saveInput(purpose, action);
    }
    
    const handleInput = (action: string) => {
        if (action === 'next') { 
            // if (purpose !== "") {
                handlePress(action);
            
        } else if (action === 'prev') {
            if (purpose !== profile?.name && purpose!== '') {
                handlePress(action);
            } else {
                props.navigateToPreviousStep(action);
            }
        }
    }

    const onLayout = () => {
        const { width, height } = Dimensions.get('window');

    if(width > height) {
     setOrientation('landscape');
    } else {
        setOrientation( 'portrait' );
    }
    }

    const addOption = (option: string) => {
        // const optionsCopy: Array<string> = [...options];
        // optionsCopy.push(option);
        // setOptions(optionsCopy);
    }

   
    return (
        <>
            <Text>
                {props.step.prompt}
            </Text>
            <Text>
                {props.step.data}
            </Text>
           {/* <View style={{
                flexDirection:'row',
                width: 320,
                backgroundColor: 'transparent',
                marginTop:40,
                paddingLeft:10,
              //  paddingRight:10,
              //  flex: 1,
                //flexShrink: 1,
                flexWrap: 'wrap',
                alignItems: 'flex-start'
            }}
            >
                {
                    options.map(item => {
                        return (
                            <View style={{borderWidth: 1, borderRadius: 25, borderColor: "green", width: 100, alignItems: "center", padding: 10, marginTop: 10, margin: 5}}>
                                 <Text>{item}</Text>
                            </View>
                           
                        )
                    })
                }
            */}
            <View>
            <FlatList
            onLayout={onLayout}
              numColumns={2}
              data={props.step.options}
              extraData={orientation}
              renderItem={({item}) => {
                return (
                    <View style={{ width: Dimensions.get('window').width / 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                  
                    }}>
                        <TouchableOpacity onPress={() => addOption(item)}>
                            <Text>{item}</Text>
                        </TouchableOpacity>
                        
                    </View>
                )
              }}
              keyExtractor={item => item}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
             
            />
            
            </View>

            {
                errorMessage ? 
                (<Text style={styles.error}>
                    {errorMessage}
                </Text>) : null
            }
            <TextInput
                style={styles.input} 
                placeholder="Is there anything you would like to add?"
                onChangeText={(newValue) =>{}}
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
        backgroundColor: 'lightgrey',
        margin: 15,
        borderRadius: 4,
        padding: 10
    },
    error: {
        color: 'red'
    }
})

export default AddReason;