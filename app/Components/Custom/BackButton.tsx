/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../Utils/Colors';
import {screenDimensions} from '../../Utils/Screen';
import {navigate} from '../../Helper/navigationHelper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  let navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <View style={[styles.backContainer, styles.shadow]}>
        <Icon name="chevron-left" size={20} />
      </View>
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backContainer: {
    backgroundColor: COLORS.dividerColor,
    width: 40,
    height: screenDimensions.height / 13,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginLeft: 5,
  },
  shadow: {
    shadowOffset: {width: 2, height: 2},
    shadowColor: COLORS.dividerColor,
    shadowOpacity: 0.4,
    elevation: 1,
    // background color must be set
  },
});
