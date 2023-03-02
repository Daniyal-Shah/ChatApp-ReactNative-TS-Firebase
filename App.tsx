/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import RootNavigation from './app/Navigation/RootNavigation';
import {NativeBaseProvider} from 'native-base';

function App(): JSX.Element {
  return (
    <NativeBaseProvider>
      <RootNavigation />
    </NativeBaseProvider>
  );
}

export default App;
