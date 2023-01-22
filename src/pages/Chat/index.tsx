import * as st from "./style";
import { faBars, faSearch, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { appAuth, db } from "../../services/firebase";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectChat, selectChatState, switchSideMenu } from "./chatSlice";
import Conversation from "./Conversation";
import ChatList from "./ChatList";
import { CircleAvatar } from "./ChatDialogPrev/style";
import { defaultAvatarUrl } from "../../utils/helpers";
import { selectCurrentAcc } from "../../app/currentAccSlice";
import Icon from "../../components/Icon";
import { redirect, useNavigate } from "react-router-dom";

export const Chat = () => {
  const dispatch = useAppDispatch();
  const chatState = useAppSelector(selectChatState);
  const currentAcc = useAppSelector(selectCurrentAcc);
  const navigate = useNavigate();
  const openedMenu = window.innerWidth < 728 ? "80% auto" : "30% auto";

  return (
    <st.ChatWrapper>
      <st.ChatTop>
        <st.ChatTopLeft>
          <Icon icon={faSignOut} onClick={() => appAuth?.signOut()} useThemeColor={true}></Icon>
          <Icon icon={faSearch} onClick={() => navigate("/search")} useThemeColor={true}></Icon>
        </st.ChatTopLeft>
        <st.ChatTopRight>
          <div>Hi, {currentAcc.nickname}</div>
          <CircleAvatar
            style={{ backgroundImage: `url('${currentAcc.photoUrl ?? defaultAvatarUrl}')` }}
          ></CircleAvatar>
        </st.ChatTopRight>
      </st.ChatTop>
      <st.ChatGrid
        style={{ gridTemplateColumns: chatState.isSideMenuOpen ? openedMenu : "0% auto" }}
      >
        <ChatList></ChatList>
        <st.Chat>
          <st.ChatViewTop>
            <FontAwesomeIcon
              icon={faBars}
              size={"2x"}
              color={"grey"}
              onClick={() => dispatch(switchSideMenu())}
            />
            <st.ChatTitleWrapper>
              <st.ChatTitleName>
                {/* {chatsP?.find((x) => x.chatId == chatState.selectedChatId)?.title} */}
              </st.ChatTitleName>
            </st.ChatTitleWrapper>
          </st.ChatViewTop>
          {chatState.selectedChatId && (
            <Conversation chatId={chatState.selectedChatId!}></Conversation>
          )}
        </st.Chat>
      </st.ChatGrid>
    </st.ChatWrapper>
  );
};
