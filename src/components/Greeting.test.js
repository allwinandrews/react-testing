import { render, screen } from "@testing-library/react";
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
});
