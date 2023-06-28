export function createRectangles(containerId, rectangleWidth, rectangleClass, adjustment = 0, horizontal = false) {
  var container = document.getElementById(containerId);
  var largeurEcran = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  const _docHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
  var hauteur = (document.height !== undefined) ? document.height : document.body.offsetHeight;
  const nombreRectangles = Math.ceil(_docHeight / rectangleWidth) + adjustment;
  console.log('_docHeight:', hauteur)
  console.log('nb rectangle:', nombreRectangles, hauteur);

  for (var i = 0; i < nombreRectangles; i++) {
      var rectangle = document.createElement("div");
      rectangle.classList.add(rectangleClass);
      container.appendChild(rectangle);
  }
}
