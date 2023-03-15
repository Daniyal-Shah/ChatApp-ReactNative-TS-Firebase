/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {authScreen_styles} from '../../Utils/Styles';
import CustomButton from '../../Components/Custom/CustomButton';
import CustomInputField from '../../Components/Custom/CustomInputField';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {authStackNavigationType} from '../../Models/Navigation';
import {handleLogin} from '../../Helper/handlers';
import CustomCheckbox from '../../Components/Custom/CustomCheckbox';
import {getAsyncData} from '../../Helper/asyncHelpers';
import {useFocusEffect} from '@react-navigation/native';
import {Formik} from 'formik';
import {loginValidationSchema} from '../../Models/yup.models';

const LoginScreen = () => {
  const [email, setEmail] = useState('daniyal.shah@venturedive.com');
  const [password, setPassword] = useState('12345');
  const [rememberme, setRememberme] = useState(true);

  const authNavigation = useNavigation<authStackNavigationType>();

  const getLastRememberUser = async () => {
    let data = await getAsyncData('login_credentials');
    let parsedData = JSON.parse(JSON.stringify(data));
    setEmail(parsedData.email);
    setPassword(parsedData.password);
  };

  useFocusEffect(
    React.useCallback(() => {
      getLastRememberUser();
    }, []),
  );

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
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{email: '', password: ''}}
            onSubmit={values => {
              handleLogin(values.email, values.password, rememberme);
            }}>
            {({values, handleChange, errors, touched, handleSubmit}) => (
              <>
                <View style={authScreen_styles.middleContainer}>
                  <CustomInputField
                    icon="email"
                    placeholder="Email"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    type={undefined}
                    styles={authScreen_styles.emailInput}
                    error={false}
                  />
                  <CustomInputField
                    icon="lock"
                    placeholder="Password"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    type={'password'}
                    styles={undefined}
                    error={false}
                  />
                  <CustomCheckbox
                    title={'Remember Me'}
                    isChecked={rememberme}
                    onPress={() => {
                      setRememberme(state => !state);
                    }}
                  />
                </View>

                <View style={authScreen_styles.bottomContainer}>
                  <CustomButton
                    title={'Login'}
                    btnStyles={undefined}
                    textStyles={undefined}
                    onPress={() => handleSubmit()}
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
              </>
            )}
          </Formik>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default LoginScreen;
