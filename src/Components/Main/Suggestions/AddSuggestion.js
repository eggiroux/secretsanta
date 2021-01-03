import React from "react";
import styled from "styled-components";

import { addSuggestionToGroup } from "../../../helpers/api-helpers";
import { validateLink } from "../../../helpers/helpers";

export const AddSuggestion = ({
  selectedMember,
  appUserName,
  currentGroupId,
  updateList,
}) => {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");
  const [desc, setDesc] = React.useState("");

  const submitSuggestion = (ev) => {
    ev.preventDefault();
    const list = appUserName === selectedMember ? "ownList" : "othersList";
    //console.log("submitted", name, validateLink(link), desc);
    addSuggestionToGroup(currentGroupId, selectedMember, list, {
      name,
      link: validateLink(link),
      desc,
    }).then((res) => {
      if (res.success) {
        updateList(list, res.suggestion);
      }
    });
  };

  return (
    <Wrapper>
      <Title>Add A Suggestion</Title>
      <StyledForm onSubmit={submitSuggestion}>
        <InputArea>
          <LeftSide>
            <TextInput
              placeholder={"Name"}
              value={name}
              onChange={(ev) => {
                setName(ev.target.value);
              }}
            ></TextInput>
            <TextInput
              placeholder={"Link"}
              value={link}
              onChange={(ev) => {
                setLink(ev.target.value);
              }}
            ></TextInput>
          </LeftSide>
          <RightSide>
            <TextArea
              placeholder={"Description"}
              value={desc}
              onChange={(ev) => {
                setDesc(ev.target.value);
              }}
            ></TextArea>
          </RightSide>
        </InputArea>
        <SubmitButton>Suggest!</SubmitButton>
      </StyledForm>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 6px;
  margin-bottom: 16px;
  padding: 0px 16px;
`;

const StyledForm = styled.form``;

const InputArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextInput = styled.input`
  width: 100%;
  margin-bottom: 6px;
`;

const TextArea = styled.textarea`
  width: 100%;
  margin-bottom: 6px;
  height: 100%;
`;

const LeftSide = styled.div`
  padding: 4px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const RightSide = styled.div`
  width: 100%;
  padding: 4px;
  margin-bottom: 6px;
`;

const Title = styled.h3`
  color: black;
`;

const SubmitButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 8px 12px;
  border-radius: 12px;
  margin-bottom: 8px;
`;
