import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CustomHeader = ({ title, leftIcon, rightIcon }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.iconContainer}>
        {leftIcon && <Ionicons name={leftIcon} size={24} color="black" />}
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.iconContainer}>
        {rightIcon && <Ionicons name={rightIcon} size={24} color="black" />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    height: 60,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  iconContainer: {
    width: 40,
    alignItems: "center",
  },
});

export default CustomHeader;