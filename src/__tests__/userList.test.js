import React from "react";
import { render, waitFor, screen } from "@testing-library/react-native";
import UserList from "../screens/UserList";
import * as api from "../services/jsonPlaceholder";

jest.mock("../services/jsonPlaceholder");

// Before all tests run, mock console.error to prevent actual error logs
// This keeps our test output clean
beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

// After all tests complete, restore the original console.error
afterAll(() => {
  console.error.mockRestore();
});

beforeEach(() => {
  jest.resetAllMocks();
});

test("shows loading initially", () => {
  api.getUsers.mockReturnValue(new Promise(() => {})); // Promise never resolves
  const { getByText } = render(<UserList />);
  expect(getByText("Loading...")).toBeTruthy();
});

test("renders user names after fetch", async () => {
  api.getUsers.mockResolvedValue([{ id: 1, name: "John" }]);

  render(<UserList />);

  // waitFor waits until callback doesn't throw
  const user = await screen.findByTestId("user");
  expect(user).toBeTruthy();
});

test("shows error message on fetch failure", async () => {
  api.getUsers.mockRejectedValue(new Error("Network error"));

  render(<UserList />);

  await waitFor(() => expect(screen.getByTestId("error")).toBeTruthy());
  expect(screen.getByText("Network error")).toBeTruthy();
});
