export function createRectangles(containerId, rectangleWidth, rectangleClass, docHeight = 0) {
  var container = document.getElementById(containerId);

  // const docHeight = (document.height !== undefined) ? document.height : document.body.clientHeight;
  const nombreRectangles = Math.floor(docHeight / rectangleWidth);

  // console.log('body height',document.body.clientHeight)
  // console.log('nb rectangle:', nombreRectangles);

  for (var i = 0; i < nombreRectangles; i++) {
      var rectangle = document.createElement("div");
      rectangle.classList.add(rectangleClass);
      container.appendChild(rectangle);
  }
}
