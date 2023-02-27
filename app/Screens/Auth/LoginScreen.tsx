/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {Text, View, Button} from 'react-native';
import React from 'react';

const LoginScreen = ({route, navigation}: any) => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Text>LoginScreen</Text>
      <Button
        title="Register"
        onPress={() => navigation.navigate('RegisterScreen')}
      />
    </View>
  );
};

export default LoginScreen;
