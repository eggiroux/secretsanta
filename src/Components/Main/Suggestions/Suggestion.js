import React from "react";
import styled from "styled-components";

export const Suggestion = ({ name, desc, link }) => {
  if (link) {
    return (
      <Wrapper>
        <Name>
          <Link target="_blank" href={link}>
            {name}
          </Link>
        </Name>
        {desc && <Description>{desc}</Description>}
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Name>{name}</Name>
      {desc && <Description>{desc}</Description>}
    </Wrapper>
  );
};

const Wrapper = styled.li`
  margin-bottom: 16px;
  border: 1px solid black;
  border-radius: 6px;
  padding: 16px;
  list-style-type: none;
`;

const Name = styled.p`
  color: black;
  text-align: left;
`;

const Link = styled.a`
  color: black;
  font-weight: bold;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }
`;

const Description = styled.p`
  color: red;
  text-align: left;
`;
