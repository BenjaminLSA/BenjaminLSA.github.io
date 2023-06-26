
            var imgContainer = document.querySelector(".imgipat");
            var hoverElements = imgContainer.querySelectorAll("img");
            var barraipad = document.getElementById("barraipadid");

            hoverElements.forEach(function (element) {
              element.addEventListener("mouseenter", function () {
                barraipad.classList.add("activarbarra");
              });

              element.addEventListener("mouseleave", function () {
                barraipad.classList.remove("activarbarra");
              });
            });
          