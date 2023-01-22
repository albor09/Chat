import { Message } from "../dbModels/Message";

export class ChatPreview {
  readonly title: string;
  readonly photoUrl?: string;
  readonly lastMessage: Message;

  readonly chatId: string;
  readonly peerId?: string;

  constructor(
    title: string,
    lastMessage: Message,
    chatId: string,
    photoUrl?: string,
    peerId?: string
  ) {
    this.title = title;
    this.photoUrl = photoUrl;
    this.lastMessage = lastMessage;
    this.chatId = chatId;
    this.peerId = peerId;
  }
}
