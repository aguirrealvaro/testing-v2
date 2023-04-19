import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button tests", () => {
  it("Button renders", () => {
    render(<Button />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
