/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import RootNavigation from './app/Navigation/RootNavigation';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import store from './app/Redux/store';
import {MenuProvider} from 'react-native-popup-menu';

function App(): JSX.Element {
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
