import "./index.css";
import { home } from "./home";
import { taskCreator } from "./taskCreator.js";
let body = document.querySelector("body");

let homeSection = home();
let taskCreatorSection = taskCreator();
body.append(homeSection.renderStructure());
body.append(taskCreatorSection.renderStructure());
// taskCreatorSection.toggleRendering();
// console.log(taskCreatorSection.isHidden());
// homeSection.addSection("test");
