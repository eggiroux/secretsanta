import React from "react";
import styled from "styled-components";
import { FiClose } from "react-icons/fi";

import UnstyledButton from "./UnstyledButton";

export const Popup = ({ dismiss, children }) => {
  return (
    <CenteredWrapper onMouseDown={dismiss}>
      <PopupContent
        onMouseDown={(ev) => {
          ev.stopPropagation();
        }}
      >
        <CloseButton onClick={dismiss}>
          <Circle />
          <FiClose />
        </CloseButton>
        {children}
      </PopupContent>
    </CenteredWrapper>
  );
};

const CenteredWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 200px;
  background-color: rgba(0, 0, 0, 0);
`;

const Circle = styled.div`
  position: absolute;
  height: 26px;
  width: 26px;
  left: -1px;
  top: -1px;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0);
  transition: all 100ms;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 12px;
  right: 12px;
  outline: none;
  border-radius: 100%;
  transition: all 100ms;
  padding: 4px;

  &:hover {
    transform: scale(1.1);

    & div {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;

const PopupContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  padding: 15px 40px;
  background-color: white;
  z-index: 12;
  box-shadow: 0px 0px 20px 3px rgba(41, 38, 41, 0.64);
`;
