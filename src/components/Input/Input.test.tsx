import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./Input";

describe("Input tests", () => {
  it("Title is rendered", () => {
    render(<Input />);
    const title = screen.getByRole("heading", { level: 2 });
    expect(title).toBeInTheDocument();
  });
  it("Input is rendered", () => {
    render(<Input />);
    const input = screen.getByLabelText("Add todo item:");
    expect(input).toBeInTheDocument();
  });
  it("Button is rendered", () => {
    render(<Input />);
    const button = screen.getByRole("button", { name: /add/i });
    expect(button).toBeInTheDocument();
  });
  it("List is not initially rendered", () => {
    render(<Input />);
    const list = screen.queryByRole("list");
    expect(list).not.toBeInTheDocument();
  });
  it("Check that input is writable (fireEvent)", () => {
    render(<Input />);
    const input = screen.getByLabelText("Add todo item:");
    fireEvent.change(input, { target: { value: "Typing" } });
    expect(input).toHaveValue("Typing");
  });
  it("Check that input is writable (user-event)", async () => {
    render(<Input />);
    const input = screen.getByLabelText("Add todo item:");
    await userEvent.type(input, "Typing");
    expect(input).toHaveValue("Typing");
  });
  it("Check that after typing the input and pressed the button, the input is cleared", async () => {
    render(<Input />);
    const input = screen.getByLabelText("Add todo item:");
    await userEvent.type(input, "Something");
    expect(input).toHaveValue("Something");
    const button = screen.getByRole("button", { name: /add/i });
    await userEvent.click(button);
    expect(input).toHaveValue("");
  });
  it("Check that list is render after sending a value, and it has a single item list", async () => {
    render(<Input />);
    const input = screen.getByLabelText("Add todo item:");
    const button = screen.getByRole("button", { name: /add/i });
    const list = screen.queryByRole("list");
    expect(list).not.toBeInTheDocument();
    await userEvent.type(input, "Something");
    await userEvent.click(button);
    const renderedList = screen.getByRole("list");
    expect(renderedList).toBeInTheDocument();
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(1);
  });
  it("Check that list is render after sending a value, and it has 2 items list", async () => {
    render(<Input />);
    const input = screen.getByLabelText("Add todo item:");
    const button = screen.getByRole("button", { name: /add/i });
    const list = screen.queryByRole("list");
    expect(list).not.toBeInTheDocument();
    await userEvent.type(input, "Something");
    await userEvent.click(button);
    const renderedList = screen.getByRole("list");
    expect(renderedList).toBeInTheDocument();
    await userEvent.type(input, "Something else");
    await userEvent.click(button);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(2);
  });
});
