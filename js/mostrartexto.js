
        function mostrartexto(){
            const elementos=document.querySelectorAll('.textomostra');

            elementos.forEach(elemento =>{

                const poscision =elemento.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if(poscision < windowHeight){
                    elemento.classList.add('mostrartexto')
                }
            })
        }

        window.addEventListener('scroll',mostrartexto);

        mostrartexto();
