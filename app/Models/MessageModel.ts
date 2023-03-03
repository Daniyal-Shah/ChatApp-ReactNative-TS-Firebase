export default interface MessageModel {
  id: String | null;
  roomId: String;
  message: String;
  from: String;
  to: String;
  sendTime: string;
  msgType: String;
}
