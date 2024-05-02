import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory/>", () => {
  test("Debe de cambiar el valor de la caja de texto", () => {
    // Arrange
    // Act
    render(<AddCategory onNewCategory={() => {}} />);
    //Se extrae el input
    const input = screen.getByRole("textbox");
    //Dispara el evento
    // screen.debug();
    fireEvent.input(input, { target: { value: "Saitama" } });
    // Assert
    expect(input.value).toBe("Saitama");
  });
  test("Debe de llamar onNewCategory si el input tiene un valor", () => {
    // Arrange
    const inputValue = "Saitama";
    const onNewCategory = jest.fn();
    // Act
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    // Assert
    expect(input.value).toBe("");
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });
  test("No debe de llamar el onNewCategory si el input esta vacio", () => {
    // Arrange

    const onNewCategory = jest.fn();
    // Act
    render(<AddCategory onNewCategory={onNewCategory} />);
    const form = screen.getByRole("form");
    fireEvent.submit(form);
    // Assert
    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
