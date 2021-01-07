import React from "react";
import styled from "styled-components";

export const LoginRoute = () => {
  return (
    <Wrapper>
      <Title>Welcome! Please Create an Account</Title>
      <StyledForm></StyledForm>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 400px;
  display: flex;
  margin: 0 auto;
`;

const Title = styled.h2``;

const StyledForm = styled.form``;
