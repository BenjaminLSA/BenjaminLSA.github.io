gsap.registerPlugin(ScrollTrigger);


let tl=gsap.timeline({
    scrollTrigger:{
        pin:true,//sirve para que el scrol solo funcione con la animacion 
        trigger:'.contact',//contenedor de la animacion(indicar donde sera hara el scroll)
        markers:false,//son las marcas de star/end donde inicia y donde termina
        start:'top top',//top del contenedor del trigger
        end:'+=2000 ',//final trigger
        scrub:5,//es para que la animacion funcione con el scol
    }
}) 


tl.to('.circulo1',{
    duration:2,
    x:-100,
    scale:5.4,
    borderRadius:'50%',
    ease: "power2.out",
    opacity:1,// Transición suave
    yoyo: true,
})

tl.to('.circulo2',{
    duration:2,
    x:-100,
    scale:5.4,
    borderRadius:'50%',
    ease: "power2.out",
    opacity:1,

},'-=2')


tl.to('.circulo3',{
    duration:2,
    x:100,
    scale:5.4,
    borderRadius:'50%',
    ease: "power2.out",
    opacity:1,

},'-=2')


tl.to('.circulo4',{
    duration:2,
    x:100,
    scale:5.4,
    borderRadius:'50%',
    ease: "power2.out",
    opacity:1,

},'-=2')

