import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./style";
const index = ({ uri_img, title }) => {
  return (
    <View style={styles.khung}>
      <Image source={{ uri: uri_img }} style={{ width: "100%", height: 100 }} />
    </View>
  );
};

export default index;