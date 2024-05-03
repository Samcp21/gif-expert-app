import { render, renderHook, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en <GitExpertApp/>", () => {
  test("Match con el Snapshot", () => {
    // Arrange
    // Act
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
    screen.debug();
    // Assert
  });
  test("Valores iniciales", () => {
    // Arrange

    // Act
    render(<GifExpertApp />);
    const titulo = screen.getByRole("heading");
    console.log(titulo);
    // Assert
  });
});
