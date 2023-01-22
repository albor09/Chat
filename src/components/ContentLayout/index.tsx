import Centered from "../Centered";
import * as st from "./style";
import { Container } from "../../styles/globalStyles";
import { FC, PropsWithChildren, useEffect } from "react";
import BottomBar from "../BottomBar";
import { useAuthState } from "react-firebase-hooks/auth";
import { appAuth } from "../../services/firebase";
import { Navigate, Route, Routes } from "react-router-dom";
import LogIn from "../../pages/LogIn";
import Auth from "../../pages/Auth";
import { Chat } from "../../pages/Chat";
import { signOut } from "firebase/auth";
import { useAppDispatch } from "../../app/hooks";
import { setAcc } from "../../app/currentAccSlice";
import { getUser } from "../../utils/dbHelpers";
import Search from "../../pages/Search";

const ContentLayout: FC<PropsWithChildren> = ({ children }) => {
  const [user, loading, error] = useAuthState(appAuth!);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user == null) return;
    getUser(user.uid).then((u) => {
      dispatch(setAcc({ id: u.id, nickname: u.nickname }));
    });
  }, [user]);

  return !loading ? (
    <Container>
      <st.Content>
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="/chat"></Navigate> : <Navigate to="/login"></Navigate>}
          ></Route>
          <Route
            path="/login"
            element={user ? <Navigate to="/chat"></Navigate> : <LogIn />}
          ></Route>
          <Route
            path="/auth"
            element={user ? <Navigate to="/chat"></Navigate> : <Auth></Auth>}
          ></Route>
          <Route path="/chat" element={user ? <Chat /> : <Navigate to="/login"></Navigate>}></Route>
          <Route
            path="/search"
            element={user ? <Search></Search> : <Navigate to="/login"></Navigate>}
          ></Route>
        </Routes>
        <BottomBar></BottomBar>
      </st.Content>
    </Container>
  ) : (
    <div></div>
  );
};

export default ContentLayout;
