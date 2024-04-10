import React, { useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import Header from "../../../components/Header";
import FavoriteProduct from "../../../components/FavoriteProduct";
import { products } from "../../../components/data/products";

const Favorites = () => {
  const [favoriteProducts, setFavoriteProducts] = useState(products);

  // Hàm thêm/xóa sản phẩm khỏi danh sách yêu thích
  const toggleFavorite = (product) => {
    setFavoriteProducts((prevFavorites) => {
      const isFavorite = prevFavorites.some((item) => item.id === product.id);
      if (isFavorite) {
        // Loại bỏ sản phẩm khỏi danh sách yêu thích
        return prevFavorites.filter((item) => item.id !== product.id);
      } else {
        // Thêm sản phẩm vào danh sách yêu thích
        return [...prevFavorites, product];
      }
    });
  };
  return (
    <SafeAreaView>
      <Header title="Favorites" />
      <FlatList style={{padding:10,}}
        data={favoriteProducts}
        renderItem={({ item }) => (
          <FavoriteProduct
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            toggleFavorite={toggleFavorite}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default Favorites;
