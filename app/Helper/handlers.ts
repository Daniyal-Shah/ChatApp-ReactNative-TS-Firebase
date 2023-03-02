/* eslint-disable @typescript-eslint/no-unused-vars */
import {api} from '../Api/Api';
import UserModal from '../Models/UserModel';
import {Toast} from 'native-base';
import {successToast, errorToast} from './customToasts';

export const handleRegister = (payload: UserModal) => {
  try {
    api.signupUser(payload);
    Toast.show({
      render: () => successToast('Successfully Added User.'),
    });
  } catch (error) {
    Toast.show({
      render: () => errorToast('Error In Adding User'),
    });
  }
};
