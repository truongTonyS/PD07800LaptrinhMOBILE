import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const SectionView = ({ title, data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {renderSection(data)}
    </View>
  );
};

const renderSection = (data) => {
  return data.map((item, index) => (
    <View style={styles.card} key={index}>
      <Text>Địa điểm</Text>
      <Text style={styles.cardTitle}>{item.address}</Text>
      <Text>Thời gian</Text>
      <Text style={styles.cardTitle}>{item.time}</Text>
      <Text>Phương tiện di chuyển</Text>
      <Text style={styles.cardTitle}>{item.car}</Text>
      <Text>Thời gian</Text>
      <Text style={styles.cardTitle}>{item.time2}</Text>
      <Text>Hình ảnh</Text>
      <Image source={{ uri: item.image }} style={styles.image} />
    </View>
  ));
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#ffffff",
    marginBottom: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.55,
    shadowRadius: 3.84,
    elevation: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 2,
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default SectionView;