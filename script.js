let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let mohamedmeddahani = document.querySelector(".mohamedmeddahani");
onscroll = function () {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 4 + "px";
  mountains3.style.top = value * 2 + "px";
  mountains4.style.top = value * 1.5 + "px";
  river.style.top = value + "px";
  boat.style.top = value + "px";
  boat.style.left = value * 3 + "px";
  mohamedmeddahani.style.fontSize = value + "px";
  if (scrollY >= 50) {
    mohamedmeddahani.style.fontSize = 35 + "px";
    mohamedmeddahani.style.position = "fixed";
    if (scrollY >= 444) {
      mohamedmeddahani.style.display = "none";
    } else {
      mohamedmeddahani.style.display = "block";
    }
    if (scrollY >= 106) {
      document.querySelector(".main").style.background =
        "linear-gradient(to top, #376281, #10001f)";
    } else {
      document.querySelector(".main").style.background =
        "linear-gradient(#200016, #10001f)";
    }
  }
};

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});
document.querySelectorAll(".menu-item").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
  })
);
