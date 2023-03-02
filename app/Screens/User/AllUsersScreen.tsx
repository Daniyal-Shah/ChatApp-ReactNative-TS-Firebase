/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {ScrollView, View, Image, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {allUser_styles} from '../../Utils/Styles';
import SearchBar from '../../Components/User/SearchBar';
import UserItem from '../../Components/User/UserItem';
import {useNavigation} from '@react-navigation/native';
import {appStackNavigationType} from '../../Models/Navigation';
import UserModal from '../../Models/UserModel';
import {useSelector} from 'react-redux';
import {RootState} from '../../Redux/store';

const AllUsersScreen = () => {
  const [search, setSearch] = useState('');
  const allUsers = useSelector((state: RootState) => state.allUser);
  const currentUser = useSelector((state: RootState) => state.user);
  const [filteredItems, setFilteredItems] = useState(allUsers);
  const appNavigation = useNavigation<appStackNavigationType>();
  const [message, setMessage] = useState(true);

  const searchFilterFunction = (text: string) => {
    if (text) {
      const newData: Array<UserModal> = allUsers.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredItems(newData);
    } else {
      setFilteredItems(allUsers);
    }
  };

  useEffect(() => {
    searchFilterFunction(search);
  }, [search]);

  return (
    <View style={allUser_styles.container}>
      <View style={allUser_styles.innerContainer}>
        <SearchBar
          icon={'md-search-outline'}
          type={undefined}
          value={search}
          onChangeText={text => setSearch(text)}
          placeholder="Search user to chat"
          styles={undefined}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={allUser_styles.contentContainer}>
          {filteredItems.map(item => (
            <UserItem
              name={item.name}
              key={item.id}
              onPress={() => {
                appNavigation.navigate('ChatScreen', {user: item});
              }}
            />
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => setMessage(!message)}
        style={[allUser_styles.messageContainer, allUser_styles.shadow]}>
        <View style={allUser_styles.innerMessageContainer}>
          <Image
            source={require('../../Assets/wave.png')}
            style={allUser_styles.wave}
          />
          <Text
            style={[
              allUser_styles.message,
              message ? {} : allUser_styles.hideMessage,
            ]}>
            Hello, {currentUser.name}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AllUsersScreen;
