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

describe("Saludador segun edad", () => {

  it("deberia usar joven si es menor de edad", () => {
    expect(saludar("Pedro", 9, "M", 15))
      .toEqual("Buenos días, joven Pedro");
  });

  it("deberia usar señor si es mayor de edad masculino", () => {
    expect(saludar("Juan", 9, "M", 30))
      .toEqual("Buenos días, señor Juan");
  });

  it("deberia usar señora si es mayor de edad femenino", () => {
    expect(saludar("Maria", 9, "F", 25))
      .toEqual("Buenos días, señora Maria");
  });

});

describe("Saludador idioma español", () => {

  it("deberia saludar en español cuando idioma es es", () => {
    expect(saludar("Juan", 9, "M", 30, "es"))
      .toEqual("Buenos días, señor Juan");
  });

});

describe("Saludador idioma ingles", () => {

  it("deberia saludar en ingles en la mañana", () => {
    expect(saludar("John", 9, "M", 30, "en"))
      .toEqual("Good morning, Mr. John");
  });

  it("deberia usar young si es menor", () => {
    expect(saludar("John", 9, "M", 15, "en"))
      .toEqual("Good morning, young John");
  });

});
