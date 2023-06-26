var h1principal=document.getElementById('proyectoh1');
var pprincipal=document.getElementById('proyectop');
var seccion1=document.getElementById('Principal');
var img1=document.getElementById('img1');
h1principal.addEventListener('mouseenter',function(){
    seccion1.style.backgroundColor='white';
    pprincipal.style.color="black";
    h1principal.style.color="black"
    img1.classList.add('opacity');
});
h1principal.addEventListener('mouseleave',function(){
    seccion1.style.backgroundColor='';
    pprincipal.style.color="";
    h1principal.style.color=""
    img1.classList.remove('opacity');
});