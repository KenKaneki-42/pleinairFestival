// import { function1 } from './changeTab.js';
import { createRectangles } from './createRectangle.js';
import { toggleTab } from "./changeTab.js";
// import { generateFilmsContentTab } from "./generateFilmsContentTab.js";

toggleTab()

window.onload = function() {
  createRectangles("container1-big-rectangle-V", 121, "big-rectangle-v", 1);
  createRectangles("container1-small-rectangle-top-V", 14, "small-rectangle-v");
  // createRectangles("container1-big-rectangle-V", 121, "big-rectangle-v", 1);
  createRectangles("container1-small-rectangle-bot-V", 14, "small-rectangle-v");

  createRectangles("container2-big-rectangle-V", 121, "big-rectangle-v", -1);
  createRectangles("container2-small-rectangle-top-V", 14, "small-rectangle-v");
  createRectangles("container2-small-rectangle-bot-V", 14, "small-rectangle-v");

  // createRectangles("container-small-rectangle-top-H", 14, "small-rectangle-h", -5, true);
  // createRectangles("container-big-rectangle-H", 121, "big-rectangle-h", 0, true);
  // createRectangles("container-small-rectangle-bot-H", 14, "small-rectangle-h", -5, true);
  // generateFilmsContentTab();



  // createRectangles("container1-small-rectangle-top-V", 14, "small-rectangle-v");
  // createRectangles("container1-big-rectangle-V", 121, "big-rectangle-v");
  // createRectangles("container1-small-rectangle-bot-V", 14, "small-rectangle-v");

  // createRectangles("container-small-rectangle-top-H", 14, "small-rectangle-h", 0, true);
  // createRectangles("container-big-rectangle-H", 121, "big-rectangle-h", 0, true);
  // createRectangles("container-small-rectangle-bot-H", 14, "small-rectangle-h", 0, true);

  // createRectangles("container2-small-rectangle-top-V", 14, "small-rectangle-v");
  // createRectangles("container2-big-rectangle-V", 121, "big-rectangle-v");
  // createRectangles("container2-small-rectangle-bot-V", 14, "small-rectangle-v");
};
