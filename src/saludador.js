function obtenerSaludoPorHora(hora) {
  if (hora >= 0 && hora < 12) {
    return "Buenos días";
  }
  if (hora >= 12 && hora < 19) {
    return "Buenas tardes";
  }
  return "Buenas noches";
}

function saludar(nombre, hora) {
  const horaActual = hora !== undefined ? hora : new Date().getHours();
  const saludoBase = obtenerSaludoPorHora(horaActual);

  if (nombre) {
    return saludoBase + ", " + nombre;
  }

  return saludoBase;
}

export default saludar;
