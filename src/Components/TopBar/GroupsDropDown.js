import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { COLORS } from "../../constants";

import { changeCurrentGroup } from "../../actions";
import { DropdownMenu } from "../DropdownMenu";

export const GroupsDropDown = ({ currentMenu, dismiss }) => {
  const dispatch = useDispatch();
  const { groups, currentGroup } = useSelector((state) => state.groups);

  if (groups.length === 0) {
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
        {groups.length >= 2 && (
          <SubList>
            Switch Groups
            <GroupList>
              {groups.map((group, index) => {
                return (
                  <GroupItem
                    key={`${group.name}`}
                    onClick={(ev) => {
                      dispatch(changeCurrentGroup(index));
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
