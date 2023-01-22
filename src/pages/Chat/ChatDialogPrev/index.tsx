import { collection, limit, orderBy, query } from "firebase/firestore";
import { FC, useEffect, useState } from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../../../services/firebase";
import { Conversation } from "../../../utils/dbModels/Conversation";
import { parseDate } from "../../../utils/helpers";
import { ChatPreview } from "../../../utils/uiModels/ChatPrev";
import * as st from "./style";

interface DialogPreviewProps {
  chatPrev: ChatPreview;
  selected: boolean;
}

const DialogPreview: FC<DialogPreviewProps> = ({ chatPrev, selected }) => {
  return !selected ? (
    <st.Wrapper>
      <st.CircleAvatar
        style={{ backgroundImage: 'url("http://i.stack.imgur.com/Dj7eP.jpg"' }}
      ></st.CircleAvatar>
      <st.DialogInfo>
        <st.DialogInfoTop>
          <st.DialogTitle>{chatPrev.title}</st.DialogTitle>
          <st.DialogTime>{parseDate(chatPrev.lastMessage.date.seconds)}</st.DialogTime>
        </st.DialogInfoTop>
        <st.DialogLastMsg>{chatPrev.lastMessage.text}</st.DialogLastMsg>
      </st.DialogInfo>
    </st.Wrapper>
  ) : (
    <st.WrapperSelected>
      <st.CircleAvatar
        style={{ backgroundImage: 'url("http://i.stack.imgur.com/Dj7eP.jpg"' }}
      ></st.CircleAvatar>
      <st.DialogInfo>
        <st.DialogInfoTop>
          <st.DialogTitle>{chatPrev.title}</st.DialogTitle>
          <st.DialogTime>{parseDate(chatPrev.lastMessage.date.seconds)}</st.DialogTime>
        </st.DialogInfoTop>
        <st.DialogLastMsg>{chatPrev.lastMessage.text}</st.DialogLastMsg>
      </st.DialogInfo>
    </st.WrapperSelected>
  );
};

export default DialogPreview;
