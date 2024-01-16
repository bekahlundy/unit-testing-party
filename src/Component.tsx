import React, { useState } from "react";
import styled from "@emotion/styled";
type ComponentProps = {
  isColorful?: boolean;
};

const Component = ({ isColorful }: ComponentProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  return (
    <div>
      <StyledTitle
        isColorful={isColorful}
        className={`${isColorful ? "is-colorful" : "not-colorful"}`}
      >
        Hi there!
      </StyledTitle>
      <p>
        Tiramisu tiramisu chocolate bar lemon drops lollipop dragée ice cream.
        Muffin caramels ice cream chocolate liquorice jelly bonbon brownie
        icing. Cookie powder candy canes cupcake toffee pie pastry marzipan.
      </p>
      <StyledInput
        isFocused={isFocused}
        type="text"
        id="input"
        onFocus={() => setIsFocused(!isFocused)}
        onChange={() => setIsChanged(!isChanged)}
      ></StyledInput>
      <StyledButton
        data-testid="click-me-button"
        onClick={() => setIsClicked(!isClicked)}
        className={isClicked ? "clicked" : "not-clicked"}
        isClicked={isClicked}
      >
        {isClicked ? "🩷 Thanks for Clicking :) 🩷 " : "Click me!"}
      </StyledButton>
    </div>
  );
};

const StyledTitle = styled.h3<{ isColorful: boolean | undefined }>`
  color: ${({ isColorful }) =>
    isColorful ? "magenta" : "black"};
`;

const StyledInput = styled.input<{ isFocused: boolean }>`
  border: ${({ isFocused }) =>
    isFocused ? "12px solid yellow" : "6px solid black"};
`;

const StyledButton = styled.button<{ isClicked: boolean }>`
  margin-left:50px;
  background-color: ${({ isClicked }) => (isClicked ? "magenta" : "")};
  color: ${({ isClicked }) => (isClicked ? "pink" : "")};
`;

export { Component };
