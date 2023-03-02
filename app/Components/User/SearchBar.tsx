/* eslint-disable @typescript-eslint/no-unused-vars */

import {StyleSheet, Text, View, TextInput, TextInputProps} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../Utils/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {CustomInputFieldProps} from '../../Models/CustomComponents';

const SearchBar = ({
  icon,
  placeholder,
  value,
  onChangeText,
  type,
  styles,
}: CustomInputFieldProps) => {
  const [focus, setFocus] = useState(false);

  const defaultStyles = StyleSheet.create({
    container: {
      width: '85%',
      backgroundColor: COLORS.secondaryColor,
      padding: 4,
      borderRadius: 10,
      flexDirection: 'row',
      position: 'relative',
      marginTop: 10,

      ...styles,
    },
    icon: {
      position: 'absolute',
      left: 20,
      top: 20,
      // top: '50%',
    },

    input: {
      marginLeft: 50,
      width: '100%',
      height: 50,
    },
    focusBorder: {
      borderWidth: 2,
      borderColor: COLORS.primaryColor,
    },
  });

  return (
    <View
      style={[
        defaultStyles.container,
        focus ? defaultStyles.focusBorder : null,
      ]}>
      <Icon style={defaultStyles.icon} name={icon} size={20} />
      <TextInput
        style={defaultStyles.input}
        placeholder={placeholder}
        placeholderTextColor={
          focus ? COLORS.focusInputTextColor : COLORS.nonfocusInputTextColor
        }
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchBar;
