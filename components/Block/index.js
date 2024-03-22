import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const Block = ({ title, children }) => {
  return (
    <View style={styles.blockContainer}>
      <Text style={styles.blockTitle}>{title}</Text>
      <View style={styles.blockContent}>{children}</View>
    </View>
  );
};

export default Block;