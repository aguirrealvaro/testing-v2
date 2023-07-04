import { render, screen } from "@testing-library/react";
import { Fetch } from "./Fetch";

describe("Fetch tests", () => {
  it("Button to load users is rendered", () => {
    render(<Fetch />);
    const button = screen.getByRole("button", { name: /load users/i });
    expect(button).toHaveTextContent("Load users");
    expect(button).toBeInTheDocument();
  });
  it("List is not initially renderer", () => {
    render(<Fetch />);
    const list = screen.queryByRole("list");
    expect(list).not.toBeInTheDocument();
  });
});
