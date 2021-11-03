import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders hello world as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ..nothing here yet

    // Assert
    const helloWorldElement = screen.getByText(
      "Hello World"
      // ,{exact:true} // default
    );
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders p tag as a text if the button was not clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ..nothing here yet

    // Assert
    const pTagElement = screen.getByText("p tag");
    expect(pTagElement).toBeInTheDocument();
  });

  test("renders changed if the button was clicked", () => {
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("changed");
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render p tag if the button was clicked", () => {
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText("p tag");
    expect(outputElement).toBeNull();
  });
});
