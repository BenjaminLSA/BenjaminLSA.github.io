
var imgvarsiones=[
    '/img/1.PNG',
    '/img/2.PNG',
    '/img/3.PNG',
];

var imgindex=0;
var imaindex2=0
var imaindex3=0;
var imaindex4=0;
var imgelement=document.getElementById('imgversiones');
var imgelement2=document.getElementById('imgversiones2');
var imgelement3=document.getElementById('imgversiones3');
var imgelement4=document.getElementById('imgversiones4');
function cambiarimagen(){
    

    imgelement.style.opacity = 0;
    imgversiones2.style.opacity=0;
    imgversiones3.style.opacity=0;
    imgversiones4.style.opacity=0;

    //cambiar la img despues de 5seg
    setTimeout(function(){
         // Actualiza la URL de la imagen
        imgelement.src=imgvarsiones[imgindex];
        imgelement2.src=imgvarsiones[imaindex2];
        imgelement3.src=imgvarsiones[imaindex3];
        imgelement4.src=imgvarsiones[imaindex4];

        // Incrementa el índice para la siguiente imagen
        imgindex=(imgindex+1)%imgvarsiones.length;
        imaindex2=(imaindex2+1)%imgvarsiones.length;
        imaindex3=(imaindex3+1)%imgvarsiones.length;
        imaindex4=(imaindex4+1)%imgvarsiones.length;

          // Cambia la opacidad a 1
          imgelement.style.opacity = 1;
          imgversiones2.style.opacity=1;
          imgversiones3.style.opacity=1;
          imgversiones4.style.opacity=1;
    },500);
}
cambiarimagen();
// Configura el intervalo para cambiar la imagen cada 30 segundos
setInterval(cambiarimagen,5000)



