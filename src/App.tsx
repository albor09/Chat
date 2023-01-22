import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import LogIn from "./pages/LogIn";
import Auth from "./pages/Auth";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ContentLayout from "./components/ContentLayout";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { selectThemes } from "./app/themeSlice";
import { initFirebase } from "./services/firebase";
import { appAuth } from "./services/firebase";
import { selectServicesState, setAuthServiceEnabled } from "./app/servicesSlice";
import CircleLoading from "./components/CircleLoading";
import { useAuthState } from "react-firebase-hooks/auth";

const AppStyle = styled.div`
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.primaryFont};
  transition: 500ms;
`;

function App() {
  const themeState = useAppSelector(selectThemes);
  const servicesState = useAppSelector(selectServicesState);

  const dispatch = useAppDispatch();

  useEffect(() => {
    initFirebase();
    dispatch(setAuthServiceEnabled());
  }, []);

  return (
    <Router>
      <ThemeProvider theme={themeState.themes[themeState.selected]}>
        <AppStyle className="app">
          {servicesState.auth ? <ContentLayout></ContentLayout> : <CircleLoading></CircleLoading>}
        </AppStyle>
      </ThemeProvider>
    </Router>
  );
}

export default App;
