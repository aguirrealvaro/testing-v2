import { fireEvent, render, screen } from "@testing-library/react";
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
  it("when button is clicked, loading status is displayed", async () => {
    render(<Fetch />);
    const button = screen.getByRole("button", { name: /load users/i });
    // idk it is now working
    //await userEvent.click(button);
    fireEvent.click(button);
    const loading = screen.getByTestId("loading-status");
    expect(loading).toBeInTheDocument();
  });
  it("when button is clicked, we wait until heading displays", async () => {
    render(<Fetch />);
    const button = screen.getByRole("button", { name: /load users/i });
    fireEvent.click(button);
    const heading = await screen.findByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
  });
  it("when button is clicked, we wait until list displays", async () => {
    render(<Fetch />);
    const button = screen.getByRole("button", { name: /load users/i });
    fireEvent.click(button);
    const list = await screen.findByRole("list");
    expect(list).toBeInTheDocument();
  });
  it("when button is clicked, we wait until list displays, and loading disappear", async () => {
    render(<Fetch />);
    const button = screen.getByRole("button", { name: /load users/i });
    fireEvent.click(button);
    await screen.findByRole("list");
    const loading = screen.queryByTestId("loading-status");
    expect(loading).not.toBeInTheDocument();
  });
});
