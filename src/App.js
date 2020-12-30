import React from "react";
import styled from "styled-components";
import GlobalStyles from "./Components/GlobalStyles";

import { COLORS } from "./constants";

import { TopBar } from "./Components/TopBar";
import { Main } from "./Components/Main";

export const App = () => {
  return (
    <Wrapper>
      <GlobalStyles />
      <TopBar />
      <Main />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  min-height: 100%;
  background-color: ${COLORS.background};
`;
