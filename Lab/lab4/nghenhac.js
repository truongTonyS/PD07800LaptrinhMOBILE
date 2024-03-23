import React,{useState} from "react";
import { Audio } from "react-native-image-picker";
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
export default function NgheNhac(){
    const [sound,setSound]=useState(null);
    async function playSound(){
        const {sound} = await Audio.Sound.createAsync(
            {uri:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'}
        );
        setSound(sound);
        await sound.playAsync();
    }
    async function pauseSound(){
        if(sound){
            await sound.stopAsync();
        }
    }
    return(
        <View style={styles.container}>
            {/* <Text>vi du ve nghe nhac</Text> */}
            
                <TouchableOpacity onPress={playSound}>
                    <Text style={styles.buttons}>play</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={pauseSound}>
                    <Text style={styles.button}>pause</Text>
                </TouchableOpacity>
            
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        backgroundColor: 'fff',
    },
    title:{
        fontSize: 20,
        marginBottom: 30,
    },
    buttons:{
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        fontSize: 25,
        paddingLeft: 170,
        color:'white'

    },
    button:{
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        fontSize: 25,
        paddingLeft: 160

    }

})

// import { StyleSheet } from 'react-native';

