import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Select } from "./Select";

describe("Select tests", () => {
  it("Select and options are rendered", () => {
    render(<Select />);
    const combobox = screen.getByRole("combobox");
    expect(combobox).toBeInTheDocument();
    expect(combobox).toHaveDisplayValue("Select option");
    const option = screen.getByRole("option", { name: "perro" });
    expect(option).toBeInTheDocument();
  });
  it("Selected value is not rendered", () => {
    render(<Select />);
    const selectedValue = screen.queryByTestId("selected-animal");
    expect(selectedValue).not.toBeInTheDocument();
  });
  it("After a value is selected, the value is rendered (fire event)", () => {
    render(<Select />);
    const combobox = screen.getByRole("combobox");
    fireEvent.change(combobox, { target: { value: "perro" } });
    expect(combobox).toHaveValue("perro");
    const selectedValue = screen.getByTestId("selected-animal");
    expect(selectedValue).toBeInTheDocument();
  });
  it("After a value is selected, the value is rendered (user event)", async () => {
    render(<Select />);
    const combobox = screen.getByRole("combobox");
    await userEvent.selectOptions(combobox, "perro");
    expect(combobox).toHaveValue("perro");
    const selectedValue = screen.getByTestId("selected-animal");
    expect(selectedValue).toBeInTheDocument();
  });
});
