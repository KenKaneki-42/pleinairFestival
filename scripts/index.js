import { toggleTab } from "./changeTab.js";
import { FooterComponent } from "./footerComponent.js";
import { createRectangles } from './createRectangle.js';
import { loadLottie } from "./lottieAnimation.js";
let url = window.location.pathname;
let filename = url.substring(url.lastIndexOf('/')+1);

if(filename == "homepage.html") {
  toggleTab();
}

if (window.location.pathname.includes("/Pages/films/")) {
  loadLottie();
}

customElements.define('footer-component', FooterComponent);

// VERSION PLUS PERFORMANTE MAIS MANQUE + DE RECTANGLES QUE SUR LE WINDOW.ONLOAD
document.addEventListener("DOMContentLoaded", function() {

  const docHeight = document.body.clientHeight;
  console.log(docHeight);
  createRectangles("container1-big-rectangle-V", 121, "big-rectangle-v", docHeight, -1);
  createRectangles("container2-big-rectangle-V", 121, "big-rectangle-v", docHeight, -1);
  createRectangles("container1-small-rectangle-top-V", 14, "small-rectangle-v", docHeight, 4);
  createRectangles("container1-small-rectangle-bot-V", 14, "small-rectangle-v", docHeight, 4);
  createRectangles("container2-small-rectangle-top-V", 14, "small-rectangle-v", docHeight, 4);
  createRectangles("container2-small-rectangle-bot-V", 14, "small-rectangle-v", docHeight, 4);

});
