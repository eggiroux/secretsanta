import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import { DropdownMenu } from "../DropdownMenu";
import { UserContext } from "../UserContext";

export const GroupsDropDown = ({ currentMenu, dismiss }) => {
  const { userGroups, setCurrentGroupIndex, currentGroup } = React.useContext(
    UserContext
  );

  if (!userGroups) {
    return null;
  }
  return (
    <DropdownMenu
      currentMenu={currentMenu}
      left={"78px"}
      parent={"groups"}
      dismiss={dismiss}
    >
      <List>
        {userGroups.length >= 2 && (
          <SubList>
            Switch Groups
            <GroupList>
              {userGroups.map((group, index) => {
                return (
                  <GroupItem
                    key={`${group.name}`}
                    onClick={(ev) => {
                      setCurrentGroupIndex(index);
                    }}
                  >
                    {group.name}
                  </GroupItem>
                );
              })}
            </GroupList>
          </SubList>
        )}
        {currentGroup.isMod && <ListItem>Manage Group</ListItem>}
        <ListItem>Start new Group</ListItem>
      </List>
    </DropdownMenu>
  );
};

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SubList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4px;
`;

const GroupList = styled.ul`
  padding: 4px;
  padding-left: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const GroupItem = styled.li`
  width: 100%;
  padding: 4px;

  &:hover {
    background: lightgrey;
    cursor: pointer;
  }
`;

const ListItem = styled.li`
  width: 100%;
  padding: 4px;

  &:hover {
    background: lightgrey;
    cursor: pointer;
  }
`;
