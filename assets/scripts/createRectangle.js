  export function createRectangles(containerId, rectangleWidth, rectangleClass, adjustment = 0, horizontal = false) {
      var container = document.getElementById(containerId);
      var largeurEcran = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

      if(horizontal){
          largeurEcran = Math.floor(largeurEcran - 2 * 133);
      }

      var nombreRectangles = Math.floor(largeurEcran / rectangleWidth) + adjustment;

      for (var i = 0; i < nombreRectangles; i++) {
          var rectangle = document.createElement("div");
          rectangle.classList.add(rectangleClass);
          container.appendChild(rectangle);
      }
  }
  