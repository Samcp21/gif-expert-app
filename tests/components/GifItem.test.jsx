import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en <GifItem/>", () => {
  const title = "Dragon ball";
  const url =
    "https://media0.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=46f5858dmmeg5wh2wigtfmbc7mkh2ayb7uyfm72hbjxlzyqt&ep=v1_gifs_search&rid=giphy.gif&ct=g";
  test("Match con el Snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    //Se hace una captura del codigo
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    //Acceder a la etiqueta img
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });
  test("debe de mostrar el titulo en el componente", () => {
    render(<GifItem title={title} url={url} />);
    //toBeTruthy existe el elemento
    expect(screen.getByText(title)).toBeTruthy();
  });
});
