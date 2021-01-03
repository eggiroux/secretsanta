import React from "react";
import styled from "styled-components";

import { Member } from "./Member";

export const MemberList = ({
  selectedMember,
  setSelectedMember,
  currentGroup,
  appUserName,
}) => {
  return (
    <Wrapper>
      <Title>{currentGroup.name}</Title>

      <Members>
        {Object.keys(currentGroup.members).map((member, index) => {
          return (
            <Member
              key={`${member}-${index}`}
              name={member}
              isSelected={selectedMember === member}
              isYou={member === appUserName}
              onClick={() => {
                setSelectedMember(member);
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
  height: fit-content;
`;

const Title = styled.h3`
  color: black;
  text-align: center;
`;

const Members = styled.ul``;
