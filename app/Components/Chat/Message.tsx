/* eslint-disable @typescript-eslint/no-unused-vars */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../Utils/Colors';
import {ChatMessage_Prop} from '../../Models/ComponentsProps';

const Message = ({isMine, message, time}: ChatMessage_Prop) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: isMine ? COLORS.ownMessageBg : COLORS.otherMessageBg,
      // width: '70%',
      minWidth: '30%',
      maxWidth: '70%',
      paddingHorizontal: 20,
      paddingVertical: 5,
      borderRadius: 40,
      borderBottomRightRadius: isMine ? 0 : 40,
      borderBottomLeftRadius: isMine ? 40 : 0,
      alignSelf: isMine ? 'flex-end' : 'flex-start',
      marginBottom: 10,
    },
    text: {
      color: isMine ? COLORS.ownMessageText : COLORS.otherMessageText,
      fontSize: 16,
    },
    shadow: {
      shadowOffset: {width: 10, height: 10},
      shadowColor: 'black',
      shadowOpacity: 1,
      elevation: 2,
    },
    time: {
      alignSelf: 'flex-end',
      color: 'gray',
      fontSize: 14,
    },
  });

  return (
    <View style={[styles.container, styles.shadow]}>
      <Text style={styles.text}>{message}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};

export default Message;
