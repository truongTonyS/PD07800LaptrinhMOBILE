import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomHeader from "./styles";

const Bai1 = () => {
  return (
    <View style={styles.container}>
      <CustomHeader title="Header 1" leftIcon="arrow-back" rightIcon="people" />
      <CustomHeader title="Trang chủ" leftIcon="arrow-back" />
      <CustomHeader title="" leftIcon="arrow-back" />
    </View>
  );
};

export default Bai1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});