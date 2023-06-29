
var menu = document.querySelectorAll('.menu');
var apartados = document.querySelector('.apartadosmenu2');

var h1select = document.querySelector('.h1');
var h2select = document.querySelector('.h2');
var h3select = document.querySelector('.h3');
var h4select = document.querySelector('.h4');
var h5select = document.querySelector('.h5');

var br1 = document.getElementById('barra1id');
var br2 = document.getElementById('barra2id');
var br3 = document.getElementById('barra3id');

menu.forEach(function (menus) {
menus.addEventListener("click", function () {
var activado = br1.classList.contains('activado');

if (activado) {
br1.classList.remove("activado");
br2.classList.remove("activado");
br3.classList.remove("activado");
br1.style.backgroundColor = "white";
br3.style.backgroundColor = "white";
apartados.style.opacity = 0;
} else {
br1.classList.add("activado");
br2.classList.add("activado");
br3.classList.add("activado");
br1.style.backgroundColor = "white";
br3.style.backgroundColor = "white";
apartados.style.opacity = 1;
apartados.style.zIndex = "10";
}
});
});

function resetearApartados() {
apartados.style.opacity = 0;
apartados.style.zIndex = "initial";
br1.classList.remove("activado");
br2.classList.remove("activado");
br3.classList.remove("activado");
}

h1select.addEventListener('click', resetearApartados);
h2select.addEventListener('click', resetearApartados);
h3select.addEventListener('click', resetearApartados);
h4select.addEventListener('click', resetearApartados);
h5select.addEventListener('click', resetearApartados);

