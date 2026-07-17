const loading_screen = document.getElementById("loading-screen");

setInterval(() => {
  loading_screen.style.opacity = "0";
  loading_screen.style.pointerEvents = "none";
}, 3000);
