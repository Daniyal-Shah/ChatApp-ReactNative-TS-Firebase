/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../Utils/Colors';
import {screenDimensions} from '../../Utils/Screen';
import {getFirstLetters} from '../../Helper/filter';

const AvailableUser = ({name, onPress}: any) => {
  return (
    <View style={[styles.container, styles.shadow]}>
      <View style={styles.image}>
        <Text style={styles.nameLetters}>{getFirstLetters(name)}</Text>
      </View>

      <View style={styles.detailsConatiner}>
        <Text style={styles.name}>{name}</Text>
      </View>

      <TouchableOpacity onPress={onPress}>
        <View style={styles.addChatContainer}>
          <Text style={styles.addChatText}>Add</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AvailableUser;

const styles = StyleSheet.create({
  container: {
    width: screenDimensions.width,
    height: screenDimensions.height / 10,
    backgroundColor: COLORS.secondaryColor,
    borderRadius: 20,
    marginVertical: 4,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    // width: 60,
    height: 60,
    borderRadius: 50,
    borderColor: COLORS.primaryColor,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    marginHorizontal: 20,
    width: screenDimensions.width * 0.15,
  },
  nameLetters: {
    fontWeight: '400',
    fontSize: 17,
    color: 'black',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '400',
    color: COLORS.primaryTextColor,
    textAlign: 'left',
  },
  shadow: {
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 2,
  },
  lastMessage: {
    fontSize: 15,
  },
  detailsConatiner: {
    width: screenDimensions.width * 0.55,
    marginLeft: 2,
  },
  lastMessageTime: {
    color: 'gray',
  },
  addChatContainer: {
    backgroundColor: COLORS.primaryColor,
    padding: 8,
    paddingHorizontal: 14,
    borderRadius: 5,
  },
  addChatText: {
    color: 'white',
    fontWeight: '500',
  },
});
