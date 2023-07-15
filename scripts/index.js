import { NavBarComponent } from "./navBarComponent.js";
import { FooterComponent } from "./footerComponent.js";
import { toggleTab } from "./changeTab.js";
// import { loadLottie } from "./lottieAnimation.js";
import { createRectangles } from './createRectangle.js';
let url = window.location.pathname;
let filename = url.substring(url.lastIndexOf('/')+1);

if(filename == "homepage.html") {
  toggleTab();
}

// if (window.location.pathname.includes("/Pages/films/")) {
//   loadLottie();
// }

// to define navBar component
customElements.define('navbar-component', NavBarComponent);
// to define the footer component
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

// to listen click on burger and toggle show
document.querySelector('.burger').addEventListener('click', function () {
  document.querySelector('.menu').classList.toggle('show');
});
