import matchers from "@testing-library/jest-dom/matchers";
import { expect, afterEach } from "vitest";
import { server } from "../src/mocks/server";

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
