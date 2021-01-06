import React from "react";
import styled from "styled-components";

import { AddSuggestion } from "./AddSuggestion";

import { SuggestionList } from "./SuggestionList";
import { useSelector } from "react-redux";

export const Suggestions = ({ selectedMember }) => {
  const { appUser } = useSelector((state) => state.appUser);

  let emptyOwnListText =
    "This list is empty. Please ask this person to add some suggestions!";

  let emptyOthersListText = `This list is empty. Add some suggestions for ${selectedMember}!`;

  if (selectedMember === appUser.name) {
    emptyOwnListText =
      "Your list is empty. Add some suggestions to help others find ideas for you!";
  }

  return (
    <Wrapper>
      <AddSuggestion selectedMember={selectedMember} />
      <SuggestionsArea>
        <Title>Suggestions</Title>
        <Subtitle>{`These suggestions were added by ${selectedMember}`}</Subtitle>
        <SuggestionList
          listType={"ownList"}
          emptyString={emptyOwnListText}
          selectedUserId={selectedMember}
        />

        {selectedMember !== appUser.name && (
          <>
            <Splitter />
            <Title>Secret Suggestions</Title>
            <Subtitle>{`These suggestions were added by others in your group, and are hidden to ${selectedMember}`}</Subtitle>
            <SuggestionList
              listType={"othersList"}
              emptyString={emptyOthersListText}
              selectedUserId={selectedMember}
            />
          </>
        )}
      </SuggestionsArea>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: 8px;

  width: 100%;
`;

const SuggestionsArea = styled.div`
  padding: 0px 16px;
  border: 1px solid black;
  border-radius: 6px;
`;

const Title = styled.h3`
  color: black;
`;

const Subtitle = styled.p`
  color: black;
  font-style: italic;
  font-size: 0.85rem;
  margin-top: -8px;
`;

const Splitter = styled.div`
  height: 6px;
  margin-left: -16px;
  margin-right: -16px;
  background-color: red;
`;
