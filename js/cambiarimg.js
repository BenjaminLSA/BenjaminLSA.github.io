var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");

var containerimg = document.getElementById("imgcambiar");
var reloj = document.getElementById("reloj2");

img1.addEventListener("mouseenter", function () {
  containerimg.style.backgroundImage = "url('https://i.pinimg.com/564x/44/61/86/446186c7535494117cb863875f35dc46.jpg')";
});
img1.addEventListener("mouseleave", function () {
  setTimeout(function () {
    containerimg.style.backgroundImage = "";
  }, 5000);
});

img2.addEventListener("mouseenter", function () {
  containerimg.style.backgroundImage = "url('https://i.pinimg.com/564x/83/a0/57/83a0571423e58b7438240f4c66ed25f8.jpg')";
});
img2.addEventListener("mouseleave", function () {
  setTimeout(function () {
    containerimg.style.backgroundImage = "";
  }, 5000);
});

img3.addEventListener("mouseenter", function () {
  containerimg.style.backgroundImage = "url('https://i.pinimg.com/564x/9b/8c/4c/9b8c4c4bdc6fb9c4dee284f0853c7d42.jpg')";
});
img3.addEventListener("mouseleave", function () {
  setTimeout(function () {
    containerimg.style.backgroundImage = "";
  }, 5000);
});

img4.addEventListener("mouseenter", function () {
  containerimg.style.backgroundImage = "url('https://i.pinimg.com/564x/ec/d0/5f/ecd05f0b1d3508c99c2fd076a86d5d17.jpg')";
});
img4.addEventListener("mouseleave", function () {
  setTimeout(function () {
    containerimg.style.backgroundImage = "";
  }, 5000);
});