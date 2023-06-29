var javascriptimg=document.getElementById('javascrip');
var javaimg=document.getElementById('javaid');
var pythonimg=document.getElementById('pythonid');
var cimg=document.getElementById('circuloid');
var iphoneid=document.getElementById('iphonid');

var relojiphoneid=document.getElementById('relojiphone');
var barra=document.getElementById('barraappsid');
var apps=document.getElementById('imgappsphoneid');

var contenedorsite=document.getElementById('imgpaginasid');
var palabrassiteweb=document.getElementById('debajodeappsid');

/* img */
var restaurante=document.getElementById('restauranteid');
var aereopuerto=document.getElementById('aereopuertoid');
var fotografo=document.getElementById('cameraid');
var galeria=document.getElementById('galeriaid');


restaurante.addEventListener('click',function(){
  iphoneid.style.backgroundImage="url(/imgresponsive/Restaurante.PNG)"
  relojiphoneid.style.opacity="0";
  barra.style.display="none";
  apps.style.display="none";
  contenedorsite.style.display="none";
  palabrassiteweb.style.display="none";
  setTimeout(() => {
    iphoneid.style.backgroundImage=""
    relojiphoneid.style.opacity="1";
    window.location.href="restaurante.html"
  }, 5000);
})

javascriptimg.addEventListener('mouseenter',function(){
  iphoneid.style.backgroundImage="url(/imgresponsive/jscapture.PNG)"
  relojiphoneid.style.opacity="0";
  setTimeout(() => {
    iphoneid.style.backgroundImage=""
    relojiphoneid.style.opacity="1";
  }, 2000);
})
javaimg.addEventListener('mouseenter',function(){
  iphoneid.style.backgroundImage="url(/imgresponsive/jscapture.PNG)"
  relojiphoneid.style.opacity="0";
  setTimeout(() => {
    iphoneid.style.backgroundImage=""
    relojiphoneid.style.opacity="1";
  }, 2000);
})
pythonimg.addEventListener('mouseenter',function(){
  iphoneid.style.backgroundImage="url(/imgresponsive/jscapture.PNG)"
  relojiphoneid.style.opacity="0";
  setTimeout(() => {
    iphoneid.style.backgroundImage=""
    relojiphoneid.style.opacity="1";
  }, 2000);
})
cimg.addEventListener('mouseenter',function(){
  iphoneid.style.backgroundImage="url(/imgresponsive/jscapture.PNG)"
  relojiphoneid.style.opacity="0";
  setTimeout(() => {
    iphoneid.style.backgroundImage=""
    relojiphoneid.style.opacity="1";
  }, 2000);
})

