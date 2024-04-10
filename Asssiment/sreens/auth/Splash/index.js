import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import Button from "../../../components/Button";

const Splash = ({navigation}) =>{
    return(<View style = {styles.container}>
        <Image
        resizeMode="contain"
        style={styles.img}
        source={require('../../../assets/Ellipse.png')}
        ></Image>
        <Text style = {styles.title}>Chào Mừng Đến với chúng tôi</Text>
        

        <Button 
        onPress={()=>navigation.navigate('SignUp')}
        title= "Đăng ký "></Button>
        <Pressable  onPress={() => navigation.navigate('SignIn')}>
            <Text style = {styles.footerText}>Đăng Nhập</Text>
        </Pressable>
    </View>
);
};
export default Splash;