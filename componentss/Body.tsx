import {
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, memo, useState} from 'react';
import {UserType} from './Main';

type BodyType = {
  onUpdateInfor: (user: UserType) => void;
  onClickChangeBgFooter: () => void;
};

const Body: FC<BodyType> = memo(props => {
  const {onClickChangeBgFooter, onUpdateInfor} = props;
  const [name, setName] = useState('');
  const [linkImage, setLinkImage] = useState('');

  const handleChangeInfo = () => {
    if (name.length > 0 && linkImage.length > 0) {
      onUpdateInfor({name, avatar: linkImage});
      ToastAndroid.show('Update information successfully', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Please enter your informations', ToastAndroid.SHORT);
    }
  };
  const handleChangeFooter = () => {
    onClickChangeBgFooter();
  };

  return (
    <View style={{flex: 1, marginHorizontal: 15, marginVertical: 15}}>
      <View>
        <Text style={{color: 'black', marginTop: 20}}>Your Name</Text>
        <TextInput
          style={{
            borderRadius: 8,
            backgroundColor: '#D1FAF0',
            padding: 13,
            marginTop: 3,
            marginBottom: 10,
            paddingHorizontal: 15,
          }}
          placeholder="Your Name"
          onChangeText={txt => setName(txt)}
        />
      </View>
      <View style={{marginTop: 10}}>
        <Text style={{color: 'black'}}> Address avatar</Text>
        <TextInput
          style={{
            borderRadius: 8,
            backgroundColor: '#D1FAF0',
            padding: 13,
            paddingHorizontal: 15,
            marginTop: 3,
            marginBottom: 10,
          }}
          placeholder="Enter your address avatar"
          onChangeText={txt => setLinkImage(txt)}
        />
      </View>
      <TouchableOpacity
        onPress={handleChangeInfo}
        style={{
          backgroundColor: '#66D7EE',
          height: 45,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 10,
          marginTop: 20,
        }}>
        <Text style={{color: 'white'}}>Update infor</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleChangeFooter}
        style={{
          backgroundColor: '#66D7EE',
          height: 45,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white'}}>Change color footer</Text>
      </TouchableOpacity>
    </View>
  );
});

export default Body;

const styles = StyleSheet.create({});