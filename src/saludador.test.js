import saludar from "./saludador";

describe("Saludador básico", () => {
  it("deberia saludar con hola si no hay nombre", () => {
    expect(saludar()).toEqual("Hola");
  });

  it("deberia saludar con nombre si se proporciona", () => {
    expect(saludar("Juan")).toEqual("Hola, Juan");
  });
});
