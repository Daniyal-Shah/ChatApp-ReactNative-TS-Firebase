/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../Utils/Colors';
import {screenDimensions} from '../../Utils/Screen';
import {getFirstLetters, getTime} from '../../Helper/filter';

const UserItem = ({name, onPress, lastMsg, sendTime, unseenMessages}: any) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, styles.shadow]}>
        <View style={styles.image}>
          <Text style={styles.nameLetters}>{getFirstLetters(name)}</Text>
        </View>

        <View style={styles.detailsConatiner}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.lastMessage}>
            {lastMsg ? lastMsg : 'No conversation yet'}
          </Text>
        </View>

        <View style={styles.lastTimeContainer}>
          <View>
            <Text style={styles.lastMessageTime}>
              {sendTime && getTime(sendTime)}
            </Text>
          </View>

          {/* {sendTime && unseenMessages && unseenMessages > 0 && (
            <View style={styles.messageInfoContainer}>
              <Text style={styles.messageInfoText}>{unseenMessages}</Text>
            </View>
          )} */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserItem;

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
    borderRadius: 50,
    borderColor: COLORS.primaryColor,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    marginHorizontal: 5,
    width: 60,
    height: 60,
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
    // background color must be set
  },
  lastMessage: {
    fontSize: 15,
  },
  detailsConatiner: {
    width: screenDimensions.width * 0.6,
    paddingHorizontal: 10,
  },
  lastTimeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  lastMessageTime: {
    color: 'gray',
  },
  messageInfoContainer: {
    width: 23,
    height: 23,
    borderRadius: 50,
    backgroundColor: COLORS.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  messageInfoText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
  },
});
