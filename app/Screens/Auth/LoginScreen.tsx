/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {authScreen_styles} from '../../Utils/Styles';
import CustomButton from '../../Components/Custom/CustomButton';
import CustomInputField from '../../Components/Custom/CustomInputField';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {
  authStackNavigationType,
  rootStackNavigationType,
} from '../../Models/Navigation';
import {handleLogin} from '../../Helper/handlers';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authNavigation = useNavigation<authStackNavigationType>();

  return (
    <View style={authScreen_styles.container}>
      <Image
        source={require('../../Assets/bg.png')}
        style={authScreen_styles.bgImage}
      />
      <View style={authScreen_styles.contentContainer}>
        <View style={authScreen_styles.topContainer}>
          <Text style={authScreen_styles.title}>Log In</Text>
        </View>

        <KeyboardAwareScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <View style={authScreen_styles.middleContainer}>
            <CustomInputField
              icon="email"
              placeholder="Email"
              value={email}
              onChangeText={text => setEmail(text)}
              type={undefined}
              styles={authScreen_styles.emailInput}
            />
            <CustomInputField
              icon="lock"
              placeholder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
              type={'password'}
              styles={undefined}
            />
          </View>

          <View style={authScreen_styles.bottomContainer}>
            <CustomButton
              title={'Login'}
              btnStyles={undefined}
              textStyles={undefined}
              onPress={() => {
                handleLogin(email, password);
              }}
            />
            <View style={authScreen_styles.linkContainer}>
              <Text style={authScreen_styles.simpleText}>
                Don't have account?{' '}
              </Text>
              <Text
                style={authScreen_styles.link}
                onPress={() => {
                  authNavigation.navigate('RegisterScreen');
                }}>
                {' '}
                Sign Up{' '}
              </Text>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default LoginScreen;
