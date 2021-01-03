import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import GlobalStyles from "./Components/GlobalStyles";

import { UserContext } from "./Components/UserContext";

import { COLORS } from "./constants";

import { TopBar } from "./Components/TopBar";
import { Main } from "./Components/Main";

export const App = () => {
  const { appUser } = React.useContext(UserContext);

  if (!appUser) {
    return null;
  }
  return (
    <Wrapper>
      <Router>
        <GlobalStyles />
        <TopBar />
        <Route path={"/groups/"}>groups management</Route>
        <Route path={"/user/"}>user management</Route>
        <Route exact={true} path={"/"}>
          <Main />
        </Route>
      </Router>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  min-height: 100%;
  background-color: ${COLORS.background};
`;
