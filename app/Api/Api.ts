/* eslint-disable @typescript-eslint/no-unused-vars */
import UserModel from '../Models/UserModel';
import database, {firebase} from '@react-native-firebase/database';
class API {
  endpoint: string;
  reference: any;

  constructor(url: string) {
    this.endpoint = url;
  }

  signupUser(payload: UserModel): void {
    firebase
      .app()
      .database(this.endpoint)
      .ref(`/users/${payload.id}`)
      .set(payload);
  }
}

// Using ip of local system because backend api are running on local system
export const api = new API(
  'https://chatapp-b10e9-default-rtdb.asia-southeast1.firebasedatabase.app/',
);
