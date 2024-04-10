import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Seperator from "../../../components/Seperator";


const Signin = ({ navigation }) => {
 

  const onSignUp = () => {
    navigation.navigate("SignUp");
  };
  const goToHome = ()=>{
    
    navigation.navigate("Tabs");
  };

  const onBack = () => {
    navigation.goBack();
  };

  return (
    
    <View style={styles.container}>
      <AuthHeader onBackPress={onBack} title="Sign In" />
      <Image
        resizeMode="contain"
        style={styles.img}
        source={require('../../../assets/Ellipse.png')}
        ></Image>
      
      <Input
        label="Email"
        placeholder="Enter your email"
      />
      <Input
        isPassword
        label="Password"
        placeholder="Enter your password"
       
      />

      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Button style={styles.button} title={"Sign In"}  onPress={goToHome}/>
      </View>


      <Seperator text="Or sign up with" />
 

      <Text style={styles.footerText}>
        Don't have an account?
        <Text onPress={onSignUp} style={styles.footerLink}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

export default Signin;
