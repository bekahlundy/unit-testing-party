import React from "react";
import styled from "@emotion/styled";

const Test = ({ testTitle, children }) => {
  return (
    <Container>
      <div>{testTitle}</div>
      <Children>{children}</Children>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 30px 0px;
  border-bottom: 2px solid gray;
  font-size: 12px;
`;

const Children = styled.div`
  /* display: none; */
  min-width: 50%;
  max-width: 50%;
`;

export { Test };
