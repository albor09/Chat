import { DbObject } from "./DbObject";

export class User extends DbObject {
  readonly uid: string;
  readonly nickname: string;
  readonly email: string;
  readonly photoUrl?: string;

  constructor(uid: string, nickname: string, email: string, id: string, photoUrl?: string) {
    super(id);
    this.uid = uid;
    this.nickname = nickname;
    this.email = email;
    this.photoUrl = photoUrl;
  }
}
