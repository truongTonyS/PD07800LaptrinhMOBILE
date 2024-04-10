import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';

const Profile = () => {
  return (
    <SafeAreaView>
    <ScrollView style={styles.container}>
    <Header
    showLogout
  title="Setting"
/>

<View style={{ backgroundColor: 'white', height: '60%', justifyContent: 'space-between',marginTop:10, flexDirection: 'row', alignItems: 'center' }}>
  <View style={{ padding: 10 }}>
    <Text style={{ color: '#4267b2', fontWeight: 'bold', fontSize: 20 }}>My Listings</Text>
    <Text>Already have 10 listing</Text>
  </View>
  <Image style={{ height: 30, width: 20 }} source={require('../../../assets/next.png')} />
</View>



</ScrollView>
</SafeAreaView>
  );
};

export default React.memo(Profile);