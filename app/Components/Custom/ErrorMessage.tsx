/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../Utils/Colors';

const ErrorMessage = ({message}: any) => {
  return (
    <View>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({
  text: {color: COLORS.errorColor},
});
