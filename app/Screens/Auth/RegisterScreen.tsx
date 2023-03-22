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
import ErrorMessage from '../../Components/Custom/ErrorMessage';
import {Formik} from 'formik';
import {signUpValidationSchema} from '../../Models/yup.models';
import messaging from '@react-native-firebase/messaging';

const RegisterScreen = () => {
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
          <Formik
            validationSchema={signUpValidationSchema}
            initialValues={{
              name: '',
              email: '',
              password: '',
            }}
            onSubmit={async values => {
              await messaging()
                .getToken()
                .then(token => {
                  handleRegister({
                    ...values,
                    id: uuid.v1().toString(),
                    token,
                  });
                });
            }}>
            {({values, handleChange, errors, touched, handleSubmit}) => (
              <>
                <View style={authScreen_styles.middleContainer}>
                  <CustomInputField
                    icon="human-male"
                    placeholder="Name"
                    value={values.name}
                    onChangeText={handleChange('name')}
                    type={undefined}
                    styles={authScreen_styles.emailInput}
                    error={false}
                  />
                  {touched.name && errors.name && (
                    <ErrorMessage message={errors.name} />
                  )}
                  <CustomInputField
                    icon="email"
                    placeholder="Email"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    type={undefined}
                    styles={authScreen_styles.emailInput}
                    error={false}
                  />
                  {touched.email && errors.email && (
                    <ErrorMessage message={errors.email} />
                  )}
                  <CustomInputField
                    icon="lock"
                    placeholder="Password"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    type={'password'}
                    styles={undefined}
                    error={false}
                  />
                  {touched.password && errors.password && (
                    <ErrorMessage message={errors.password} />
                  )}
                </View>
                <View style={authScreen_styles.bottomContainer}>
                  <CustomButton
                    title={'Sign Up'}
                    btnStyles={undefined}
                    textStyles={undefined}
                    onPress={() => handleSubmit()}
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
              </>
            )}
          </Formik>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default RegisterScreen;
