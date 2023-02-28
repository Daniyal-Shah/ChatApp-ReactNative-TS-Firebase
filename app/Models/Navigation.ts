/* eslint-disable @typescript-eslint/no-unused-vars */
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export type AuthStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
};

export type AppStackParamList = {
  HomeScreen: undefined;
  AllUserScreen: undefined;
  SingleChatScreen: undefined;
};

export interface RootStackParamList
  extends AuthStackParamList,
    AppStackParamList {}
