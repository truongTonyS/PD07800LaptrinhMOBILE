import { Button, Text, View } from 'react-native'
import {useState, useRef} from 'react'


export default function Time(){
    const [count, setCount] = useState(30)
    let timeID = useRef()
    const handelStart =() => {
       timeID.current = setInterval(() => {
            setCount(prevCount=>prevCount-1)
        }, 1000);
        console.log('handelStart : => ' +timeID.current);
    }

    const handelStop =()=> {
        clearInterval(timeID.current)
        console.log('handelStop : => ' +timeID.current);
    }
    return (
        <View style={{marginTop:100}}>
          <Text>{count}</Text>
          <Button title='Start' onPress={handelStart}/>
          <Button title='Stop' onPress={handelStop}/>
        </View>
      )
}
