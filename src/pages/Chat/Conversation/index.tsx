import { FC, useEffect, useRef, useState } from "react";
import * as st from "./style";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../../../services/firebase";
import { useAppSelector } from "../../../app/hooks";
import { selectChatState } from "../chatSlice";
import { sendMsg } from "../../../utils/dbHelpers";
import { parseDate } from "../../../utils/helpers";
import CircleLoading from "../../../components/CircleLoading";
import { selectCurrentAcc } from "../../../app/currentAccSlice";
import useKeyDown from "../../../utils/hooks/useKeyDown";

interface ConversationProps {
  chatId: string;
}

const Conversation: FC<ConversationProps> = ({ chatId }) => {
  const currentAcc = useAppSelector(selectCurrentAcc);

  const [text, setText] = useState("");
  const keydownListnerRef = useRef();

  const [messages, loading, error] = useCollection(
    query(collection(db!, `Chats/${chatId}/Messages`), orderBy("date", "asc"))
  );

  useKeyDown(
    "Enter",
    () => {
      sendMsg(chatId, text, currentAcc.id!);
      setText("");
    },
    [text]
  );

  useEffect(() => {}, [messages]);

  return (
    <st.ConversationWrapper>
      {!loading ? (
        <st.ConversationMessages>
          {messages?.docs.map((item) => {
            let isMyMsg = item.data()["author"] == currentAcc.id!;
            return (
              <st.ConversationLine style={{ justifyContent: isMyMsg ? "end" : "start" }}>
                {isMyMsg ? (
                  <st.MyMessage>
                    <st.MsgText>{item.data()["text"]}</st.MsgText>
                    <st.MessageDate>{parseDate(item.data()["date"]["seconds"])}</st.MessageDate>
                  </st.MyMessage>
                ) : (
                  <st.PeerMessage>
                    <st.MsgText>{item.data()["text"]}</st.MsgText>
                    <st.MessageDate>{parseDate(item.data()["date"]["seconds"])}</st.MessageDate>
                  </st.PeerMessage>
                )}
              </st.ConversationLine>
            );
          })}
        </st.ConversationMessages>
      ) : (
        <CircleLoading></CircleLoading>
      )}
      <st.ConversationBottom>
        <st.Input onChange={(event) => setText(event.target.value)} value={text}></st.Input>
        <FontAwesomeIcon
          icon={faArrowUp}
          size={"2x"}
          color={"grey"}
          onClick={() => {
            sendMsg(chatId, text, currentAcc.id!);
            setText("");
          }}
        />
      </st.ConversationBottom>
    </st.ConversationWrapper>
  );
};

export default Conversation;
