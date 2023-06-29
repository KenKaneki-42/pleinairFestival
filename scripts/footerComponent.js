export class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <div class="container">
          <div class="row">
              <div class="col-md-6">
                  <h5>Plain'air Films Festival de Cinéma</h5>
                  <p>Ce Festival de Cinéma Éclectique est une célébration annuelle du 7ème Art, visant à promouvoir et à apprécier la diversité des films du monde entier. Rejoignez-nous pour vivre une expérience cinématographique inoubliable.</p>
              </div>
              <div class="col-md-6">
                  <h5>Contactez-nous</h5>
                  <p>123 Rue de Cinéma, 75000 Paris, France</p>
                  <p>Email: contact@festivaldecinemaeclectique.com</p>
                  <p>Tél: +33 1 23 45 67 89</p>
              </div>
          </div>
          <div class="row">
              <div class="col-md-12">
                  <p class="copyrights">© 2023 Festival de Cinéma Éclectique. Tous droits réservés.</p>
              </div>
          </div>
        </div>
      </footer>
    `;
  }
}
