function irAVideo(carrera) {
  window.location.href = `video.html?carrera=${carrera}`;
}

function getParametro(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function cargarVideo() {
  const carrera = getParametro("carrera");
  const video = document.getElementById("video-carrera");
  const titulo = document.getElementById("titulo-video");

  const videos = {
    medicina: "../videos-1/Medicina.mp4",
    ingenieria: "../videos-1/Ingenieria.mp4",
    diseno: "../videos-1/Diseño.mp4",
    gastronomia: "../videos-1/Gastronomia.mp4",
    administracion: "../videos-1/Administración.mp4"
  };

  if (carrera && videos[carrera]) {
    titulo.textContent = `Simulación: ${capitalize(carrera)}`;
    video.src = videos[carrera];
  } else {
    titulo.textContent = "Carrera no válida o no seleccionada.";
    video.style.display = "none";
  }
}

function recomendarCarrera() {
  const area = document.getElementById("area").value;
  const estilo = document.getElementById("estilo").value;
  const resultado = document.getElementById("resultado");

  if (!area || !estilo) {
    resultado.textContent = "Por favor selecciona ambas opciones.";
    resultado.classList.remove("oculto");
    return;
  }

  let recomendacion = "";
let carreraRelacionada = "";

if (area === "tecnologia" && estilo === "investigacion") {
  recomendacion = "Inteligencia Artificial";
  carreraRelacionada = "Ingeniería ⚙️";
} else if (area === "tecnologia" && estilo === "creativo") {
  recomendacion = "Diseño UX/UI";
  carreraRelacionada = "Diseño Gráfico 🎨";
} else if (area === "tecnologia" && estilo === "practico") {
  recomendacion = "Desarrollo Web";
  carreraRelacionada = "Ingeniería ⚙️";
} else if (area === "tecnologia" && estilo === "social") {
  recomendacion = "Tecnologías Educativas";
  carreraRelacionada = "Administración 📊";

} else if (area === "salud" && estilo === "investigacion") {
  recomendacion = "Biotecnología";
  carreraRelacionada = "Medicina 🏥";
} else if (area === "salud" && estilo === "creativo") {
  recomendacion = "Terapia Ocupacional Creativa";
  carreraRelacionada = "Medicina 🏥";
} else if (area === "salud" && estilo === "practico") {
  recomendacion = "Enfermería";
  carreraRelacionada = "Medicina 🏥";
} else if (area === "salud" && estilo === "social") {
  recomendacion = "Psicología Clínica";
  carreraRelacionada = "Medicina 🏥";

} else if (area === "negocios" && estilo === "investigacion") {
  recomendacion = "Economía Analítica";
  carreraRelacionada = "Administración 📊";
} else if (area === "negocios" && estilo === "creativo") {
  recomendacion = "Marketing Digital";
  carreraRelacionada = "Administración 📊";
} else if (area === "negocios" && estilo === "practico") {
  recomendacion = "Gestión Comercial";
  carreraRelacionada = "Administración 📊";
} else if (area === "negocios" && estilo === "social") {
  recomendacion = "Gestión de Talento Humano";
  carreraRelacionada = "Administración 📊";

} else if (area === "arte" && estilo === "investigacion") {
  recomendacion = "Historia del Arte";
  carreraRelacionada = "Diseño Gráfico 🎨";
} else if (area === "arte" && estilo === "creativo") {
  recomendacion = "Ilustración Digital";
  carreraRelacionada = "Diseño Gráfico 🎨";
} else if (area === "arte" && estilo === "practico") {
  recomendacion = "Producción Multimedia";
  carreraRelacionada = "Diseño Gráfico 🎨";
} else if (area === "arte" && estilo === "social") {
  recomendacion = "Gestión Cultural";
  carreraRelacionada = "Administración 📊";

} else if (area === "educacion" && estilo === "investigacion") {
  recomendacion = "Desarrollo Curricular";
  carreraRelacionada = "Administración 📊";
} else if (area === "educacion" && estilo === "creativo") {
  recomendacion = "Educación Artística";
  carreraRelacionada = "Diseño Gráfico 🎨";
} else if (area === "educacion" && estilo === "practico") {
  recomendacion = "Educación Técnica";
  carreraRelacionada = "Gastronomía 🍳";
} else if (area === "educacion" && estilo === "social") {
  recomendacion = "Gestión Educativa";
  carreraRelacionada = "Administración 📊";

} else {
  recomendacion = "Carrera indefinida, prueba con otras opciones.";
  carreraRelacionada = "";
}

resultado.textContent = `Especialización sugerida: ${recomendacion}${
  carreraRelacionada ? " | Carrera relacionada: " + carreraRelacionada : ""
}`;
resultado.classList.remove("oculto");
}

if (window.location.pathname.endsWith("video.html")) {
  window.onload = cargarVideo;
}
