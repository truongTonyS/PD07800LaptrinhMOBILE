import React, { useState } from "react";
import { styles } from "./styles";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";

const FavoriteProduct = ({id,title, price, image}) =>{
 

  return(
        <Pressable style={{ flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        marginBottom:20,}}>
        <Image style={styles.image} source={{ uri: image }} />
          <View> 
          <Text style={styles.text}>{price}</Text>
          <Text style={styles.text}>{title}</Text>
          </View>
          <Image style={{height:30,width:30}}
          source={require('../../assets/delete.png')} ></Image>
      </Pressable>
    );
};

export default React.memo(FavoriteProduct);