
window.addEventListener("scroll", function () {
  var section = document.getElementById("sobre_mi");
  var rect = section.getBoundingClientRect();

  // Verificar si la sección está visible en la ventana gráfica
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    // La sección es visible
    document.body.classList.add("white-text");
  } else {
    // La sección no es visible
    document.body.classList.remove("white-text");
  }
});
