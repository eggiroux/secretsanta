import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { Suggestion } from "./Suggestion";

export const SuggestionList = ({ emptyString, selectedUserId, listType }) => {
  const { currentSuggestions } = useSelector((state) => state.groups);

  const [filteredSuggestions, setFilteredSuggestions] = React.useState([]);

  React.useEffect(() => {
    if (currentSuggestions) {
      if (listType === "ownList") {
        setFilteredSuggestions(
          currentSuggestions.filter(
            (suggestion) =>
              suggestion.for === selectedUserId &&
              suggestion.from === selectedUserId
          )
        );
      }

      if (listType === "othersList") {
        setFilteredSuggestions(
          currentSuggestions.filter(
            (suggestion) =>
              suggestion.for === selectedUserId &&
              suggestion.from !== selectedUserId
          )
        );
      }
    }
  }, [currentSuggestions, selectedUserId]);

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
            suggId={item.id}
            from={item.from}
            date={item.date}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ul``;
