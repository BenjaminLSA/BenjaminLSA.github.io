

var img1like = document.getElementById("imgprimaria");
var img2like = document.getElementById("heard");

img1like.addEventListener("dblclick", function () {
  img2like.classList.add("like");
  setTimeout(() => {
    img2like.classList.remove("like");
  }, 1000);
});
