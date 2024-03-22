import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

export type UserType = {
  name: string;
  avatar: string;
};
const colorFooter = [
  'white',
  '#FAE6D1',
  '#FAF9D1',
  '#EBFAD1',
  '#D1FAD7',
  '#D1F3FA',
  '#FAD3D1',
];

const Main = () => {
  const [user, setUser] = useState({
    name: 'Thanh Bình',
    avatar: 'data:image/jpeg;base64,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',
  });

  const [lastTimeUpdate, setLastTimeUpdate] = useState(
    `You have't update your informations`,
  );
  const [footerColor, setFooterColor] = useState(colorFooter[0]);

  //Update informations account
  const handleUpdateInfor = useCallback((_user: UserType) => {
    setUser(_user);
  }, []);

  //Functions ramdom backgroundColor footer
  const handleRamColor = useCallback(() => {
    const numberRamdom = Math.floor(Math.random() * colorFooter.length);
    setFooterColor(colorFooter[numberRamdom]);
  }, []);

  //Informations user update , update time update
  useEffect(() => {
    const currentDate = new Date();
    const dataTime =
      currentDate.getDate() +
      '/' +
      (currentDate.getMonth() + 1) +
      '/' +
      currentDate.getFullYear() +
      '   ' +
      currentDate.getHours() +
      ' : ' +
      currentDate.getMinutes() +
      ' : ' +
      currentDate.getSeconds();
    setLastTimeUpdate(dataTime);
  }, [user]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'whitesmoke' }}>
      <Header user={user} />
      <Body
        onClickChangeBgFooter={handleRamColor}
        onUpdateInfor={handleUpdateInfor}
      />
      <Footer timeUpdate={lastTimeUpdate} backgroundColor={footerColor} />
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({});