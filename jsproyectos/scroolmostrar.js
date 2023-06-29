
// Función para verificar la posición del scroll y aplicar la animación
function aplicarAnimacion() {
// Obtener todos los elementos con la clase 'texto'
const elementos = document.querySelectorAll('.texto');

// Iterar sobre cada elemento
elementos.forEach(elemento => {
// Obtener la posición del elemento en relación con la ventana
const elementoPosition = elemento.getBoundingClientRect().top;
const windowHeight = window.innerHeight;

// Si el elemento está dentro de la ventana visible
if (elementoPosition < windowHeight) {
 // Agregar la clase 'mostrar' al elemento para aplicar la animación
 elemento.classList.add('mostrar');
}
});
}

// Detectar el evento de scroll y llamar a la función aplicarAnimacion
window.addEventListener('scroll', aplicarAnimacion);

// Aplicar la animación inicialmente si los elementos ya están visibles en la carga de la página
aplicarAnimacion();
