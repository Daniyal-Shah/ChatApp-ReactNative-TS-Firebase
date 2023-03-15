/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {allUser_styles, chat_styles} from '../../Utils/Styles';
import SearchBar from '../../Components/User/SearchBar';
import UserModal from '../../Models/UserModel';
import {useSelector} from 'react-redux';
import {RootState} from '../../Redux/store';
import LogoutButton from '../../Components/User/LogoutButton';
import {
  handleCreateChatList,
  handleFetchUsers,
  handleLogout,
} from '../../Helper/handlers';
import {useFocusEffect} from '@react-navigation/native';
import AvailableUser from '../../Components/User/AvailableUser';
import EmptyMessage from '../../Components/Custom/EmptyMessage';
import BackButton from '../../Components/Custom/BackButton';

const AllUsersScreen = () => {
  const [search, setSearch] = useState('');
  const allUsers = useSelector((state: RootState) => state.allUser);
  const currentUser = useSelector((state: RootState) => state.user);
  const [filteredItems, setFilteredItems] = useState(allUsers);

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

  useFocusEffect(
    React.useCallback(() => {
      searchFilterFunction(search);
      handleFetchUsers();
    }, [search]),
  );
  return (
    <View style={allUser_styles.container}>
      <View style={allUser_styles.innerContainer}>
        <BackButton />
        <SearchBar
          icon={'md-search-outline'}
          type={undefined}
          value={search}
          onChangeText={text => setSearch(text)}
          placeholder="Search user to chat"
          styles={{marginLeft: 5}}
          error={false}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={allUser_styles.contentContainer}>
          {filteredItems.map(item => (
            <AvailableUser
              name={item.name}
              key={item.id}
              onPress={() => {
                handleCreateChatList(currentUser, item);
              }}
            />
          ))}
          {filteredItems.length < 1 && (
            <EmptyMessage message={'No User Found'} />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default AllUsersScreen;
