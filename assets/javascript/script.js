function initHeaderMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const fullscreenMenu = document.getElementById("fullscreenMenu");

  if (!menuBtn || !fullscreenMenu) return;

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    fullscreenMenu.classList.toggle("active");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1090) {
      menuBtn.classList.remove("active");
      fullscreenMenu.classList.remove("active");
    }
  });
}
