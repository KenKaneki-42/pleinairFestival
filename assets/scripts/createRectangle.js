//   export function createRectangles(containerId, rectangleWidth, rectangleClass, adjustment = 0, horizontal = false) {
//     var container = document.getElementById(containerId);
//     var largeurEcran = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//     var largeurEcran = (document.width !== undefined) ? document.width : document.body.offsetWidth;
//     if(horizontal){
//         largeurEcran = Math.floor(largeurEcran - 2 * 133);
//     }

//     // var nombreRectangles = Math.floor(largeurEcran / rectangleWidth) + adjustment;
//     // var nombreRectangles = Math.floor();
//     var _docHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
//     var _docWidth = (document.width !== undefined) ? document.width : document.body.offsetWidth;

//     var nombreRectangles = Math.floor(_docHeight / rectangleWidth) + adjustment;
//     console.log('nb rectangle', nombreRectangles);

//     for (var i = 0; i < nombreRectangles; i++) {
//         var rectangle = document.createElement("div");
//         rectangle.classList.add(rectangleClass);
//         container.appendChild(rectangle);
//     }
// }

export function createRectangles(containerId, rectangleWidth, rectangleClass, adjustment = 0, horizontal = false) {
  var container = document.getElementById(containerId);
  var largeurEcran = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // if(horizontal){
  //     largeurEcran = Math.floor(largeurEcran - 2 * 133);
  // }

  // var nombreRectangles = Math.floor(largeurEcran / rectangleWidth) + adjustment;
  // var nombreRectangles = Math.floor();
  const _docHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
  const _docWidth = (document.width !== undefined) ? document.width : document.body.offsetWidth;

  const nombreRectangles = Math.ceil(_docHeight / rectangleWidth) + adjustment;
  console.log('nb rectangle', nombreRectangles);

  for (var i = 0; i < nombreRectangles; i++) {
      var rectangle = document.createElement("div");
      rectangle.classList.add(rectangleClass);
      container.appendChild(rectangle);
  }
}
