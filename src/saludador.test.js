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

describe("Saludador con genero", () => {

  it("deberia saludar con señor si es masculino", () => {
    expect(saludar("Juan", 9, "M")).toEqual("Buenos días, señor Juan");
  });

  it("deberia saludar con señora si es femenino", () => {
    expect(saludar("Maria", 9, "F")).toEqual("Buenos días, señora Maria");
  });

});
