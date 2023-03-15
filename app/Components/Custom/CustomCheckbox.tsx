/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {CustomCheckboxProps} from '../../Models/CustomComponents';
import {COLORS} from '../../Utils/Colors';
import Icon from 'react-native-vector-icons/Entypo';

const CustomCheckbox = ({title, onPress, isChecked}: CustomCheckboxProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Pressable
        onPress={onPress}
        style={isChecked ? styles.checkedContainer : styles.uncheckedContainer}>
        <Icon name="check" size={14} color={'white'} />
      </Pressable>
    </View>
  );
};

export default CustomCheckbox;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center', marginTop: 20},
  title: {marginRight: 10},
  uncheckedContainer: {
    width: 15,
    height: 15,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: COLORS.primaryColor,
  },
  checkedContainer: {
    width: 15,
    height: 15,
    borderRadius: 4,
    backgroundColor: COLORS.primaryColor,
  },
});
