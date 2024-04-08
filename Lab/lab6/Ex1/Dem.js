import React from "react";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { tang, giam, binhPhuong, reset } from "./redux/store";

const Dem=()=>{
   const count = useSelector(state=>state.dem);
    const dispatch= useDispatch();
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Đếm : {count}</Text>
            <Button title="Tăng" onPress={()=> dispatch(tang())}></Button>
            <Button title="Giảm" onPress={()=>dispatch(giam())}></Button>
            <Button title="Bình phương" onPress={()=>dispatch(binhPhuong())}></Button>
            <Button title="Reset" onPress={()=>dispatch(reset())}></Button>            
        </View>
    )
}

export default Dem;

