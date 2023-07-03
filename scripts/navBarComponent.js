export class NavBarComponent extends HTMLElement {
  connectedCallback() {
    let url = window.location.pathname;
    let prefixHomepage, prefixActualites, prefixPreinscription;

    if (url.includes('Pages/films')) {
      prefixHomepage = "../../";
      prefixActualites = "../";
      prefixPreinscription = "../";
    } else if (url.includes('homepage')) {
      prefixHomepage = "./";
      prefixActualites = "./Pages/";
      prefixPreinscription = "./Pages/";
    } else {
      prefixHomepage = "../../";
      prefixActualites = "./";
      prefixPreinscription = "./";
    }

    this.innerHTML = `
      <nav>
        <div class="wrapper relative">
          <button class="burger">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul class="menu">
            <li><a href="${prefixHomepage}homepage.html">Accueil</a></li>
            <li><a href="${prefixActualites}actualités.html">Actualités</a></li>
            <li><a href="${prefixPreinscription}form-préinscription.html">Préinscription</a></li>
          </ul>
        </div>
      </nav>
    `;
  }
}
