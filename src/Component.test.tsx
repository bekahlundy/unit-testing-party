import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Component } from "./Component";

describe("Component", () => {
  describe("setup:", () => {
    describe("renders without errors", () => {
      it("without props passed in", () => {
        render(<Component />);
      });
      it("with props passed in", () => {
        render(<Component isColorful />);
      });
    });

    describe("rendering content:", () => {
      it("renders a specific text string", () => {
        render(<Component />);

        expect(screen.getByText("Hi there!")).toBeInTheDocument(); // full string match
        // or...
        expect(screen.getByText(/^hI THerE!$/i)).toBeInTheDocument(); // full string match, ignore case
      });

      it("renders a specific really long paragraph text string", () => {
        render(<Component />);

        expect(
          screen.getByText("Tiramisu tiramisu chocolate bar", { exact: false })
        ).toBeInTheDocument(); // substring match
        // or...
        expect(
          screen.getByText(/Tiramisu tiramisu chocolate bar/)
        ).toBeInTheDocument(); // substring match
        // or...
        expect(
          screen.getByText(/TIRAMISU TIRAMISU CHOCOLATE BAR/i)
        ).toBeInTheDocument(); // substring match, ignore case
      });
    });
  });

  describe("classNames:", () => {
    describe("prop based:", () => {
      it("applies 'is-colorful' className when isColorful prop is passed into Component", () => {
        render(<Component isColorful />);
        const header = screen.getByText("Hi there!");
        expect(header).toHaveClass("is-colorful");
        expect(header).not.toHaveClass("not-colorful");
      });

      it("applies 'not-colorful' className when isColorful prop is NOT passed into Component", () => {
        render(<Component isColorful={false} />);
        const header = screen.getByText("Hi there!");
        expect(header).not.toHaveClass("is-colorful");
        expect(header).toHaveClass("not-colorful");
      });
    });
    describe("state based:", () => {
      it("applies 'clicked' className and removes 'not-clicked' when button is clicked", () => {
        render(<Component />);
        const button = screen.getByTestId("click-me-button");

        expect(button).toHaveClass("not-clicked");
        expect(button).not.toHaveClass("clicked");

        fireEvent.click(button);

        expect(button).toHaveClass("clicked");
        expect(button).not.toHaveClass("not-clicked");
      });

      it("applies 'not-clicked' className when button is un-clicked", () => {
        render(<Component />);
        const button = screen.getByTestId("click-me-button");

        expect(button).toHaveClass("not-clicked");
        expect(button).not.toHaveClass("clicked");

        fireEvent.click(button);

        expect(button).toHaveClass("clicked");
        expect(button).not.toHaveClass("not-clicked");

        fireEvent.click(button);

        expect(button).toHaveClass("not-clicked");
        expect(button).not.toHaveClass("clicked");
      });
    });
  });
  describe("onClick", () => {
    it("renders button", () => {
      render(<Component />);
      const buttonText = "Click me!";
      const button = screen.getByTestId("click-me-button");

      expect(button).toHaveClass("not-clicked");
      expect(button).not.toHaveClass("clicked");
      expect(screen.getByText(buttonText)).toBeInTheDocument();
      expect((button as HTMLButtonElement).type).toBe("submit");
    });

    it("clicks button", () => {
      render(<Component />);
      const button = screen.getByTestId("click-me-button");

      fireEvent.click(button);

      expect(button).toHaveClass("clicked");
      expect(button).not.toHaveClass("not-clicked");
    });
    it("updates dynamic buttonText when clicked", () => {
      render(<Component />);
      const button = screen.getByTestId("click-me-button");

      fireEvent.click(button);

      expect(
        screen.getByText("🩷 Thanks for Clicking :) 🩷")
      ).toBeInTheDocument();

      fireEvent.click(button);

      expect(screen.getByText("Click me!")).toBeInTheDocument();
    });
  });

  describe("onFocus", () => {
    it("renders input", () => {
      render(<Component />);
      const input = screen.getByTestId("fancy-input");
      expect(input).toBeTruthy();
      expect((input as HTMLInputElement).type).toBe("text");
    });

    it("focuses on input", () => {
      render(<Component />);
      const input = screen.getByTestId("fancy-input");

      input.focus();

      fireEvent.change(input, {
        target: { value: "hi" },
      });

      expect(input).toHaveFocus();
    });
    it("renders helper text when input is focused", () => {
      render(<Component />);
      const input = screen.getByTestId("fancy-input");

      expect(
        screen.queryByTestId("input-focused-helper-text")
      ).not.toBeInTheDocument();

      input.focus();

      fireEvent.change(input, {
        target: { value: "hi" },
      });

      expect(input).toHaveFocus();
      expect(
        screen.getByTestId("input-focused-helper-text")
      ).toBeInTheDocument();
    });
  });

  describe("onChange", () => {
    it("renders input", () => {
      render(<Component />);
      const input = screen.getByTestId("fancy-input") as HTMLInputElement;
      expect(input).toBeTruthy();
      expect((input as HTMLInputElement).type).toBe("text");
    });

    it("changes input value", () => {
      render(<Component />);
      const input = screen.getByTestId("fancy-input") as HTMLInputElement;

      input.focus();

      fireEvent.change(input, {
        target: { value: "hi" },
      });

      expect(input.value).toBe("hi");
    });
  });
});
