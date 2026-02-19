function obtenerSaludoPorHora(hora, idioma) {
  if (idioma === "en") {
    if (hora >= 0 && hora < 12) return "Good morning";
    if (hora >= 12 && hora < 19) return "Good afternoon";
    return "Good evening";
  }

  // español por defecto
  if (hora >= 0 && hora < 12) return "Buenos días";
  if (hora >= 12 && hora < 19) return "Buenas tardes";
  return "Buenas noches";
}

function obtenerTitulo(genero, edad, idioma) {
  if (idioma === "en") {
    if (edad !== undefined && edad < 30) return "young";
    if (genero === "M") return "Mr.";
    if (genero === "F") return "Ms.";
    return "";
  }

  // español
  if (edad !== undefined && edad < 18) return "joven";
  if (genero === "M") return "señor";
  if (genero === "F") return "señora";
  return "";
}

function saludar(nombre, hora, genero, edad, idioma = "es") {
  const horaActual = hora !== undefined ? hora : new Date().getHours();
  const saludoBase = obtenerSaludoPorHora(horaActual, idioma);
  const titulo = obtenerTitulo(genero, edad, idioma);

  if (nombre) {
    if (titulo) {
      return saludoBase + ", " + titulo + " " + nombre;
    }
    return saludoBase + ", " + nombre;
  }

  return saludoBase;
}

export default saludar;
