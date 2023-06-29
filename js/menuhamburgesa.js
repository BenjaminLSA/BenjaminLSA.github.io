
var menuItems = document.querySelectorAll(".bars__menu");
var apartado = document.querySelector(".apartadomenu");
var l1 = document.getElementById("l1");
var l2 = document.getElementById("l2");
var l3 = document.getElementById("l3");

menuItems.forEach(function (menu) {
  menu.addEventListener("click", function () {
    var isActive = l1.classList.contains("active");
    
    if (isActive) {
      l1.classList.remove("active");
      l2.classList.remove("active");
      l3.classList.remove("active");
      l1.style.backgroundColor = "white";
      l3.style.backgroundColor = "white";
    } else {
      l1.classList.add("active");
      l2.classList.add("active");
      l3.classList.add("active");
      l1.style.backgroundColor = "white";
      l3.style.backgroundColor = "white";
    }
    
    apartado.classList.toggle("mostraapartado");
  });
});


var sobremi=document.getElementById('sobremi');
var proyectos=document.getElementById('proyectos');
var freelancer=document.getElementById('freelancerid');
var contact=document.getElementById('contact');
var redes=document.getElementById('redes');

var apartadomenu = document.querySelector(".apartadomenu");

sobremi.addEventListener('click',function(){
  apartadomenu.classList.remove("mostraapartado")
l1.classList.remove("active");
l2.classList.remove("active");
l3.classList.remove("active");
});
proyectos.addEventListener('click',function(){
  apartadomenu.classList.remove("mostraapartado")
  l1.classList.remove("active");
  l2.classList.remove("active");
  l3.classList.remove("active");
});
freelancer.addEventListener('click',function(){
  apartadomenu.classList.remove("mostraapartado")
  l1.classList.remove("active");
  l2.classList.remove("active");
  l3.classList.remove("active");
});
contact.addEventListener('click',function(){
  apartadomenu.classList.remove("mostraapartado")
  l1.classList.remove("active");
  l2.classList.remove("active");
  l3.classList.remove("active");
});
redes.addEventListener('click',function(){
  apartadomenu.classList.remove("mostraapartado")
  l1.classList.remove("active");
  l2.classList.remove("active");
  l3.classList.remove("active");
});