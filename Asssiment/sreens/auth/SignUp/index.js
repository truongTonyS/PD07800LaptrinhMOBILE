import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import Seperator from "../../../components/Seperator";


const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  const onBack = () => {
    navigation.goBack();
  };

  const onSignUp = () => {
    if (!name || !email || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    } 
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    } 
    if (userExists(email)) {
      setErrorMessage("Email already exists.");
      return;
    } 
    if (!checked) {
      setErrorMessage("Please agree to the Terms & Privacy.");
      return;
    } 

    // Success - proceed with sign up
    navigation.navigate("SignIn");
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const userExists = (email) => {
    // Implement logic to check if user exists with given email
    return false; // Placeholder return value
  };

  return (
    <View style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign Up" />
        <Image
        resizeMode="contain"
        style={styles.img}
        source={require('../../../assets/Ellipse.png')}
        ></Image>
      
      <Input
        label="Name"
        placeholder="Example John"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <Input
        label="Email"
        placeholder="example@gmail.com"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <Input
        isPassword
        label="Password"
        placeholder="********"
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      {errorMessage ? (
        <Text style={[styles.error, { color: "red" }]}>{errorMessage}</Text>
      ) : null}

      <View style={styles.checkRow}>
        <Checkbox checked={checked} onCheck={setChecked} />
        <Text style={styles.checkText}>I agree with Terms & Privacy</Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 25 }}>
        <Button style={styles.button} title={"Đăng ký"} onPress={onSignUp} />
      </View>
      
    </View>
  );
};

export default SignUp;
