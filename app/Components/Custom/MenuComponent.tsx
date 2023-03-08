/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {getFirstLetters} from '../../Helper/filter';
import {COLORS} from '../../Utils/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {handleLogout} from '../../Helper/handlers';

const MenuComponent = () => {
  return (
    <View style={styles.container}>
      <Menu>
        <MenuTrigger>
          <View style={styles.image}>
            <Text style={styles.nameLetters}>
              {getFirstLetters('Daniyal Shah')}
            </Text>
          </View>
        </MenuTrigger>
        <MenuOptions>
          <MenuOption style={styles.menuItem} onSelect={() => handleLogout()}>
            <Text style={styles.text}>Log out</Text>
            <Icon name="logout" color={COLORS.primaryColor} size={24} />
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};

export default MenuComponent;

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 45,
    height: 45,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryColor,
    marginHorizontal: 5,
  },
  nameLetters: {
    fontWeight: '400',
    fontSize: 17,
    color: 'white',
    alignItems: 'center',
  },

  text: {
    marginHorizontal: 10,
    fontSize: 17,
  },
  menuItem: {flexDirection: 'row', justifyContent: 'center', padding: 10},
});
