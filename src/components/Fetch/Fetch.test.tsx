import { render, screen } from "@testing-library/react";
import { Fetch } from "./Fetch";

describe("Fetch tests", () => {
  it("Button to load users is rendered", () => {
    render(<Fetch />);
    const button = screen.getByRole("button", { name: /load users/i });
    expect(button).toBeInTheDocument();
  });
});
