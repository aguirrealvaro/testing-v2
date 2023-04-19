import { render, screen } from "@testing-library/react";
import { Input } from "./Input";

describe("Input tests", () => {
  it("Input is rendered", () => {
    render(<Input />);
    const input = screen.getByLabelText("Add todo item:");
    expect(input).toBeInTheDocument();
  });
});
