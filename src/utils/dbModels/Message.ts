import { DocumentData, Timestamp } from "firebase/firestore";
import { DbObject } from "./DbObject";

export class Message extends DbObject {
  readonly author: string;
  readonly text: string;
  readonly date: Timestamp;
  readonly hasRead: Array<string>;

  constructor(data: DocumentData, id: string) {
    super(id);
    this.author = data["author"];
    this.text = data["text"];
    this.date = data["date"];
    this.hasRead = data["has_read"];
  }
}
