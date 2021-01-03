import React from "react";
import styled from "styled-components";

import { groups } from "../../data/data";

import { UserContext } from "../UserContext";

import { MemberList } from "./MemberList";
import { Suggestions } from "./Suggestions";

export const Main = () => {
  const { appUser, currentGroup } = React.useContext(UserContext);

  const [selectedMember, setSelectedMember] = React.useState(appUser.name);

  // console.log(selectedMember);

  return (
    <Wrapper>
      <MemberList
        selectedMember={selectedMember}
        setSelectedMember={setSelectedMember}
        currentGroup={currentGroup}
        appUserName={appUser.name}
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
