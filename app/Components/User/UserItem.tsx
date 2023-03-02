/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../Utils/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const getFirstLetters = (name: string) => {
  let arr = name.split(' ');

  let firstLetter = arr[0]?.charAt(0).toUpperCase();
  let secondLetter = arr[1]?.charAt(0).toUpperCase()
    ? arr[1]?.charAt(0).toUpperCase()
    : '';

  return firstLetter + '' + secondLetter;
};

const UserItem = ({name, onPress}: any) => {
  return (
    <View style={[styles.container, styles.shadow]}>
      <View style={styles.image}>
        <Text style={styles.nameLetters}>{getFirstLetters(name)}</Text>
      </View>

      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity onPress={onPress}>
        <Icon name="chat" size={28} color={COLORS.primaryColor} />
      </TouchableOpacity>
    </View>
  );
};

export default UserItem;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 80,
    backgroundColor: COLORS.secondaryColor,
    borderRadius: 10,
    marginVertical: 4,
    padding: 10,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderColor: COLORS.primaryColor,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  nameLetters: {
    fontWeight: '600',
    fontSize: 17,
    color: 'black',
  },
  name: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.primaryTextColor,
  },
  shadow: {
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.4,
    elevation: 7,
    // background color must be set
  },
});
