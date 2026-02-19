function obtenerSaludoPorHora(hora) {
  if (hora >= 0 && hora < 12) return "Buenos días";
  if (hora >= 12 && hora < 19) return "Buenas tardes";
  return "Buenas noches";
}

function obtenerTitulo(genero, edad) {
  if (edad !== undefined && edad < 18) {
    return "joven";
  }

  if (genero === "M") return "señor";
  if (genero === "F") return "señora";

  return "";
}

function saludar(nombre, hora, genero, edad) {
  const horaActual = hora !== undefined ? hora : new Date().getHours();
  const saludoBase = obtenerSaludoPorHora(horaActual);
  const titulo = obtenerTitulo(genero, edad);

  if (nombre) {
    if (titulo) {
      return saludoBase + ", " + titulo + " " + nombre;
    }
    return saludoBase + ", " + nombre;
  }

  return saludoBase;
}

export default saludar;
