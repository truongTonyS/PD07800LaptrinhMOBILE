// Bai1CustomHeader.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = ({ title, imageSource }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.left}>
        <Image
          style={{ width: 20, height: 20 }}
          source={require('../assets/images/left-arrows.png')}
        />
      </View>
      <View style={styles.center}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.right}>
        {imageSource && (
          <Image
            style={{ width: 20, height: 20 }}
            source={imageSource}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: '#888888',
    borderBottomWidth: 1,
  },
  left: {
    flex: 1,
    alignItems: 'flex-start',
  },
  center: {
    flex: 2,
    alignItems: 'center',
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Header;
