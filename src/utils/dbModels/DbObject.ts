import { DocumentData } from "firebase/firestore";

export abstract class DbObject {
  readonly id: string;

  constructor(id: string) {
    this.id = id;
  }
}
