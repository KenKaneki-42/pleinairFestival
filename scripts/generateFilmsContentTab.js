export function generateFilmsContentTab(){

  const films = [
    { name: 'film1', posterPath: 'assets/images/posters/edward-aux-mains-d\'argent.jpeg', day: '5 août' },
    { name: 'film2', posterPath: 'assets/images/posters/la-haine.png', day: '5 août' },
    { name: 'film3', posterPath: 'assets/images/posters/2001-L\'Odyssee-de-l\'espace.jpeg', day: '6 août' },
    { name: 'film4', posterPath: 'assets/images/posters/requiem-for-a-dream.jpeg', day: '6 août' },
    { name: 'film5', posterPath: 'film5.jpg', day: '7 août' },
    { name: 'film6', posterPath: 'film6.jpg', day: '7 août' },
    { name: 'film7', posterPath: 'film7.jpg', day: '8 août' },
    { name: 'film8', posterPath: 'film8.jpg', day: '8 août' },
  ];

  const tabsElement = document.querySelector('.tabs');
  const filmsElement = document.querySelector('.films');

  const uniqueDays = [...new Set(films.map(film => film.day))];

  uniqueDays.forEach(day => {
    const dayTabButton = document.createElement('button');
    dayTabButton.className = 'tab';
    dayTabButton.textContent = day;
    tabsElement.appendChild(dayTabButton);

    const dayTabContent = document.createElement('div');
    dayTabContent.className = 'tab-content';
    dayTabContent.style.display = 'none';

    const filmsForDay = films.filter(film => film.day === day);
    filmsForDay.forEach(film => {
      const filmElement = document.createElement('a');
      filmElement.href = `${film.name}.html`;
      const posterElement = document.createElement('div');
      posterElement.className = 'poster';
      const imgElement = document.createElement('img');
      imgElement.src = film.posterPath;
      imgElement.alt = `Affiche du ${film.name}`;

      posterElement.appendChild(imgElement);
      filmElement.appendChild(posterElement);
      dayTabContent.appendChild(filmElement);
    });

    filmsElement.appendChild(dayTabContent);
  });

}
