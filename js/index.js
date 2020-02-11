nav = document.querySelector(".nav");

nav.addEventListener("mouseleave", () => {
  nav.style.transform = "scale(1)";

  nav.style.transition = "transform 1s";
});

nav.addEventListener("mouseenter", () => {
  nav.style.transform = "scale(1)";
  nav.style.transition = "transform 1s";
});

gone = document.querySelector(".content-section");
gone.addEventListener("wheel", () => {
  gone.style.backgroundColor = "grey";
});

img = document.querySelector("img");
img.addEventListener("click", event => {
  img.style.display = "none";
  event.stopPropagation();
});

pink = document.querySelector(".footer");
pink.addEventListener("dblclick", () => {
  pink.style.backgroundColor = "purple";
});

words = document.querySelector(".intro");
words.addEventListener("click", () => {
  words.style.backgroundColor = "green";
});

orange = document.querySelector(".btn");
orange.addEventListener("mousedown", () => {
  orange.style.display = "none";
});

copy = document.querySelector(".destination");
copy.addEventListener("copy", () => {
  copy.style.backgroundColor = "orange";
});

pick = document.querySelector(".content-pick");
pick.addEventListener("contextmenu", () => {
  pick.style.backgroundColor = "purple";
});

blue = document.querySelector("body");
blue.addEventListener("mouseup", () => {
  blue.style.backgroundColor = "green";
});

document.querySelectorAll(".nav-link").forEach(item => {
  item.addEventListener("mousemove", event => {
    event.preventDefault();
  });
});
