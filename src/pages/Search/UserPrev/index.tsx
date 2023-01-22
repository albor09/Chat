import { FC } from "react";
import { User } from "../../../utils/dbModels/User";
import { defaultAvatarUrl } from "../../../utils/helpers";
import { CircleAvatar } from "../../Chat/ChatDialogPrev/style";
import * as st from "./style";

interface UserPreviewProps {
  user: User;
}

const UserPreview: FC<UserPreviewProps> = ({ user }) => {
  return (
    <st.UserPrevWrapper>
      <st.UserInfo>
        <CircleAvatar
          style={{ backgroundImage: `url(${user.photoUrl ?? defaultAvatarUrl})` }}
        ></CircleAvatar>
        <div>{user.nickname}</div>
      </st.UserInfo>
      <st.SendBtn>Send</st.SendBtn>
    </st.UserPrevWrapper>
  );
};

export default UserPreview;
