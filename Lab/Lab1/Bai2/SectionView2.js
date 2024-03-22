import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const SectionView2 = ({ title, data }) => {
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
      <Text>Tên khách sạn</Text>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text>Giờ mở cửa</Text>
      <Text style={styles.cardTitle}>{item.time}</Text>
      <Text>Địa điểm</Text>
      <Text style={styles.cardTitle}>{item.address}</Text>
      <TouchableOpacity style={styles.nutBam}>
        <Text style={styles.txt}>Chi tiết</Text>
      </TouchableOpacity>
    </View>
  ));
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#ffffff",
    marginTop: -20,
    borderRadius: 20,
  },
  nutBam: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 0,
    height: 40,
  },
  txt: {
    color: "yellow",
    alignSelf: "center",
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
    marginBottom: 5,
    marginTop: 2,
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
});

export default SectionView2;