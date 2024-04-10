import React, {useState, useEffect} from 'react';
import {ScrollView, Text, FlatList, View} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import { categories } from '../../../components/data/categories';
import CategoryBox from '../../../components/CategoryBox';
import { products } from '../../../components/data/products';
import ProductHomeItem from '../../../components/ProductHomeItem';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const [keyword, setKeyword] = useState(false);
  const [filteredProduct, setFilteredProduct] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState();
  const navigation = useNavigation(); // Get navigation object
  console.log('key',keyword);
     
  // begin search

  useEffect(() => {
    if (selectedCategory && !keyword) {
      const updateProducts = filteredProduct.filter(product => product?.category === selectedCategory);
      setFilteredProduct(updateProducts);
    } else if (selectedCategory && keyword) {
      const updateProducts = filteredProduct.filter(product => product?.category === selectedCategory && product?.title?.toLowerCase().includes(keyword?.toLowerCase()));
      setFilteredProduct(updateProducts);
    } else if (!selectedCategory && keyword) {
      const updateProducts = products.filter(product => product?.title?.toLowerCase().includes(keyword?.toLowerCase()));
      setFilteredProduct(updateProducts);
    } else if (!keyword && !selectedCategory) {
      setFilteredProduct(products);
    }
  }, [selectedCategory, keyword]);

  const handleSearch = text => {
    if (text) {
      setKeyword(text);
    } else {
      setKeyword('');
    };
}

  const renderCategoryItem = ({item, index}) => {
    return <CategoryBox title={item?.title} image={item?.image}></CategoryBox>;
  };
 
 
  const renderProductItem = ({item}) => {
    return <ProductHomeItem {...item} navigation={navigation} ></ProductHomeItem>
  }
  return (
    <SafeAreaView>
      {/*<ScrollView style={styles.container}>*/}
        <Header
          showSearch
          onSearch={handleSearch}
          keyword={keyword}
          title="Find All You Need"
        />
        <FlatList
          showsHorizontalScrollIndicator={false}
          style={styles.list}
          horizontal
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item, index) => String(index)}
        />
        <FlatList
        style={styles.productsList}
        numColumns={2}
        data={filteredProduct}
        renderItem={renderProductItem}
        keyExtractor={item => String(item.id)}
        ListFooterComponent={<View style={{height:200}}></View>}
        ></FlatList>
        {/*</ScrollView>*/}
    </SafeAreaView>
  );
};

export default React.memo(Home);