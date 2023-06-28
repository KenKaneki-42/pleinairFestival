import { toggleTab } from "./changeTab.js";
import { FooterComponent } from "./footerComponent.js";
import { createRectangles } from './createRectangle.js';

let url = window.location.pathname;
let filename = url.substring(url.lastIndexOf('/')+1);
if(filename == "homepage.html") {
  toggleTab();
}

customElements.define('footer-component', FooterComponent);
// window.onload = function() {
//   createRectangles("container1-big-rectangle-V", 121, "big-rectangle-v");
//   createRectangles("container1-small-rectangle-top-V", 14, "small-rectangle-v");
//   createRectangles("container1-small-rectangle-bot-V", 14, "small-rectangle-v");

//   createRectangles("container2-big-rectangle-V", 121, "big-rectangle-v");
//   createRectangles("container2-small-rectangle-top-V", 14, "small-rectangle-v");
//   createRectangles("container2-small-rectangle-bot-V", 14, "small-rectangle-v");

// };
document.addEventListener("DOMContentLoaded", function() {

  const docHeight = document.body.clientHeight;
  createRectangles("container1-big-rectangle-V", 121, "big-rectangle-v", docHeight);
  createRectangles("container1-small-rectangle-top-V", 14, "small-rectangle-v", docHeight);
  createRectangles("container1-small-rectangle-bot-V", 14, "small-rectangle-v", docHeight);

  createRectangles("container2-big-rectangle-V", 121, "big-rectangle-v", docHeight);
  createRectangles("container2-small-rectangle-top-V", 14, "small-rectangle-v", docHeight);
  createRectangles("container2-small-rectangle-bot-V", 14, "small-rectangle-v", docHeight);
});
