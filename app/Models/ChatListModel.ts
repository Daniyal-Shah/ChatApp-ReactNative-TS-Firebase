export default interface ChatListModel {
  id: String;
  name: String;
  email: String;
  roomId: String;
  lastMsg: String;
  sendTime: String | undefined;
  unseenMessages: number;
}
