import React from "react";
import { render, screen } from "@testing-library/react";
import { WorkingWithText } from "./WorkingWithText";

describe("WorkingWithText", () => {
  it("renders without errors", () => {
    render(<WorkingWithText />);
  });

  describe("renders all text", () => {
    it("selects text", () => {
      render(<WorkingWithText />);

      expect(screen.getByText("Paragraph Header...")).toBeInTheDocument(); // full string match

      // or...
      expect(screen.getByText(/^paragraph header...$/i)).toBeInTheDocument(); // full string match, ignore case
    });

    it("selects long paragraph text", () => {
      render(<WorkingWithText />);

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
