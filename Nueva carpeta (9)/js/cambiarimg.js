var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");

var containerimg = document.getElementById("imgcambiar");
var reloj = document.getElementById("reloj2");

img1.addEventListener("mouseenter", function () {
  containerimg.style.backgroundImage = "url('/img/1.jpg')";
});
img1.addEventListener("mouseleave", function () {
  setTimeout(function () {
    containerimg.style.backgroundImage = "";
  }, 5000);
});

img2.addEventListener("mouseenter", function () {
  containerimg.style.backgroundImage = "url('/img/2.jpg')";
});
img2.addEventListener("mouseleave", function () {
  setTimeout(function () {
    containerimg.style.backgroundImage = "";
  }, 5000);
});

img3.addEventListener("mouseenter", function () {
  containerimg.style.backgroundImage = "url('/img/3.jpg')";
});
img3.addEventListener("mouseleave", function () {
  setTimeout(function () {
    containerimg.style.backgroundImage = "";
  }, 5000);
});

img4.addEventListener("mouseenter", function () {
  containerimg.style.backgroundImage = "url('/img/4.jpg')";
});
img4.addEventListener("mouseleave", function () {
  setTimeout(function () {
    containerimg.style.backgroundImage = "";
  }, 5000);
});