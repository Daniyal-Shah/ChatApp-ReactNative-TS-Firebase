/* eslint-disable @typescript-eslint/no-unused-vars */
import {View, ScrollView} from 'react-native';
import React from 'react';
import {chat_styles} from '../../Utils/Styles';
import ChatHeader from '../../Components/Chat/ChatHeader';
import ChatFooter from '../../Components/Chat/ChatFooter';
import Message from '../../Components/Chat/Message';

const SingleChatScreen = () => {
  return (
    <View style={chat_styles.container}>
      <ChatHeader
        name={'Tom Holland'}
        avatar_url={
          'https://static.toiimg.com/thumb.cms?msid=80482429&height=600&width=600'
        }
      />
      <ScrollView style={chat_styles.scroller}>
        <View style={chat_styles.messageContainer}>
          <Message isMine={false} message={undefined} />
          <Message isMine={true} message={undefined} />
          <Message isMine={false} message={undefined} />
          <Message isMine={true} message={undefined} />
          <Message isMine={false} message={undefined} />
          <Message isMine={true} message={undefined} />
          <Message isMine={false} message={undefined} />
        </View>
      </ScrollView>
      <ChatFooter />
    </View>
  );
};

export default SingleChatScreen;
