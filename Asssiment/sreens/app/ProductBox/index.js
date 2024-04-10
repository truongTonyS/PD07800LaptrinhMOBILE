import React, { useState } from "react";
import { Image, ImageBackground, Pressable, Text, TouchableOpacity, View } from "react-native";
import Button from "../../../components/Button";
import { styles } from "./styles";
import AuthHeader from "../../../components/AuthHeader";
import { products } from "../../../components/data/products";

const ProductBox = ({ title, price, image, navigation, route, toggleFavorite }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const { id } = route.params;
  const product = products.find((item) => item.id === id);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <Pressable>
      <ImageBackground source={{ uri: product.image }} style={styles.view1}>
        <AuthHeader onBackPress={onBack} />
      </ImageBackground>
      <View style={styles.view2}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>
      <View style={styles.view3}>
        <TouchableOpacity onPress={toggleBookmark}>
          <Image
            source={
              isBookmarked
                ? require("../../../assets/tabs/bookmark_active.png")
                : require("../../../assets/tabs/bookmark.png")
            }
          />
        </TouchableOpacity>
        <Button title={"Contact Seller"}></Button>
      </View>
    </Pressable>
  );
};

export default React.memo(ProductBox);