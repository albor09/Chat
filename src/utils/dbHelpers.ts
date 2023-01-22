import { addDoc, collection, doc, getDoc, setDoc, Timestamp, updateDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { User } from "./dbModels/User";

export const addUser = async (user: User) => {
  await setDoc(doc(db!, "Users", user.uid), {
    uid: user.uid,
    nickname: user.nickname,
    email: user.email,
  });
};

export const getUser = async (uid: string): Promise<User> => {
  let dbResp = await getDoc(doc(db!, "Users", uid));
  let data = dbResp.data();
  return new User(data!["uid"], data!["nickname"], data!["email"], data!["uid"]);
};

export const sendMsg = async (chatId: string, text: string, myId: string) => {
  let msg = {
    text: text,
    date: Timestamp.now(),
    author: myId,
    has_read: [],
  };
  await addDoc(collection(db!, `Chats/${chatId}/Messages`), msg);
  await updateDoc(doc(db!, "Chats", chatId), {
    last_message: msg,
  });
};
