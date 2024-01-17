import React, { useState } from "react";
import styled from "@emotion/styled/macro";
import bunnyImage from "./bunny.jpg";

type ComponentProps = {
  isColorful?: boolean;
};

const Component = ({ isColorful }: ComponentProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  /**
   * I got this url from MDN's iframe example:
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
   */
  const littleMappy =
    "https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik";
  return (
    <div>
      <StyledTitle
        isColorful={isColorful}
        className={`${isColorful ? "is-colorful" : "not-colorful"}`}
      >
        Hi there!
      </StyledTitle>
      <img width="400px" src={bunnyImage} alt="happy-bunny-cartoon-hello-img" />
      <p>
        Tiramisu tiramisu chocolate bar lemon drops lollipop dragée ice cream.
        Muffin caramels ice cream chocolate liquorice jelly bonbon brownie
        icing. Cookie powder candy canes cupcake toffee pie pastry marzipan.
      </p>
      <iframe src={littleMappy} title="fun-map-iframe"></iframe>
      {isFocused && (
        <div data-testid="input-focused-helper-text">
          oooooo I am now focused..
        </div>
      )}
      <StyledInput
        isFocused={isFocused}
        type="text"
        data-testid="fancy-input"
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
  color: ${({ isColorful }) => (isColorful ? "magenta" : "black")};
`;

const StyledInput = styled.input<{ isFocused: boolean }>`
  border: ${({ isFocused }) =>
    isFocused ? "12px solid yellow" : "6px solid black"};
`;

const StyledButton = styled.button<{ isClicked: boolean }>`
  margin-left: 50px;
  background-color: ${({ isClicked }) => (isClicked ? "magenta" : "")};
  color: ${({ isClicked }) => (isClicked ? "pink" : "")};
`;

export { Component };
