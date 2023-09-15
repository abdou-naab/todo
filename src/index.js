import "./index.css";
import { home } from "./home";
import { taskCreator } from "./taskCreator.js";
import { showDetails } from "./showDetails";
let body = document.querySelector("body");
let homeSection = home();
let taskCreatorSection = taskCreator();
// let showDetailsSection = showDetails();
homeSection.addSection("batikh");
homeSection.addSection("dala3");
body.append(homeSection.renderStructure());
body.append(taskCreatorSection.renderStructure());
homeSection.addTaskListener(taskCreatorSection);

let homeNav = document.querySelector(".home-nav");
let taskCreateNav = document.querySelector(".task-create-container nav ul");
homeNav.addEventListener("click", homeSection.navListener);
taskCreateNav.addEventListener("click", taskCreatorSection.navListener);
// body.append(taskCreatorSection.renderStructure());
