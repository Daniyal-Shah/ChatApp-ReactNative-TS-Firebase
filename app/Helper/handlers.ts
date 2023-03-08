/* eslint-disable @typescript-eslint/no-unused-vars */
import {api} from '../Api/Api';
import UserModal from '../Models/UserModel';
import {Toast} from 'native-base';
import {successToast, errorToast} from '../Components/Custom/customToasts';
import {loadingOn, loadingOff} from '../Redux/loading/loadingSlice';
import store from '../Redux/store';
import {navigate} from '../Helper/navigationHelper';
import {loadUsers} from '../Redux/allUsers/allUserSlice';
import {loginUser, logoutUser} from '../Redux/user/userSlice';
import ChatListModel from '../Models/ChatListModel';
import {clearMessages} from '../Redux/messages/messagesSlice';

export const handleRegister = async (payload: UserModal) => {
  try {
    // Dispatch action to on the loading
    store.dispatch(loadingOn());

    // Api hitting for sinup
    await api.signupUser(payload);

    // Dispatch action to off the loading
    store.dispatch(loadingOff());

    Toast.show({
      render: () => successToast('Successfully Added User, Now Login'),
    });

    // Navigate to Login Screen
    navigate('LoginScreen');
  } catch (error) {
    Toast.show({
      render: () => errorToast('Error In Adding User'),
    });
  }
};

export const handleLogin = async (email: string, password: string) => {
  try {
    // Dispatch action to on the loading
    store.dispatch(loadingOn());

    // Api hitting for login
    let user: UserModal = {
      id: '',
      name: '',
      email: '',
      password: '',
    };
    user = await api.loginUser(email);
    if (user?.password === password) {
      // Dispatch action to current user data
      await store.dispatch(loginUser(user));

      //Fetching All ChatList
      await handleFetchChatLists();
      //Fetching All Users
      await handleFetchUsers();

      Toast.show({
        render: () => successToast('Successfully Logged In.'),
      });
      // Navigate to Main Screen After Logged In
      navigate('AppStack');
    } else {
      Toast.show({
        render: () => errorToast('Wrong Email or Password.'),
      });
    }
    // Dispatch action to off the loading
    store.dispatch(loadingOff());
  } catch (error) {
    Toast.show({
      render: () => errorToast('Error Logging In.'),
    });
  }
};

export const handleLogout = async () => {
  try {
    // Dispatch action to logout
    store.dispatch(logoutUser());

    // Navigating back to login
    navigate('AuthStack');
  } catch (error) {
    Toast.show({
      render: () => errorToast('Error Log Out.'),
    });
  }
};

export const handleFetchUsers = async () => {
  try {
    // Dispatch action to on the loading
    store.dispatch(loadingOn());

    const users = await api.fetchAllUsers();
    const filteredUsers = users.filter(
      item => item.id !== store.getState().user.id,
    );

    // Dispatch action to load all users
    store.dispatch(loadUsers(filteredUsers));

    // Dispatch action to off the loading
    store.dispatch(loadingOff());
  } catch (error) {
    Toast.show({
      render: () => errorToast('Error Fetching Users.'),
    });
  }
};

export const handleFetchChatLists = async () => {
  try {
    // Dispatch action to on the loading
    store.dispatch(loadingOn());

    await api.fetchChatList(store.getState().user.id);

    // Dispatch action to off the loading
    store.dispatch(loadingOff());
  } catch (error) {
    Toast.show({
      render: () => errorToast('Error In Fetching ChatList.'),
    });
  }
};

export const handleCreateChatList = async (
  currentUser: any,
  otherUser: any,
) => {
  try {
    // Dispatch action to on the loading
    store.dispatch(loadingOn());

    await api.createChatList(currentUser, otherUser);

    // Dispatch action to off the loading
    store.dispatch(loadingOff());
  } catch (error) {
    Toast.show({
      render: () => errorToast('Error In Creating Chatlist.'),
    });
  }

  await handleFetchChatLists();
};

export const handleSendMessage = async (
  sender: ChatListModel,
  reciever: ChatListModel,
  message: String,
  roomId: String,
  unseenMessages: number,
) => {
  try {
    // Dispatch action to on the loading
    store.dispatch(loadingOn());

    await api.sendMessage(sender, reciever, message, roomId, unseenMessages);

    // Dispatch action to off the loading
    store.dispatch(loadingOff());
  } catch (error) {
    Toast.show({
      render: () => errorToast('Error In Sending Message.'),
    });
  }
};

export const handleFetchMessages = async (roomId: string) => {
  try {
    // Dispatch action to on the loading
    // store.dispatch(loadingOn());

    await api.fetchMessages(roomId);

    // Dispatch action to off the loading
    // store.dispatch(loadingOff());
  } catch (error) {
    Toast.show({
      render: () => errorToast('Error Logging In.'),
    });
  }
};

export const handleUpdateMessages = async (roomId: string) => {
  try {
    // Dispatch action to on the loading
    store.dispatch(loadingOn());

    await api.updateMessage(roomId);

    // Dispatch action to off the loading
    store.dispatch(loadingOff());
  } catch (error) {
    Toast.show({
      render: () => errorToast('Error In Updating Messages.'),
    });
  }
};

export const handleClearMessages = () => {
  try {
    store.dispatch(clearMessages());
  } catch (error) {
    Toast.show({
      render: () => errorToast('Error In Clearing Messages.'),
    });
  }
};
