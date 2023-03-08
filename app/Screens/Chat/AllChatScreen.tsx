/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {ScrollView, View, Image, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {allUser_styles} from '../../Utils/Styles';
import SearchBar from '../../Components/User/SearchBar';
import UserItem from '../../Components/User/UserItem';
import {useSelector} from 'react-redux';
import {RootState} from '../../Redux/store';
import LogoutButton from '../../Components/User/LogoutButton';
import {
  handleClearMessages,
  handleCreateChatList,
  handleFetchUsers,
  handleLogout,
} from '../../Helper/handlers';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useFocusEffect} from '@react-navigation/native';
import {COLORS} from '../../Utils/Colors';
import {navigate} from '../../Helper/navigationHelper';
import ChatListModel from '../../Models/ChatListModel';
import EmptyMessage from '../../Components/Custom/EmptyMessage';
import MenuComponent from '../../Components/Custom/MenuComponent';

const AllChatScreen = () => {
  const [search, setSearch] = useState('');
  const allChats = useSelector((state: RootState) => state.allChat);
  const currentUser = useSelector((state: RootState) => state.user);
  // const [message, setMessage] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      handleClearMessages();
    }, []),
  );

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
        <MenuComponent />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={allUser_styles.contentContainer}>
          {allChats
            .filter(item => {
              return (
                (item.name
                  ? item.name.toUpperCase()
                  : ''.toUpperCase()
                ).indexOf(search.toUpperCase()) > -1
              );
            })
            .map(chat => (
              <UserItem
                name={chat.name}
                key={chat.id}
                onPress={() => {
                  handleCreateChatList(currentUser, chat);
                  navigate('ChatScreen', {
                    user: currentUser,
                    chatlist: chat,
                  });
                }}
                lastMsg={chat.lastMsg}
                sendTime={chat.sendTime}
                unseenMessages={chat.unseenMessages}
              />
            ))}
          {allChats.length < 1 && <EmptyMessage message={'No Chats Found'} />}
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={() => {
          handleFetchUsers();
          navigate('AllUserScreen');
        }}
        style={[allUser_styles.allUsersContainer, allUser_styles.shadow]}>
        <View style={allUser_styles.innerMessageContainer}>
          <Icon name="group" color={COLORS.primaryColor} size={23} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AllChatScreen;
