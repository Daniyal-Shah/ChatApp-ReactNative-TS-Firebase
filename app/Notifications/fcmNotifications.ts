/* eslint-disable @typescript-eslint/no-unused-vars */
import {PermissionsAndroid} from 'react-native';
import messaging from '@react-native-firebase/messaging';
PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

export function BgNotifications() {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Background Notifications', remoteMessage);
  });
}
