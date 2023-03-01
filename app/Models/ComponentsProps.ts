export interface ChatScreen_Prop {}

export interface ChatMessage_Prop {
  isMine: Boolean;
  message: String | undefined;
}

export interface UserItem_Prop {
  avatar_url: String | '';
  name: String | undefined;
  onPress: Function;
}
