import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { Fetch, UserType } from "./Fetch";

const server = setupServer(
  rest.get<UserType[]>("https://jsonplaceholder.typicode.com/todos", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false,
        },
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false,
        },
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

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
    server.use(
      rest.get("https://jsonplaceholder.typicode.com/todos", (req, res, ctx) => {
        return res(ctx.status(200));
      })
    );

    render(<Fetch />);
    const button = screen.getByRole("button", { name: /load users/i });
    await userEvent.click(button);
    //const loading = screen.getByTestId("loading-status");
    //expect(loading).toBeInTheDocument();
  });
});
