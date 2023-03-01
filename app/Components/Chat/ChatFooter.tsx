/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet, TouchableOpacity, View, TextInput} from 'react-native';
import React from 'react';
import {COLORS} from '../../Utils/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const ChatFooter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Type somthing.." multiline={true} />
      </View>
      <TouchableOpacity>
        <View style={styles.senderContainer}>
          <View style={[styles.backContainer, styles.shadow]}>
            <Icon name="arrow-up-thick" size={30} color={COLORS.primaryColor} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ChatFooter;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    backgroundColor: COLORS.optionContainer,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.dividerColor,
    borderBottomWidth: 2,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    width: '80%',
  },
  senderContainer: {
    width: '20%',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderColor: COLORS.primaryColor,
    borderWidth: 2,
    marginLeft: 40,
  },
  name: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.primaryTextColor,
    marginLeft: 20,
  },
  backContainer: {
    backgroundColor: COLORS.dividerColor,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginLeft: 5,
  },
  shadow: {
    shadowOffset: {width: 2, height: 2},
    shadowColor: COLORS.dividerColor,
    shadowOpacity: 0.9,
    elevation: 8,
    // background color must be set
  },
});
