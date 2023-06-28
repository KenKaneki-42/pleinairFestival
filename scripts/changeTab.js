
export function toggleTab() {
  // Récupérez tous les éléments de contenu des onglets
  var tabs = document.getElementsByClassName('tab-content');
  var tabButtons = document.getElementsByClassName('tab');

  function changeTab(index) {

    // Masquer tous les contenus d'onglets et enlever la classe 'tab-active' de tous les onglets
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].style.display = 'none';
      tabButtons[i].classList.remove('tab-active');
    }
    // Afficher le contenu de l'onglet sélectionné et ajouter la classe 'tab-active' à l'onglet actif
    tabs[index].style.display = 'flex';
    tabButtons[index].classList.add('tab-active');
  }

  // Attacher la fonction à chaque onglet
  for (var i = 0; i < tabButtons.length; i++) {
    (function(i) {  // Créer une nouvelle portée pour capturer correctement i
      tabButtons[i].addEventListener('click', function() {
        changeTab(i);
      });
    })(i);
  }

  // Appeler la fonction changeTab au chargement de la page pour le premier onglet
  changeTab(0);
}
