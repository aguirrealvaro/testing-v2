import { fireEvent, render, screen } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
import { Select } from "./Select";

describe("Select tests", () => {
  test("renders the correct content", () => {
    render(<Select />);
    const combobox = screen.getByRole("combobox");
    expect(combobox).toBeInTheDocument();
    expect(combobox).toHaveDisplayValue("Select option");
    const option = screen.getByRole("option", { name: "perro" });
    expect(option).toBeInTheDocument();
  });
  /* test("select option, animal render", () => {
    render(<Select />);
    expect(screen.queryByTestId("selected-animal")).toBeNull();
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    //userEvent.selectOptions(select, "perro");
    fireEvent.change(select, { target: { value: "perro" } });
    expect(select).toHaveValue("perro");
    expect(screen.getByTestId("selected-animal")).toBeInTheDocument();
  }); */
});
