const button = document.querySelector(".slider");
const body = document.querySelector("body");
const links = document.querySelectorAll("a");
let isDarkMode = true;

button.addEventListener("click", function (e) {
  if (isDarkMode) {
    body.style.background =
      "radial-gradient(circle, rgb(239, 246, 249) 0%, rgb(206, 239, 253) 90%)"; // dark mode
    body.style.color = "black";
    body.style.backgroundSize = "cover";
    links.forEach((link) => {
      link.style.color = "rgb(23, 88, 192);";
    });
  } else {
    body.style.color = "white";
    body.style.background =
      "radial-gradient(circle, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 100%)"; // Dark mode
    body.style.backgroundSize = "cover";
    links.forEach((link) => {
      link.style.color = "rgb(72, 146, 220)";
    });
  }
  isDarkMode = !isDarkMode; // Toggle the mode
});
