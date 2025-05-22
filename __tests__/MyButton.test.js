import React from "react";
// render = to render a component in a test environment
// fireEvent = to simulate user actions like press, type, etc.
import { render, fireEvent } from "@testing-library/react-native";
import MyButton from "../src/components/MyButton";

test("renders the button with title and handles press", () => {
  // Create a fake onPress function to track if it's called
  const onPressMock = jest.fn();

  // Render the button in a virtual test environment
  const { getByText } = render(
    <MyButton title="Click Me" onPress={onPressMock} />
  );

  // Try to find the text node inside the button
  const button = getByText("Click Me");

  // ✅ Assertion #1: Make sure the button text is in the document
  expect(button).toBeTruthy();

  // Simulate a tap/click on the text/button
  fireEvent.press(button);

  // ✅ Assertion #2: Make sure onPress was called when the button was pressed
  expect(onPressMock).toHaveBeenCalledTimes(1);
});
