
function updateClock() {
  const clockContainer = document.getElementById("relojiphone");
  const currentTime = new Date();

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();

  const formattedTime = `${padZero(hours)}:${padZero(minutes)}`;
  clockContainer.textContent = formattedTime;
}

function padZero(value) {
  return value < 10 ? `0${value}` : value;
}

setInterval(updateClock, 1000);


// Actualizar el reloj cada segundo


/* function reloj();
var relojcontainer=document.getElementById('reloj');
const currentTime2=document=new Date();

const horas=currentTime2.getHours();
const mntos=currentTime2.getMinutes();

const formato= */
