import { createRectangles } from './createRectangle.js';
import { toggleTab } from "./changeTab.js";

toggleTab()

window.onload = function() {
  createRectangles("container1-big-rectangle-V", 121, "big-rectangle-v");
  createRectangles("container1-small-rectangle-top-V", 14, "small-rectangle-v");
  createRectangles("container1-small-rectangle-bot-V", 14, "small-rectangle-v");

  createRectangles("container2-big-rectangle-V", 121, "big-rectangle-v");
  createRectangles("container2-small-rectangle-top-V", 14, "small-rectangle-v");
  createRectangles("container2-small-rectangle-bot-V", 14, "small-rectangle-v");

};
