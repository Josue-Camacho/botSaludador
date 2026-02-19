import saludar from "./saludador";

describe("Saludador básico", () => {
  it("deberia saludar con hola", () => {
    expect(saludar()).toEqual("Hola");
  });
});
