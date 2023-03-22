/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import RootNavigation from './app/Navigation/RootNavigation';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import store from './app/Redux/store';
import {MenuProvider} from 'react-native-popup-menu';
import {PermissionsAndroid} from 'react-native';
import {BgNotifications} from './app/Notifications/fcmNotifications';

function App(): JSX.Element {
  // Permission for notifications
  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

  // Background Notifications
  BgNotifications();

  return (
    <Provider store={store}>
      <MenuProvider>
        <NativeBaseProvider>
          <RootNavigation />
        </NativeBaseProvider>
      </MenuProvider>
    </Provider>
  );
}

export default App;
