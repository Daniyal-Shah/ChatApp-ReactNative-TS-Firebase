/* eslint-disable @typescript-eslint/no-unused-vars */
import UserModel from '../Models/UserModel';
import {firebase} from '@react-native-firebase/database';
import uuid from 'react-native-uuid';
import ChatListModel from '../Models/ChatListModel';
import MessageModel from '../Models/MessageModel';
import moment from 'moment';
import store from '../Redux/store';
import {addMessage, loadMessages} from '../Redux/messages/messagesSlice';
import {sortByDate} from '../Helper/filter';

class API {
  endpoint: string;
  reference: any;

  constructor(url: string) {
    this.endpoint = url;
    this.reference = firebase.app().database(this.endpoint);
  }

  // SignUp Method
  async signupUser(payload: UserModel): Promise<void> {
    return this.reference.ref(`/users/${payload.id}`).set(payload);
  }

  // Login Method
  async loginUser(email: string): Promise<UserModel> {
    return this.reference
      .ref('/users/')
      .orderByChild('email')
      .equalTo(email)
      .once('child_added')
      .then((snapshot: any) => snapshot.val());
  }

  // Fetch All Users Method
  async fetchAllUsers(): Promise<Array<UserModel>> {
    return this.reference
      .ref('/users/')
      .orderByChild('name')
      .once('value')
      .then((snapshot: any) => Object.values(snapshot.val()));
  }

  async createChatList(
    currentUser: any,
    otherUser: any,
  ): Promise<ChatListModel> {
    const roomId = uuid.v4().toString();
    return firebase
      .app()
      .database(this.endpoint)
      .ref('/chatlist/' + currentUser.id + '/' + otherUser.id)
      .once('value')
      .then(snapshot => {
        if (snapshot.val() == null) {
          const currentUserData: ChatListModel = {
            id: currentUser.id,
            name: currentUser.name,
            email: currentUser.email,
            lastMsg: 'Hello i am using Dchat ',
            roomId,
          };
          const otherUserData: ChatListModel = {
            id: otherUser.id,
            name: otherUser.name,
            email: otherUser.email,
            lastMsg: 'Hello i am using Dchat ',
            roomId,
          };

          firebase
            .app()
            .database(this.endpoint)
            .ref('/chatlist/' + otherUser.id + '/' + currentUser.id)
            .update(currentUserData);

          firebase
            .app()
            .database(this.endpoint)
            .ref('/chatlist/' + currentUser.id + '/' + otherUser.id)
            .update(otherUserData);

          return otherUserData;
        } else {
          const otherUserData: ChatListModel = {
            id: otherUser.id,
            name: otherUser.name,
            email: otherUser.email,
            lastMsg: 'Hello i am using Dchat ',
            roomId: snapshot.val().roomId,
          };
          return otherUserData;
        }
      });
  }

  async sendMessage(
    sender: ChatListModel,
    reciever: ChatListModel,
    message: String,
    roomId: String,
  ): Promise<void> {
    // Getting reference for message
    const newReference = this.reference.ref('/messages/' + roomId).push();

    const messageData: MessageModel = {
      roomId: roomId,
      message: message,
      from: sender.id,
      to: reciever.id,
      sendTime: moment().format(''),
      msgType: 'text',
      id: newReference.key,
    };

    newReference.set(messageData).then(() => {
      let chatListupdate = {
        lastMsg: message,
        sendTime: messageData.sendTime,
      };

      return Promise.all([
        this.reference
          .ref('/chatlist/' + reciever?.id + '/' + sender?.id)
          .update(chatListupdate),
        this.reference
          .ref('/chatlist/' + sender?.id + '/' + reciever?.id)
          .update(chatListupdate),
      ]);
    });
  }

  async fetchMessages(roomId: string) {
    return this.reference
      .ref('/messages/' + roomId)
      .once('value', (snapshot: any) => {
        if (snapshot?.val()) {
          store.dispatch(
            loadMessages(sortByDate(Object.values(snapshot.val()))),
          );
        }
      });
  }

  async updateMessage(roomId: string) {
    return this.reference
      .ref('/messages/' + roomId)
      .on('child_added', (snapshot: any) => {
        if (snapshot?.val()) {
          store.dispatch(addMessage(snapshot.val()));
        }
      });
  }
}

// Using ip of local system because backend api are running on local system
export const api = new API(
  'https://chatapp-b10e9-default-rtdb.asia-southeast1.firebasedatabase.app/',
);
