import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid/>", () => {
  const category = "One Punch";
  test("Debe de mostrar el loading inicialmente", () => {
    // Arrange
    // Act
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
    // Assert
  });
  test("debe de mostrar items cuando se cargan las imagenes useFetchGifs", () => {
    // Arrange
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "https:locahost/saitama.jpg",
      },
      {
        id: "123",
        title: "Goku",
        url: "https:locahost/goku.jpg",
      },
    ];
    // Act
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    // Assert
    expect(screen.getAllByRole('img').length).toBe(2)
  });
});
