
            document.addEventListener('DOMContentLoaded', function() {
              var facebbokh1 = document.querySelector('.facebbokh1');
              var whatsapph1 = document.querySelector('.whatsapph1');
              var igh1text = document.querySelector('.igh1');
              var textofacebbok= document.querySelector('.ingresar1');
              var textowhatsapp= document.querySelector('.ingresar2');
              var textoig= document.querySelector('.ingresar3');
              facebbokh1.addEventListener('mouseenter', function() {
                textofacebbok.style.opacity="1"
              });

              facebbokh1.addEventListener('mouseleave', function() {
                textofacebbok.style.opacity="0"
              });

              whatsapph1.addEventListener('mouseenter', function() {
                textowhatsapp.style.opacity="1"
              });

              whatsapph1.addEventListener('mouseleave', function() {
                textowhatsapp.style.opacity="0"
              });

              igh1text.addEventListener('mouseenter', function() {
                textoig.style.opacity="1"
              });

              igh1text.addEventListener('mouseleave', function() {
                textoig.style.opacity="0"
              });
            });
