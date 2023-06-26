var agenciajs=document.getElementById('agencia');
var Aereopuertojs=document.getElementById('Aereopuerto');
var Contadorjs=document.getElementById('Contador');
var Calculadorajs=document.getElementById('Calculadora');
var Tiendajs=document.getElementById('Tienda');
var fondo=document.getElementById('proyectos');
var contenedoridimg=document.getElementById('contenedorimgid');



agenciajs.addEventListener('mouseover',function(){
    fondo.style.backgroundColor = "red";
    Aereopuertojs.style.color = "white";
    Contadorjs.style.color = "white";
    Calculadorajs.style.color = "white";
    Tiendajs.style.color = "white";
    contenedoridimg.classList.add('mostarimg');
});
agenciajs.addEventListener('mouseout',function(){
    fondo.style.backgroundColor = "";
    Aereopuertojs.style.color = "";
    Contadorjs.style.color = "";
    Calculadorajs.style.color = "";
    Tiendajs.style.color = "";
    contenedoridimg.classList.remove('mostarimg');
});

Aereopuertojs.addEventListener('mouseover',function(){
    fondo.style.backgroundColor = "black";
    agenciajs.style.color = "white";
    Aereopuertojs.style.color = "white";
    Contadorjs.style.color = "white";
    Calculadorajs.style.color = "white";
    Tiendajs.style.color = "white";
    contenedoridimg.classList.add('contenedorimg2');
    contenedoridimg.classList.add('mostrarimg2');


});
Aereopuertojs.addEventListener('mouseout',function(){
    agenciajs.style.color = "";
    fondo.style.backgroundColor = "";
    Aereopuertojs.style.color = "";
    Contadorjs.style.color = "";
    Calculadorajs.style.color = "";
    Tiendajs.style.color = "";
    contenedoridimg.classList.remove('contenedorimg2');
    contenedoridimg.classList.remove('mostrarimg2');
 

   
});

Contadorjs.addEventListener('mouseenter',function(){
    fondo.style.backgroundColor="gray";
    agenciajs.style.color="white";
    Aereopuertojs.style.color="white";
    Contadorjs.style.color="white";
    Calculadorajs.style.color="white";
    Tiendajs.style.color="white";
});
Contadorjs.addEventListener('mouseleave',function(){
    agenciajs.style.color="";
    fondo.style.backgroundColor="";
    Aereopuertojs.style.color="";
    Contadorjs.style.color="";
    Calculadorajs.style.color="";
    Tiendajs.style.color="";
});