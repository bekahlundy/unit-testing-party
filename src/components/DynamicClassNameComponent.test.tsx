import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import {
  DynamicClassNamePropComponent,
  DynamicClassNameStateComponent,
} from "./DynamicClassNameComponent";

describe("DynamicClassNamePropComponent", () => {
  it("renders without errors", () => {
    render(<DynamicClassNamePropComponent />);
  });

  it("applies 'isPink' className when isPink prop is passed in", () => {
    render(<DynamicClassNamePropComponent isPink />);
    expect(screen.getByText("Hi there!")).toHaveClass("isPink");
  });

  it("applies '' (no additional className) when isPink prop is NOT passed in", () => {
    render(<DynamicClassNamePropComponent isPink={false} />);
    expect(screen.getByText("Hi there!")).not.toHaveClass("isPink");
  });
});
describe("DynamicClassNameStateComponent", () => {
  it("renders without errors", () => {
    render(<DynamicClassNamePropComponent />);
  });
  it("applies 'clicked' className when button is clicked", () => {
    render(<DynamicClassNameStateComponent />);
    const button = screen.getByTestId("click-me-button");

    expect(button).toHaveClass("not-clicked");
    expect(button).not.toHaveClass("clicked");

    fireEvent.click(button);

    expect(button).toHaveClass("clicked");
    expect(button).not.toHaveClass("not-clicked");
  });

  it("updates dynamic button-text when clicked", () => {
    render(<DynamicClassNameStateComponent />);
    const button = screen.getByTestId("click-me-button");

    expect(button).not.toHaveClass("clicked");
    expect(button).toHaveClass("not-clicked");
    expect(screen.getByText("Click me!")).toBeInTheDocument();

    fireEvent.click(button);

    expect(button).toHaveClass("clicked");
    expect(button).not.toHaveClass("not-clicked");
    expect(screen.getByText("🩷 Thanks for Clicking :) 🩷")).toBeInTheDocument();
  });
});
