import React from "react";
import styled from "@emotion/styled";

const App = () => {
  return (
    <AppContainer>
      <Header>🩷✨ Unit Testing Party ✨🩷</Header>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  padding: 40px 0;
  width: 80%;
  margin: auto;
`;

const Header = styled.h1`
  padding: 20px;
  font-size: 22px;
  text-align: center;
`;

export { App };
