import { useState } from "react";
import { Button,Text,View } from "react-native";


export default function CountDown(){
  const[count,setCount] = useState(30)
  const handleStart =() =>{

  }
  const handleStop =() =>{
    
  }
    return(
        <View> 
            <Text style={{fontSize:50, fontWeight:'bold'}}>{count}</Text>
            <Button title="Start" onPress={handleStart}></Button>
            <Button title="Stop" onPress={handleStop}></Button>
        </View>
    )
}