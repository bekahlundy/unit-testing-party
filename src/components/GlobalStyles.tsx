import React from "react";
import styled from "@emotion/styled";

type TestInformationProps = {
  testInfo: string;
  testCoverageImg?: string;
  testNamesImg?: string;
  componentName?: string;
};

export const TestInformation = ({
  testInfo,
  testCoverageImg,
  testNamesImg,
  componentName,
}: TestInformationProps) => {
  return (
    <TestInformationContainer>
      <div>
        {testCoverageImg && (
          <StyledImg src={testCoverageImg} alt="testCoverageImg" />
        )}
        {testNamesImg && <StyledImg src={testNamesImg} alt="testNamesImg" />}
        {componentName && <p>component: {componentName}</p>}
        <Message>
          <p>{testInfo}</p>
        </Message>
      </div>
    </TestInformationContainer>
  );
};

const TestInformationContainer = styled.div`
  font-size: 12px;
`;

const Message = styled.span`
  display: flex;
`;

const StyledImg = styled.img`
  width: 400px;
  padding: 12px 0;
  border-bottom: 2px solid gray;
`;
