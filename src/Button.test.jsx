import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import jest-dom for extended matchers
import Button from "./Button";

it("renders the button with the correct label", () => {
  const { getByText } = render(<Button label="Click Me" />);
  expect(getByText("Click Me")).toBeInTheDocument();
});

it("calls the onClick handler when clicked", () => {
  const handleClick = jest.fn();
  const { getByText } = render(
    <Button label="Click Me" onClick={handleClick} />
  );
  fireEvent.click(getByText("Click Me"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
