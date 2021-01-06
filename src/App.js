import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyles from "./Components/GlobalStyles";

import { getUserData } from "./helpers/api-helpers";

import { useSelector, useDispatch } from "react-redux";

import {
  requestUserInfo,
  receiveUserInfo,
  userInfoError,
  receiveGroupData,
} from "./actions";

import { COLORS } from "./constants";

import { TopBar } from "./Components/TopBar";
import { Main } from "./Components/Main";

export const App = () => {
  const dispatch = useDispatch();

  const { appUser, status } = useSelector((state) => state.appUser);
  const { userId } = useSelector((state) => state.auth);

  React.useEffect(() => {
    dispatch(requestUserInfo());

    getUserData(userId)
      .then((data) => {
        console.log(data);
        dispatch(receiveGroupData(data.userGroups));
        dispatch(receiveUserInfo(data.userData));
      })
      .catch((err) => console.log(err));
  }, []);

  if (status === "loading") {
    return (
      <Wrapper>
        <TopBar />
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Router>
        <GlobalStyles />
        <TopBar />
        <Switch>
          <Route path={"/groups/"}>groups management</Route>
          <Route path={"/user/"}>user management</Route>
          <Route exact={true} path={"/"}>
            <Main />
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  min-height: 100%;
  background-color: ${COLORS.background};
`;
