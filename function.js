let darkMode = false;
const body = document.body;
const btn = document.getElementById("btn");

function toggleMode() {
  darkMode = !darkMode;
  if (!darkMode) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    btn.textContent = "DAY";
    btn.classList.add("daybtn");
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    btn.textContent = "NIGHT";
    btn.classList.remove("daybtn");
  }
}

toggleMode();
btn.addEventListener("click", toggleMode);

const night = document.getElementById("night");

document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const box = document.querySelector(".box");
  const colorButton = document.getElementById("changeColor");
  const toggleButton = document.getElementById("toggleImage");

  colorButton.addEventListener("click", () => {
    box.style.backgroundColor =
      box.style.backgroundColor === "blue" ? "red" : "blue";
  });

  let toggled = false;
  toggleButton.addEventListener("click", () => {
    if (toggled) {
      gallery.src = "./assets/image1.jpg";
      toggled = false;
    } else {
      gallery.src = "./assets/image2.jpg";
      toggled = true;
    }
  });

  console.log("Page loaded!");
});
