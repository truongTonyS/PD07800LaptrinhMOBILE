import React, { useState } from "react";
import { styles } from "./styles";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";

const ProductHomeItem = ({id,title, price, image, navigation}) =>{


  const goToProductBox = () => {
    // Chuyển trang khi người dùng ấn vào sản phẩm
    console.log('lỗi'),
    navigation.navigate("ProductBox", { id: id });
  };

  

    return(
        <Pressable onPress={goToProductBox} style={styles.container}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={{ flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'space-between'}}>
          <Text style={styles.price}>{price}</Text>

          </View>
        </View>
      </Pressable>
    );
};

export default React.memo(ProductHomeItem);