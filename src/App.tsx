import React from "react";
import // DynamicClassNamePropComponent,
// DynamicClassNameStateComponent,
"./components/Component.tsx";
// import { WorkingWithText } from "./components/WorkingWithText.tsx";
// import { Test } from "./components/Test.tsx";
import styled from "@emotion/styled";
import { DynamicClassNameStateComponent } from "./components/Component.tsx";
// import DynamicClassNameComponentImg from "./components/images/DynamicClassNameComponent.png";
// import DynamicClassNameComponentTestsImg from "./components/images/DynamicClassNameComponent-tests.png";
// import html from "../coverage/lcov-report/index.html";
// import template from { __html: __html };÷

// const iframe = () => {
//   return {
//     __html:
//       '<iframe src="../coverage/lcov-report/index.html" width="540" height="450"></iframe>',
//   };
// }

const App = () => {
  return (
    <AppContainer>
      <Header>🩷✨ Unit Testing Party ✨🩷</Header>
      <DynamicClassNameStateComponent />
      {/* <div dangerouslySetInnerHTML={iframe()} /> */}
      {/* <iframe
        src="../coverage/lcov-report/index.html"
        height="200"
        width="300"
        title="Iframe Example"
      ></iframe> */}
      {/* <Container>
        <div>testing classname changes</div>
        <BodyContainer>
          <StyledImg src={DynamicClassNameComponentImg} alt="testCoverageImg" />
          <StyledImg
            src={DynamicClassNameComponentTestsImg}
            alt="testNamesImg"
          />p
          <p>component: DynamicClassNamePropComponent</p>
          <TestLine>✅ renders without errors</TestLine>
          <TestLine>
            ✅ applies 'isPink' className when isPink prop is passed in
          </TestLine>
          <TestComponent>
            <DynamicClassNamePropComponent isPink />
          </TestComponent>
          <TestLine>
            ✅ applies '' (no additional className) when isPink prop is NOT
            passed in
          </TestLine>
          <TestComponent>
            <DynamicClassNamePropComponent />
          </TestComponent>
          <p>component: DynamicClassNameStateComponent</p>
          <TestLine>✅ renders without errors</TestLine>
          <TestLine>
            ✅ applies 'clicked' className when button is clicked
          </TestLine>
          <TestComponent>
            <DynamicClassNameStateComponent />
          </TestComponent>
          <TestLine>✅ updates dynamic button-text when clicked</TestLine>
          <TestComponent>
            <DynamicClassNameStateComponent />
          </TestComponent>
        </BodyContainer>
      </Container> */}
    </AppContainer>
  );
};

// const Container = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: baseline;
//   padding: 30px 0px;
//   border-bottom: 2px solid gray;
//   font-size: 12px;
// `;

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

// const StyledDynamicClassNameStateComponent = styled(
//   DynamicClassNameStateComponent
// )`
//   margin-left: 24px;
// `;

// const TestLine = styled.p`
//   margin-left: 24px;
// `;

// const TestComponent = styled.div`
//   margin-left: 24px;
// `;

// const BodyContainer = styled.body`
//   /* padding: 40px 0; */
//   min-width: 50%;
//   max-width: 50%;
// `;

// const StyledImg = styled.img`
//   width: 400px;
//   padding: 12px 0;
//   border-bottom: 2px solid gray;
// `;

export { App };
