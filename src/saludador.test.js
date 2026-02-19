import saludar from "./saludador";

describe("Saludador con hora", () => {

  it("deberia saludar con buenos dias en la mañana", () => {
    expect(saludar("Juan", 9)).toEqual("Buenos días, Juan");
  });

  it("deberia saludar con buenas tardes en la tarde", () => {
    expect(saludar("Juan", 15)).toEqual("Buenas tardes, Juan");
  });

  it("deberia saludar con buenas noches en la noche", () => {
    expect(saludar("Juan", 21)).toEqual("Buenas noches, Juan");
  });

});
