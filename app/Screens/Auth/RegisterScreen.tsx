/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {authScreen_styles} from '../../Utils/Styles';
import CustomButton from '../../Components/Custom/CustomButton';
import CustomInputField from '../../Components/Custom/CustomInputField';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {authStackNavigationType} from '../../Models/Navigation';
import {handleRegister} from '../../Helper/handlers';
import uuid from 'react-native-uuid';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<authStackNavigationType>();

  return (
    <View style={authScreen_styles.container}>
      <Image
        source={require('../../Assets/bg.png')}
        style={authScreen_styles.bgImage}
      />
      <View style={authScreen_styles.contentContainer}>
        <KeyboardAwareScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <View style={authScreen_styles.topContainer}>
            <Text style={authScreen_styles.title}>Sign Up</Text>
          </View>
          <View style={authScreen_styles.middleContainer}>
            <CustomInputField
              icon="human-male"
              placeholder="Name"
              value={name}
              onChangeText={text => setName(text)}
              type={undefined}
              styles={authScreen_styles.emailInput}
            />
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
              title={'Sign Up'}
              btnStyles={undefined}
              textStyles={undefined}
              onPress={() => {
                handleRegister({
                  email,
                  name,
                  password,
                  id: uuid.v1().toString(),
                });
                setPassword('');
                setName('');
                setEmail('');
              }}
            />
            <View style={authScreen_styles.linkContainer}>
              <Text style={authScreen_styles.simpleText}>
                Already have an account ?{' '}
              </Text>
              <Text
                style={authScreen_styles.link}
                onPress={() => {
                  navigation.navigate('LoginScreen');
                }}>
                {' '}
                Login{' '}
              </Text>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default RegisterScreen;
