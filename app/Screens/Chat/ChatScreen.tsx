/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {View, ScrollView, ImageBackground} from 'react-native';
import React, {useState, useEffect} from 'react';
import {chat_styles} from '../../Utils/Styles';
import ChatHeader from '../../Components/Chat/ChatHeader';
import ChatFooter from '../../Components/Chat/ChatFooter';
import Message from '../../Components/Chat/Message';
import {handleFetchMessages, handleSendMessage} from '../../Helper/handlers';
import {useSelector} from 'react-redux';
import {RootState} from '../../Redux/store';
import ChatListModel from '../../Models/ChatListModel';
import {getTime} from '../../Helper/filter';

const SingleChatScreen = ({route}: any) => {
  const {user, chatlist} = route.params;
  const [message, setMessage] = useState('');
  const currentUser = useSelector((state: RootState) => state.user);
  const chat = useSelector((state: RootState) => state.messages);

  const recieverChat = useSelector((state: RootState) => state.allChat).find(
    item => item.id === chatlist.id,
  );
  async function handleMessage() {
    const userChatList: ChatListModel = {
      id: currentUser.id,
      name: currentUser.name,
      email: currentUser.email,
      roomId: chatlist.roomId,
      lastMsg: '',
      sendTime: undefined,
      unseenMessages: 0,
    };
    if (message && message !== '') {
      await handleSendMessage(
        userChatList,
        chatlist,
        message,
        chatlist.roomId,
        recieverChat?.unseenMessages || 0,
      );
      setMessage('');
      handleFetchMessages(chatlist.roomId);
    }
  }

  useEffect(() => {
    handleFetchMessages(chatlist.roomId);
  }, []);

  return (
    <View style={chat_styles.container}>
      <ImageBackground
        source={require('../../Assets/wallpaper3.png')}
        resizeMode="cover"
        style={chat_styles.bgImage}>
        <ChatHeader name={chatlist.name} />

        <ScrollView style={chat_styles.scroller}>
          <View style={chat_styles.messageContainer}>
            {chat.map((item, index) => (
              <Message
                isMine={currentUser.id === item.from}
                message={item.message}
                key={item.id + '-' + index}
                time={getTime(item.sendTime)}
              />
            ))}
          </View>
        </ScrollView>
        <ChatFooter
          message={message}
          setMessage={setMessage}
          handleMessage={handleMessage}
        />
      </ImageBackground>
    </View>
  );
};

export default SingleChatScreen;
