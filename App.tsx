/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import RootNavigation from './app/Navigation/RootNavigation';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import store from './app/Redux/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <RootNavigation />
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;
