import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { MemberList } from "./MemberList";
import { Suggestions } from "./Suggestions";

export const Main = () => {
  const { appUser, status } = useSelector((state) => state.appUser);
  const { groups, currentGroup } = useSelector((state) => state.groups);

  const [selectedMember, setSelectedMember] = React.useState(appUser.name);

  React.useEffect(() => {
    if (!appUser) {
      return;
    }
    setSelectedMember(appUser.name);
  }, [currentGroup, appUser]);

  // console.log(selectedMember);

  if (!appUser) {
    return null;
  }

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
