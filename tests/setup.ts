import matchers from "@testing-library/jest-dom/matchers";
//import { cleanup } from "@testing-library/react";
import { expect, afterEach } from "vitest";
import { server } from "../src/mocks/server";

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// without msw
// runs a cleanup after each test case (e.g. clearing jsdom)
/* afterEach(() => {
  cleanup();
}); */

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
