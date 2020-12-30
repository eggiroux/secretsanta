import React from "react";
import styled from "styled-components";
import { FiUsers } from "react-icons/fi";

import { COLORS } from "../../constants";

import { UserArea } from "./UserArea";

export const TopBar = () => {
  return (
    <Wrapper>
      <FiUsers size={32} />
      <UserArea />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: 64px;
  background-color: ${COLORS.hightlightArea};
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;
