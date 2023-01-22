import { DocumentData, QueryDocumentSnapshot, QuerySnapshot } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { getUser } from "../dbHelpers";
import { Message } from "../dbModels/Message";
import { ChatPreview } from "../uiModels/ChatPrev";

const useChatsPreview = (
  chatsSnapshot: QuerySnapshot<DocumentData> | undefined,
  myId: string
): Array<ChatPreview> | null => {
  const [chats, setChats] = useState<Array<ChatPreview> | null>(null);

  useEffect(() => {
    if (chatsSnapshot && !chatsSnapshot.empty) {
      let docsChanges = chatsSnapshot.docChanges();
      let users: Array<ChatPreview> = Object.assign(new Array<ChatPreview>(), chats);
      for (let i = 0; i < docsChanges.length; i++) {
        let changeType = docsChanges[i].type;
        let id = docsChanges[i].doc.id;
        let data = docsChanges[i].doc.data();
        if (changeType == "added" && !users.find((x) => x.chatId == id)) {
          parseToChatPrev(data, id).then((x) => {
            users.push(x);
            setChats(users);
          });
        } else if (changeType == "modified") {
          let fInd = users.findIndex((x) => x.chatId == id);
          if (users[fInd]) {
            parseToChatPrev(data, id).then((x) => {
              users[fInd] = x;
              setChats(users);
            });
          }
        }
      }
    }
  }, [chatsSnapshot]);

  const parseToChatPrev = async (data: DocumentData, docId: string): Promise<ChatPreview> => {
    if (data["chat_type"] == "dialog") {
      let peerUid: string = data["members"].filter((x: string) => x != myId)[0];
      return await getUser(peerUid).then(
        (x) =>
          new ChatPreview(
            x.nickname,
            new Message(data["last_message"], data["last_message"]["id"]),
            docId,
            x.photoUrl,
            peerUid
          )
      );
    } else if (data["chat_type"] == "chat") {
      return Promise.resolve(
        new ChatPreview(
          data["members"].join(),
          new Message(data["last_message"], data["last_message"]["id"]),
          docId,
          data["chat_settings"]["photo_url"]
        )
      );
    }
    return Promise.reject();
  };

  return chats;
};

export default useChatsPreview;
