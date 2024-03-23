import React,{useState} from "react";
import { Text,View,Button, Image } from "react-native";
import ImagePicker from 'react-native-image-picker';

const ChonAnh =()=>{
    const [selectedImage, setSelectedImage] = useState(null);
    const pickerImage = async () =>{
        let kq = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1,
        });
        console.log(kq);
        if(!kq.canceled){
            setSelectedImage(kq.assets[0].uri);
        }
    };
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Button title="chon anh tu thu vien"
            onPress={pickerImage}
            />
            <Image source={{uri: selectedImage}}
            style={{width:200, height: 200}}/>
        </View>
    );
}
export default ChonAnh;