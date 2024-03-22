import {StyleSheet, Text, View} from 'react-native';
import React, {FC, memo} from 'react';

type FooterType = {
  timeUpdate?: string;
  backgroundColor?: string;
};

const Footer: FC<FooterType> = memo(props => {
  const {timeUpdate, backgroundColor} = props;
  return (
    <View
      style={{
        height: 100,
        backgroundColor: backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        elevation:20,
      }}>
      <Text style={{textAlign: 'center', color: 'black'}}>
        Time your update informations: {timeUpdate}
      </Text>
    </View>
  );
});

export default Footer;

const styles = StyleSheet.create({});