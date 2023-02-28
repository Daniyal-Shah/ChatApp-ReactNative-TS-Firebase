import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatScreen from '../Screens/Chat/ChatScreen';
import AllUsersScreen from '../Screens/User/AllUsersScreen';
import {AppStackParamList} from '../Models/Navigation';

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        headerShown: false,
      }}
      initialRouteName="AllUserScreen">
      <Stack.Screen name="AllUserScreen" component={AllUsersScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
}
