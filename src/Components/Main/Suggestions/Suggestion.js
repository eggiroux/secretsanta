import React from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

import { FiTrash } from "react-icons/fi";

import { deleteSuggestion } from "../../../helpers/api-helpers";
import { removeSuggestion } from "../../../actions";

import UnstyledButton from "../../UnstyledButton";

export const Suggestion = ({ name, desc, link, suggId, from }) => {
  const { currentGroup } = useSelector((state) => state.groups);
  const { appUser } = useSelector((state) => state.appUser);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Name>
        {link ? (
          <Link target="_blank" href={link}>
            {name}
          </Link>
        ) : (
          name
        )}
      </Name>
      {desc && <Description>{desc}</Description>}
      <Options>
        {appUser.name === from && (
          <Button
            onClick={() => {
              deleteSuggestion(currentGroup._id, suggId).then((res) => {
                console.log(res);
                dispatch(removeSuggestion(res.deletedId));
              });
            }}
          >
            <FiTrash />
          </Button>
        )}
      </Options>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  position: relative;
  margin-bottom: 16px;
  border: 1px solid black;
  border-radius: 6px;
  padding: 16px;
  list-style-type: none;

  &:hover > div {
    visibility: visible;
  }
`;

const Options = styled.div`
  visibility: hidden;
  position: absolute;
  bottom: 5px;
  right: 5px;
`;

const Button = styled(UnstyledButton)``;

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
