import saludar from "./saludador";

const input = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = input.value;
  div.innerHTML = "<p>" + saludar(nombre) + "</p>";
});
