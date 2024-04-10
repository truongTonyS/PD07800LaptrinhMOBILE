import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useLazyGetPokemonByNameQuery} from '../api/pokemonApi';

const Lab0602 = () => {
  const [pokemonName, setPokemonName] = useState('');

  const [getPokemonByName, {isFetching, currentData}] =
    useLazyGetPokemonByNameQuery();

  const onChangeText = (value: string) => {
    setPokemonName(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Thông tin Pokemon {pokemonName}</Text>

      <TextInput
        placeholder="Nhập tên Pokemon"
        style={styles.inputField}
        onChangeText={onChangeText}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => getPokemonByName(pokemonName)}>
        <Text style={{color: '#fff'}}>Tìm kiếm Pokemon</Text>
      </TouchableOpacity>

      <View style={{marginTop: 24}}>
        {isFetching ? (
          <Text style={{color: '#000'}}>Loading...</Text>
        ) : (
          <Text style={{color: '#000'}}>
            {JSON.stringify(currentData?.abilities)}
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#000',
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 12,
    marginTop: 12,
    borderRadius: 12,
    width: '90%',
  },
  button: {
    backgroundColor: '#ffa700',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginTop: 24,
  },
});

export default Lab0602;
