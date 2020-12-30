import React from "react";
import styled from "styled-components";

import { groups } from "../../data/data";

import { UserContext } from "../UserContext";

import { MemberList } from "./MemberList";
import { Suggestions } from "./Suggestions";

export const Main = () => {
  const { appUser } = React.useContext(UserContext);
  const [selectedMember, setSelectedMember] = React.useState(appUser);

  const [currentGroup, setCurrentGroup] = React.useState(
    groups.find((group) => group.id === appUser.groups[0])
  );

  //console.log(selectedMember);

  return (
    <Wrapper>
      <MemberList
        selectedMember={selectedMember}
        setSelectedMember={setSelectedMember}
        currentGroup={currentGroup}
      />
      <Suggestions
        selectedMember={selectedMember}
        currentGroup={currentGroup}
      />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  padding: 16px;
`;
