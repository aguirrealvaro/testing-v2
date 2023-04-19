import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./Input";

//const user = userEvent.setup();

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
});
