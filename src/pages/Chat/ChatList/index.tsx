import { query, where, collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import CircleLoading from "../../../components/CircleLoading";
import DialogPreview from "../ChatDialogPrev";
import { selectChat, selectChatState } from "../chatSlice";
import * as st from "./style";
import useChatsPreview from "../../../utils/hooks/useChat";
import { db } from "../../../services/firebase";
import { useEffect } from "react";
import { selectCurrentAcc } from "../../../app/currentAccSlice";
import { useSelector } from "react-redux";

const ChatList = () => {
  const dispatch = useAppDispatch();
  const chatState = useSelector(selectChatState);
  const currentAcc = useAppSelector(selectCurrentAcc);

  const [myChats, loading, error] = useCollection(
    query(collection(db!, "Chats"), where("members", "array-contains", currentAcc.id))
  );

  const openedMenu = window.innerWidth < 728 ? "80% auto" : "30% auto";
  const chatsP = useChatsPreview(myChats, currentAcc.id!);

  return (
    <st.ChatList>
      {chatsP ? (
        <div>
          {chatsP.map((item) => {
            return (
              <div onClick={() => dispatch(selectChat(item.chatId))} key={item.chatId}>
                <DialogPreview
                  chatPrev={item}
                  selected={chatState.selectedChatId == item.chatId}
                ></DialogPreview>
              </div>
            );
          })}
        </div>
      ) : (
        <CircleLoading></CircleLoading>
      )}
    </st.ChatList>
  );
};

export default ChatList;
