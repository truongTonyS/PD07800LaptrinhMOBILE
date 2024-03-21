import React, { useEffect, useRef, useState } from "react";
import { Animated, View, Button } from "react-native";

const Ex1 = () => {
    const animatedValue = useRef(new Animated.ValueXY({
        x:100,
        y:100,
    })).current;
    const [movingUp, setMovingUp] = useState(true);

    useEffect(() => {
        Animated.timing(animatedValue,{
            toValue: { x: 100, y: movingUp ? 100 : 200 }, // Thay đổi giá trị y tùy thuộc vào trạng thái của movingUp
            duration:200,
            useNativeDriver: false,
        }).start();
    }, [animatedValue, movingUp]);

    const handlePress = () => {
        setMovingUp(prevMovingUp => !prevMovingUp); // Đảo ngược giá trị của movingUp khi nhấn nút
    };

    return(
        <View style={{ alignItems: 'center' , padding:20}}>
            <Button onPress={handlePress} title={movingUp ? 'Move Down' : 'Move Up'} />
            <Animated.View
                style={{
                    marginRight:90,
                    width:100,
                    height:100,
                    marginTop: animatedValue.y,
                    marginLeft: animatedValue.x,
                    backgroundColor: '#19b5fe',
                }}
            ></Animated.View>
        </View>
    );
}

export default Ex1;
