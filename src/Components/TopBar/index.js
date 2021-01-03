import React from "react";
import styled from "styled-components";
import { FiUsers, FiHome, FiLogOut, FiUser } from "react-icons/fi";

import { COLORS } from "../../constants";

import { UserContext } from "../UserContext";

export const TopBar = () => {
  const { appUser } = React.useContext(UserContext);
  if (!appUser) {
    return null;
  }
  return (
    <Wrapper>
      <ActionsArea>
        <Action href={"/"}>
          <FiHome size={24} />
          <ActionName>Home</ActionName>
        </Action>
        <Action href={"/groups"}>
          <FiUsers size={24} />
          <ActionName>Groups</ActionName>
        </Action>
      </ActionsArea>

      <ActionsArea>
        <Action href={"/user"}>
          <FiUser size={24} />
          <ActionName>{appUser.name}</ActionName>
        </Action>
        <Action>
          <FiLogOut size={24} />
          <ActionName>Log Out</ActionName>
        </Action>
      </ActionsArea>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: 64px;
  background-color: ${COLORS.hightlightArea};
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 8px;
`;

const Action = styled.a`
  color: ${COLORS.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 8px;
  padding: 4px;
  border-radius: 6px;

  transition: all 100ms;

  &:hover {
    color: ${COLORS.hightlightArea};
    background-color: ${COLORS.background};
  }
`;

const ActionsArea = styled.ul`
  display: flex;
  height: 100%;
`;

const ActionName = styled.span`
  color: inherit;
`;
