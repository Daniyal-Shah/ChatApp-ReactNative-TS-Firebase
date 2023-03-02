/* eslint-disable @typescript-eslint/no-unused-vars */
import UserModel from '../Models/UserModel';
import database, {firebase} from '@react-native-firebase/database';

class API {
  endpoint: string;

  constructor(url: string) {
    this.endpoint = url;
  }

  // SignUp Method
  async signupUser(payload: UserModel): Promise<void> {
    return firebase
      .app()
      .database(this.endpoint)
      .ref(`/users/${payload.id}`)
      .set(payload);
  }

  // Login Method
  async loginUser(email: string): Promise<UserModel> {
    return firebase
      .app()
      .database(this.endpoint)
      .ref('/users/')
      .orderByChild('email')
      .equalTo(email)
      .once('child_added')
      .then(snapshot => snapshot.val());
  }

  async fetchAllUsers(): Promise<Array<UserModel>> {
    return firebase
      .app()
      .database(this.endpoint)
      .ref('/users/')
      .orderByChild('email')
      .once('value')
      .then(snapshot => Object.values(snapshot.val()));
  }
}

// Using ip of local system because backend api are running on local system
export const api = new API(
  'https://chatapp-b10e9-default-rtdb.asia-southeast1.firebasedatabase.app/',
);
