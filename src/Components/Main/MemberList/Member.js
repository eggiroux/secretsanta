import React from "react";
import styled from "styled-components";

export const Member = ({ name, isSelected, onClick, isYou }) => {
  if (isSelected) {
    return (
      <Wrapper>
        <SelectedName>
          {name}
          {isYou && " (← you!)"}
        </SelectedName>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Name onClick={onClick}>
        {name} {isYou && " (← you!)"}
      </Name>
    </Wrapper>
  );
};

const Wrapper = styled.li``;

const Name = styled.p`
  color: black;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

const SelectedName = styled.p`
  color: red;
  text-align: center;
`;
