import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC, memo} from 'react';
import {UserType} from './Main';

type HeaderType = {
  user?: UserType;
};

const Header: FC<HeaderType> = memo(props => {
  console.log('Re-render header');
  const {user} = props;
  return (
    <View
      style={{
        height: 100,
        backgroundColor: 'white',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 1,
      }}>
      <Image
        source={{uri: user?.avatar}}
        resizeMode="center"
        style={{width: 50, height: 50, borderRadius: 50}}
      />
      <View style={{marginStart: 10}}>
        <Text>Chào Ngày Mới </Text>
        <Text style={{color: 'black'}}>{user?.name}</Text>
      </View>
    </View>
  );
});

export default Header;

const styles = StyleSheet.create({});