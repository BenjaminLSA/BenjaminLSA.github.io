gsap.registerPlugin(ScrollTrigger);
let tl2=gsap.timeline({
    scrollTrigger:{
        pin:true,//sirve para que el scrol solo funcione con la animacion 
        trigger:'.',//contenedor de la animacion(indicar donde sera hara el scroll)
        markers:false,//son las marcas de star/end donde inicia y donde termina
        start:'top top',//top del contenedor del trigger
        end:'+=900',//final trigger
        scrub:5,//es para que la animacion funcione con el scol
       
     
    }
}) 

tl2.to('.imgimca ', {
    scale: 1.5,
    duration:2,
    opacity:1
})

