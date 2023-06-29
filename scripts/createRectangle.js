export function createRectangles(containerId, rectangleWidth, rectangleClass, docHeight = 0, adjustment = 0) {
  var container = document.getElementById(containerId);
  const nombreRectangles = Math.floor(docHeight / rectangleWidth) + adjustment;

  for (var i = 0; i <= nombreRectangles; i++) {

      var rectangle = document.createElement("div");
      rectangle.classList.add(rectangleClass);
      container.appendChild(rectangle);
      // if  (i === nombreRectangles) {
      //   rectangle.classList.add("overflowh");
      // }
  }
}
