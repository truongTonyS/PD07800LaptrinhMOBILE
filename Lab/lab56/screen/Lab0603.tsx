import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useSignUpMutation} from '../api/pokemonApi';

const Lab0603 = () => {
  const [signUp, result] = useSignUpMutation();
  console.log(result);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'Other', value: 'other'},
  ]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = () => {
    if (!age || !name || !email || !password || !value) {
      Alert.alert('Please complete all fields');
      return;
    }

    signUp({
      name,
      age: +age,
      email,
      password,
      gender: value,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Form Builder Basic Demo</Text>

      <View
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          columnGap: 12,
        }}>
        <View style={{flex: 1}}>
          <Text style={styles.label}>Name *</Text>
          <TextInput
            style={styles.inputField}
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={{width: 100}}>
          <Text style={styles.label}>User's Age *</Text>
          <TextInput
            style={styles.inputField}
            value={age}
            onChangeText={setAge}
          />
        </View>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Email *</Text>
        <TextInput
          style={styles.inputField}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Password *</Text>
        <TextInput
          style={styles.inputField}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Gender *</Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Select gender"
        />
      </View>

      <TouchableOpacity style={styles.submitBtn} onPress={handlePress}>
        <Text style={{color: '#fff', fontSize: 18, textAlign: 'center'}}>
          Submit
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    color: '#000',
    marginBottom: 32,
  },
  inputField: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  label: {
    color: '#000',
    marginBottom: 8,
  },
  formGroup: {
    marginTop: 12,
    width: '100%',
  },
  submitBtn: {
    backgroundColor: '#00b5d8',
    marginTop: 24,
    width: '100%',
    borderRadius: 12,
    paddingVertical: 12,
  },
});

export default Lab0603;
