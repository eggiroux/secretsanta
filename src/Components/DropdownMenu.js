import React from "react";
import styled from "styled-components";

export const DropdownMenu = ({
  currentMenu,
  dismiss,
  children,
  parent,
  left,
}) => {
  if (currentMenu !== parent) {
    return null;
  }

  const styles = {
    left: left,
  };

  return (
    <DropdownWrapper onClick={dismiss}>
      <MenuContent
        style={styles}
        onMouseDown={(ev) => {
          ev.stopPropagation();
        }}
      >
        {children}
      </MenuContent>
    </DropdownWrapper>
  );
};

const DropdownWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0);
`;

const MenuContent = styled.div`
  position: relative;
  top: 64px;
  width: 200px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  padding: 10px 8px;
  background-color: white;
  z-index: 12;
  box-shadow: 0px 0px 20px 3px rgba(41, 38, 41, 0.64);
`;
