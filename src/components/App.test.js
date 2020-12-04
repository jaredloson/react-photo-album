import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders heading", () => {
  render(<App />);
  const headingEl = screen.getByText(/Hello World/i);
  expect(headingEl).toBeInTheDocument();
});
