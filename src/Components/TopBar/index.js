import React from "react";
import styled from "styled-components";
import { FiUsers } from "react-icons/fi";

import { COLORS } from "../../constants";

import { UserArea } from "./UserArea";

export const TopBar = () => {
  return (
    <Wrapper>
      <Action>
        <FiUsers size={32} />
        <ActionName>Groups</ActionName>
      </Action>

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

const Action = styled.div`
  color: ${COLORS.background};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ActionName = styled.p`
  color: ${COLORS.background};
`;
