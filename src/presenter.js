import saludar from "./saludador";

const input = document.querySelector("#nombre");
const generoSelect = document.querySelector("#genero");
const edadInput = document.querySelector("#edad");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = input.value;
  const genero = generoSelect.value;
  const edad = edadInput.value ? Number(edadInput.value) : undefined;

  div.innerHTML = "<p>" + saludar(nombre, undefined, genero, edad) + "</p>";
});
