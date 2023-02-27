import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/Home/HomeScreen';
import SingleChatScreen from '../Screens/Home/SingleChatScreen';
import AllUsersScreen from '../Screens/User/AllUsersScreen';
import {AppStackParamList} from '../Models/navigation';

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        headerShown: false,
      }}
      initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AllUserScreen" component={AllUsersScreen} />
      <Stack.Screen name="SingleChatScreen" component={SingleChatScreen} />
    </Stack.Navigator>
  );
}
