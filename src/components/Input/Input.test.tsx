import { render, screen, fireEvent } from "@testing-library/react";
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
  it("Check that input is writable", () => {
    render(<Input />);
    const input = screen.getByLabelText("Add todo item:");
    //userEvent.type(input, "Typing");
    fireEvent.change(input, { target: { value: "Typing" } });
    expect(input).toHaveValue("Typing");
  });
});
