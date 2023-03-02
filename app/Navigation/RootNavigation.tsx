/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoadingSpinner from '../Components/Custom/LoadingSpinner';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../Redux/store';
import {navigationRef} from '../Helper/navigationHelper';
const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const {isLoading} = useSelector((state: RootState) => state.loading);

  return (
    <NavigationContainer ref={navigationRef}>
      <LoadingSpinner isLoading={isLoading} />
      <Stack.Navigator
        initialRouteName="AuthStack"
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerShown: false,
        }}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="AppStack" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
