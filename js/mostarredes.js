
var mostrar = document.getElementById("p_redes");
const contenedorimg = document.getElementById("contendorredesid");

mostrar.addEventListener("mouseenter", function () {
  contenedorimg.classList.add("opacityimg");
});
mostrar.addEventListener("mouseleave", function () {
  setTimeout(function () {
    contenedorimg.classList.remove("opacityimg");
  }, 5000);
});

var img1 = document.getElementById("img1id");
var img2 = document.getElementById("img1id2");
var img3 = document.getElementById("img1id3");
var img4 = document.getElementById("img1id4");
var img5 = document.getElementById("img1id5");

var texto1id = document.getElementById("accede1d");
var texto1id2 = document.getElementById("accede1d2");
var texto1id3 = document.getElementById("accede1d3");
var texto1id4 = document.getElementById("accede1d4");
var texto1id5 = document.getElementById("accede1d5");

img1.addEventListener("mouseenter", function () {
  texto1id.classList.add("mostartextoconid");
});
img1.addEventListener("mouseleave", function () {
  texto1id.classList.remove("mostartextoconid");
});

img2.addEventListener("mouseenter", function () {
  texto1id2.classList.add("mostartextoconid");
});
img2.addEventListener("mouseleave", function () {
  texto1id2.classList.remove("mostartextoconid");
});

img3.addEventListener("mouseenter", function () {
  texto1id3.classList.add("mostartextoconid");
});
img3.addEventListener("mouseleave", function () {
  texto1id3.classList.remove("mostartextoconid");
});

img4.addEventListener("mouseenter", function () {
  texto1id4.classList.add("mostartextoconid");
});
img4.addEventListener("mouseleave", function () {
  texto1id4.classList.remove("mostartextoconid");
});

img5.addEventListener("mouseenter", function () {
  texto1id5.classList.add("mostartextoconid");
});
img5.addEventListener("mouseleave", function () {
  texto1id5.classList.remove("mostartextoconid");
});
