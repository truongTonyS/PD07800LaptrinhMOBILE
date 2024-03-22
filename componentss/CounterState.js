import  {Button, Text, View} from "react-native";
import  {useState} from "react";

export default function CounterState(){
    const [counter, setCounter] = useState(0)
    const handleIncrease = () =>{
        setCounter(counter +1)
    }
    return(
        <View style={{alignContent:'center', alignItems: 'center'}}>
            <Text>{counter}

            </Text>
            <Button title="Tang" onPress={handleIncrease}></Button>
        </View>
    )
}

