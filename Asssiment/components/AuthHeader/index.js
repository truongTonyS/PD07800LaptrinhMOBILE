import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

const AuthHeader = ({title, onBackPress}) =>{
    return(
    <View style = {styles.container}>
    <Pressable onPress={onBackPress}>
        <Image style = {styles.iconBack}
        source={require('../../assets/auth_back.png')}></Image>
    </Pressable>
    <Text style ={styles.title}>{title}</Text>
    </View>
);
};
export default AuthHeader;