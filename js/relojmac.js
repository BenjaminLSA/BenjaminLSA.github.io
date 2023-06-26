
function updateClock2() {
  const clockContainer2 = document.getElementById("reloj2");
  const currentTime2 = new Date();

  const hours2 = currentTime2.getHours();
  const minutes2 = currentTime2.getMinutes();

  const formattedTime2 = `${padZero2(hours2)}:${padZero2(minutes2)}`;
  clockContainer2.textContent = formattedTime2;
}

function padZero2(value2) {
  return value2 < 10 ? `0${value2}` : value2;
}

// Actualizar el reloj cada segundo
setInterval(updateClock2, 1000);
