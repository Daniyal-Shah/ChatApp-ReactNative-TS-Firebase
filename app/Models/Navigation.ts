/* eslint-disable @typescript-eslint/no-unused-vars */
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type AuthStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
};

export type AppStackParamList = {
  HomeScreen: undefined;
  AllUserScreen: undefined;
  ChatScreen: undefined;
};
export type RootStackParamList = {
  AuthStack: AuthStackParamList;
  AppStack: AppStackParamList;
};

export type authStackNavigationType =
  NativeStackNavigationProp<AuthStackParamList>;

export type appStackNavigationType =
  NativeStackNavigationProp<AppStackParamList>;

export type rootStackNavigationType =
  NativeStackNavigationProp<RootStackParamList>;

// export interface RootStackParamList
//   extends AuthStackParamList,
//     AppStackParamList {}
