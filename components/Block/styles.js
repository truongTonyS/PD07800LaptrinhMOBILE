import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  blockContainer: {
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
    marginBottom: 20,
  },
  blockTitle: {
    color: "#ff5733", // Màu sắc thương hiệu
  },
  blockContent: {
    marginTop: 10,
  },
});

export default styles;