/* eslint-disable @typescript-eslint/no-unused-vars */
import {useDispatch} from 'react-redux';
import {api} from '../Api/Api';
import UserModal from '../Models/UserModel';
import {Toast} from 'native-base';
import {successToast, errorToast} from '../Components/Custom/customToasts';
import {loadingOn, loadingOff} from '../Redux/loading/loadingSlice';
import store from '../Redux/store';
import {navigate} from '../Helper/navigationHelper';
import {loadUsers} from '../Redux/allUsers/allUserSlice';
import {loginUser} from '../Redux/user/userSlice';

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

export const handleFetchUsers = async () => {
  try {
    // Dispatch action to on the loading
    store.dispatch(loadingOn());

    const users = await api.fetchAllUsers();

    // Dispatch action to load all users
    store.dispatch(loadUsers(users));

    // Dispatch action to off the loading
    store.dispatch(loadingOff());
  } catch (error) {
    Toast.show({
      render: () => errorToast('Error Logging In.'),
    });
  }
};
