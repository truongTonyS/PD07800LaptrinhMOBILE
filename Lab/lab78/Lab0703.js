import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId:
    '1049166289793-i6bm5g5romf2u32ftqklnvr8e2krdq3r.apps.googleusercontent.com',
});

const Lab0703 = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

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

  const onGoogleButtonOnPress = async () => {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn().catch(error => {
      console.log('Err', error);
    });

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    auth().signInWithCredential(googleCredential);
  };

  const onSignOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('Đăng xuất thành công');
        setUser();
      })
      .catch(error => {
        console.log('ERR', error);
      });

    GoogleSignin.signOut();
  };

  if (initializing) {
    return <></>;
  }

  if (!user) {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Button
            title="Đăng nhập với Google"
            onPress={onGoogleButtonOnPress}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 12}}>Xin chào {user?.email}</Text>
      <TouchableOpacity>
        <Button title="Đăng xuất" onPress={onSignOut} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});

export default Lab0703;
