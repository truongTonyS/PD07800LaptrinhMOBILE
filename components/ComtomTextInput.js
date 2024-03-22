import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const TextInputDemo = (props) => {
  return (
    <TextInput
      {...props}
      style={st.txtInput}
      placeholderTextColor={props.placeholderTextColor || "bule"}
    />
  );
};

export default TextInputDemo;

const st = StyleSheet.create({
  txtInput: {
    padding: 10,
    margin: 10,
  },
});