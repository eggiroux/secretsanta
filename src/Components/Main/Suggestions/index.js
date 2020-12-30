import React from "react";
import styled from "styled-components";

import { Suggestion } from "./Suggestion";
import { UserContext } from "../../UserContext";

export const Suggestions = ({ selectedMember, currentGroup }) => {
  const { appUser } = React.useContext(UserContext);

  const ownList = currentGroup.members[selectedMember.id].ownList;
  const othersList = currentGroup.members[selectedMember.id].othersList;

  let emptyOwnListText =
    "This list is empty. Please ask this person to add some suggestions!";

  let emptyOthersListText = `This list is empty. Add some suggestions for ${selectedMember.name}!`;

  if (selectedMember.id === appUser.id) {
    emptyOwnListText =
      "Your list is empty. Add some suggestions to help others find ideas for you!";
  }

  return (
    <Wrapper>
      <Title>Suggestions</Title>
      <Subtitle>{`These suggestions were added by ${selectedMember.name}`}</Subtitle>
      <SuggestionList>
        {ownList.length === 0 && (
          <Suggestion name={emptyOwnListText} desc={""} link={""} />
        )}
        {ownList.map((item, index) => {
          return (
            <Suggestion
              key={`${item.name} + ${index}`}
              name={item.name}
              desc={item.desc}
              link={item.link}
            />
          );
        })}
      </SuggestionList>

      {selectedMember.id !== appUser.id && (
        <>
          <Splitter />
          <Title>Secret Suggestions</Title>
          <Subtitle>{`These suggestions were added by others in your group, and are hidden to ${selectedMember.name}`}</Subtitle>
          <SuggestionList>
            {othersList.length === 0 && (
              <Suggestion name={emptyOthersListText} desc={""} link={""} />
            )}
            {othersList.map((item, index) => {
              return (
                <Suggestion
                  key={`${item.name} + ${index}`}
                  name={item.name}
                  desc={item.desc}
                  link={item.link}
                />
              );
            })}
          </SuggestionList>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: 8px;
  padding: 0px 16px;
  width: 100%;
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

const SuggestionList = styled.ul``;