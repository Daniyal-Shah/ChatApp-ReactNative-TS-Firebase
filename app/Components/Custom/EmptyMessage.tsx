/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {screenDimensions} from '../../Utils/Screen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../../Utils/Colors';

const EmptyMessage = ({message}: any) => {
  return (
    <View style={styles.container}>
      <Icon name="box-open" color={COLORS.primaryColor} size={30} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default EmptyMessage;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: screenDimensions.height / 1.5,
  },
  message: {fontSize: 17, marginHorizontal: 20},
  image: {height: 50, width: 50},
});
