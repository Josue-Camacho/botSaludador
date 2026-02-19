import saludar from "./saludador";

const input = document.querySelector("#nombre");
const generoSelect = document.querySelector("#genero");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = input.value;
  const genero = generoSelect.value;

  div.innerHTML = "<p>" + saludar(nombre, undefined, genero) + "</p>";
});
