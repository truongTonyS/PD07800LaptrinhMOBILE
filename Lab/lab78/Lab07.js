import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';

const Lab07 = ({navigation}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  };

  const onSignupWithPassword = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Tạo tài khoản thành công');
        setEmail('');
        setPassword('');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Email đã tồn tại');
          return;
        }

        console.log('Đăng ký thất bại');
        Alert.alert(error.message);
      });
  };

  const onSignInWithPassword = () => {
    if (!email || !password) {
      Alert.alert('Vui lòng nhập email và password');
      return;
    }

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Đăng nhập thành công!');
        setEmail('');
        setPassword('');
      })
      .catch(error => {
        Alert.alert(error?.message);
        console.log(error);
      });
  };

  const onLogout = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('Đăng xuất thành công');
      })
      .catch(error => {
        console.log('Đăng xuất thất bại', error);
      });
  };

  if (initializing) {
    return <></>;
  }

  if (!user) {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Nhập email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Nhập mật khẩu"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={{marginVertical: 12}}>
          <Button title="Đăng nhập" onPress={onSignInWithPassword} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Button title="Đăng ký" onPress={onSignupWithPassword} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Button
            title="Đăng nhập với Google"
            onPress={() => navigation.navigate('Lab0703')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Button title="Lab08" onPress={() => navigation.navigate('Lab08')} />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Xin chào {user.email}</Text>

      <TouchableOpacity style={{marginTop: 12}}>
        <Button title="Đăng xuất" onPress={onLogout} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  textInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  button: {
    marginBottom: 12,
  },
});

export default Lab07;
