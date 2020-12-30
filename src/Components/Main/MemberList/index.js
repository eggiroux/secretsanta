import React from "react";
import styled from "styled-components";

import { users } from "../../../data/data";
import { UserContext } from "../../UserContext";

import { Member } from "./Member";

export const MemberList = ({
  selectedMember,
  setSelectedMember,
  currentGroup,
}) => {
  const { appUser } = React.useContext(UserContext);

  return (
    <Wrapper>
      <Title>{currentGroup.name}</Title>

      <Members>
        {Object.keys(currentGroup.members).map((memberId, index) => {
          const currentMember = users.find(
            (user) => user.id === Number(memberId)
          );
          return (
            <Member
              key={`${currentMember.name}+ ${index}`}
              name={currentMember.name}
              isSelected={selectedMember.id === currentMember.id}
              onClick={() => {
                setSelectedMember(currentMember);
              }}
            />
          );
        })}
      </Members>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 300px;
  padding: 0px 16px;
  border: 1px solid black;
  border-radius: 6px;
`;

const Title = styled.h3`
  color: black;
  text-align: center;
`;

const Members = styled.ul``;
