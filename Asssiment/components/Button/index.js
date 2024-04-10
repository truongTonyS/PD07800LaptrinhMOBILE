import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Button = ({title,onPress}) => {
    const handlePress = () =>{
        console.log('Test event button ');
    };
    return(
        <TouchableOpacity
          onPress={onPress} style = {styles.container} >
            <Text style={[styles.textContent]}>{title}</Text>
        </TouchableOpacity>

    );
};

export default React.memo(Button);