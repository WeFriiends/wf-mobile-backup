import * as ImagePicker from 'expo-image-picker';

import { Button, Image, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
    Text,
    View
} from "dripsy";

import { Step } from "app/types/Step";
import { TouchableOpacity } from "react-native";

type AddImagesProps = {
    step: Step,
    saveInput: any,
    navigateToPreviousStep: any
}

const AddImages = (props: AddImagesProps) => {
    
    const [images, setImages] = useState<any>([]);
    const [status, requestPermission] = ImagePicker.useCameraPermissions();

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          allowsMultipleSelection: true,
          quality: 1,
        });
    
        if (!result.cancelled) {
          setImages(result.selected)
        }
      };
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
    
        {
            
        // <View>
        //     <Text>
        //         {props.step.data}
        //     </Text>
        //     <View style={{flexDirection: 'row'}}>
        //     <View style={{height: 200, width: '30%', borderWidth: 1, backgroundColor: "pink"}}>
        //        <Text>+</Text>
        //     </View>
        //     <View style={{height: 200, width: '30%', marginRight: 5,marginLeft: 5, borderWidth: 1, backgroundColor: "pink"}}>
        //         <TouchableOpacity><Text>+</Text></TouchableOpacity>
        //     </View>
        //     <View style={{height: 200, width: '30%', borderWidth: 1, backgroundColor: "pink"}}>
        //         <Text>+</Text>
        //     </View>
        //     </View>
           

           
            
        // </View>
    }
    </View>
    )
}

export default AddImages;