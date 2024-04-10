import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {requestNotifications} from 'react-native-permissions';
import message from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

PushNotification?.createChannel(
  {
    channelId: 'notification-channel-id',
    channelName: 'notification-channel',
    soundName: 'default',
  },
  created => {
    console.log('Channel id', created);
  },
);

PushNotification.configure({
  onNotification(notification) {
    console.log('On click notification', notification);
  },
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
});

const Lab08 = () => {
  const requestUserPermission = async () => {
    try {
      requestNotifications(['alert', 'sound']).then(res => {
        console.log(res);
      });
    } catch (error) {
      console.log('ERR', error);
    }
  };

  useEffect(() => {
    requestUserPermission();

    const unsubscribe = message().onMessage(async remoteMsg => {
      console.log(remoteMsg);
      PushNotification.localNotification({
        channelId: 'notification-channel-id',
        title: remoteMsg?.notification?.title || remoteMsg?.data?.title || '',
        bigText: remoteMsg?.notification?.body || remoteMsg.data.body || '',
        message: remoteMsg?.notification?.body || remoteMsg.data.body || '', // for ios
        bigPictureUrl: remoteMsg?.data?.bigPictureUrl,
        largeIcon: remoteMsg?.notification?.icon || 'ic_launcher',
        smallIcon: remoteMsg?.notification?.icon || 'ic_launcher',
        ...remoteMsg,
      });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={style.container}>
      <Text>Notification</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 12,
  },
});

export default Lab08;
