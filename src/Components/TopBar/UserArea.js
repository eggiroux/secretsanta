import React from "react";
import styled from "styled-components";
import { FiHome, FiUser, FiLogOut } from "react-icons/fi";

import { COLORS } from "../../constants";
import { UserContext } from "../UserContext";

export const UserArea = () => {
  const { appUser } = React.useContext(UserContext);
  return (
    <Wrapper>
      <Username>{appUser.name}</Username>
      <Actions>
        <Action>
          <FiHome />
        </Action>
        <Action>
          <FiUser />
        </Action>
        <Action>
          <FiLogOut />
        </Action>
      </Actions>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Actions = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Action = styled.div`
  margin: 8px 10px;
  color: ${COLORS.background};
`;

const Username = styled.p`
  width: fit-content;
  margin: 0 auto;
`;
