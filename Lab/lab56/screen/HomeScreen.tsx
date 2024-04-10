import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../redux/store';
import {
  decrement,
  increment,
  multiply,
  resetCounter,
} from '../redux/counterSlice';

const HomeScreen = ({navigation}: any) => {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch: AppDispatch = useDispatch();

  const onIncreaseCounter = () => dispatch(increment());
  const onDecreaseCounter = () => dispatch(decrement());
  const onMultiplyCounter = () => dispatch(multiply(3));
  const onResetCounter = () => dispatch(resetCounter());

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{counter.value}</Text>

      <TouchableOpacity style={styles.button} onPress={onIncreaseCounter}>
        <Text style={{color: '#fff'}}>Tăng biến đếm</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onDecreaseCounter}>
        <Text style={{color: '#fff'}}>Giảm biến đếm</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onMultiplyCounter}>
        <Text style={{color: '#fff'}}>Mũ bình phương biến đếm</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onResetCounter}>
        <Text style={{color: '#fff'}}>Reset biến đếm</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Lab0602')}>
        <Text style={{color: '#fff'}}>Lab 06.02</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Lab0603')}>
        <Text style={{color: '#fff'}}>Lab 06.03</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    marginBottom: 24,
    color: '#000',
  },
  button: {
    backgroundColor: '#ffa700',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 12,
    marginBottom: 12,
  },
});

export default HomeScreen;
