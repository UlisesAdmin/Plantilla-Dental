class AppHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <div class="container-primary">

          <div class="logo">
            <a href="#" class="logo-a-element">
              <img src="/assets/sources/icons/logoDental Ai.png" alt="Logo Clínica Dental">
              <h1>Clínica Dental</h1>
            </a>
          </div>

          <nav class="nav" id="nav_links">
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </nav>

          <div class="link-contact">
            <a href="https://wa.me/522221421555?text=Hola%20Quisiera%20Más%20Información%20Sobre%20Sus%20Servicios" target="_blank">
              Contactar por WhatsApp
            </a>
          </div>

          <div class="menu" id="menuBtn">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>

        </div>
      </header>

      <div class="fullscreen-menu" id="fullscreenMenu">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>
    `;

    this.initHeaderMenu();
  }

  initHeaderMenu() {
    const menuBtn = this.querySelector("#menuBtn");
    const fullscreenMenu = this.querySelector("#fullscreenMenu");

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
}

customElements.define("app-header", AppHeader);