import React from "react";
import styled from "styled-components";

import { Suggestion } from "./Suggestion";

export const SuggestionList = ({
  emptyString,
  selectedUserId,
  suggestions,
  listType,
}) => {
  let filteredSuggestions = [];

  if (listType === "ownList") {
    filteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.for === selectedUserId && suggestion.from === selectedUserId
    );
  }

  if (listType === "othersList") {
    filteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.for === selectedUserId && suggestion.from !== selectedUserId
    );
  }

  if (filteredSuggestions.length === 0) {
    return <Suggestion name={emptyString} desc={""} link={""} />;
  }

  return (
    <Wrapper>
      {filteredSuggestions.map((item, index) => {
        return (
          <Suggestion
            key={`${item.name} + ${index}`}
            name={item.name}
            desc={item.desc}
            link={item.link}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ul``;
