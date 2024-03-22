import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";



const Lab2Screen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lab 2 CRO102</Text>
      <View style={styles.menuContainer}>      
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("lab2React")}
        >
          <Text style={styles.menuText}>Lab2</Text>
        </TouchableOpacity>      
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  menuContainer: {
    alignItems: "center",
  },
  menuItem: {
    marginBottom: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,

    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  menuText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Lab2Screen;