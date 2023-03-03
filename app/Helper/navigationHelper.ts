/* eslint-disable @typescript-eslint/no-unused-vars */
import {createNavigationContainerRef} from '@react-navigation/native';
import ChatListModel from '../Models/ChatListModel';
import UserModal from '../Models/UserModel';

export const navigationRef = createNavigationContainerRef();

export function navigate(
  name: any,
  params?: {user?: UserModal; chatlist?: ChatListModel},
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
}
