/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../Utils/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
const ChatHeader = ({avatar_url, name}: any) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <View style={[styles.backContainer, styles.shadow]}>
          <Icon name="chevron-left" size={20} />
        </View>
      </TouchableOpacity>
      <Image
        source={{
          uri: avatar_url,
        }}
        style={styles.image}
      />

      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    backgroundColor: COLORS.screenBackgroundColor,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.dividerColor,
    borderBottomWidth: 2,
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
    shadowOpacity: 0.4,
    elevation: 1,
    // background color must be set
  },
});
