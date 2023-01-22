import { DocumentData, Timestamp } from "firebase/firestore";
import { getUser } from "../dbHelpers";
import { DbObject } from "./DbObject";
import { Message } from "./Message";

export class Conversation extends DbObject {
  readonly chat_type: "chat" | "dialog";
  readonly members: Array<String>;
  readonly last_message?: Message;

  constructor(data: DocumentData, id: string) {
    super(id);
    this.chat_type = data["chat_type"];
    this.members = data["members"];
    this.last_message =
      "last_message" in data
        ? new Message(data["last_message"], data["last_message"]["id"])
        : undefined;
  }

  getPrevTitle(myId: string): Promise<string> {
    return this.chat_type == "dialog"
      ? getUser(this.members.filter((x) => x != myId)[0].toString()).then((x) => x.nickname)
      : Promise.resolve(this.members.join());
  }
}
