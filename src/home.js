import { DomElm } from "./utils";
let otherSectionCount = 4;

function renderEmptyContent(section) {
  section.innerHTML(
    DomElm("h2", null, null, null, "Well ...").create(),
    DomElm("h5", null, null, null, "nothing to show here!").create()
  );
}

export const home = (secionContent = undefined) => {
  let content = DomElm("div", ["content", "grid"]).create();
  let header = DomElm(
    "header",
    ["flex", "space-btwn", "flex-column", "small-padd"],
    null,
    " &#128394; What ToDo &#128394;"
  ).create();
  let nav = DomElm("nav", [
    "home-nav",
    "flex",
    "space-btwn",
    "flex-column",
  ]).create();
  // section stuff
  let section = DomElm("section", [
    "flex",
    "flex-column",
    "flex-align-center",
  ]).create();

  // nav stuff
  let ul1 = DomElm("ul").create();
  let li1_1 = DomElm(
    "li",
    ["nav-active", "up_onhover", "small-padd"],
    { "data-home-nav-section": 0 },
    "Home"
  ).create();
  let li1_2 = DomElm(
    "li",
    ["up_onhover", "small-padd"],
    { "data-home-nav-section": 1 },
    "Today"
  ).create();
  let li1_3 = DomElm(
    "li",
    ["up_onhover", "small-padd"],
    { "data-home-nav-section": 2 },
    "Week"
  ).create();
  let li1_4 = DomElm(
    "li",
    ["up_onhover", "small-padd"],
    null,
    "Sections"
  ).create();
  let ul2 = DomElm("ul", ["sections-ul", "small-padd"]).create();
  let li1_5 = DomElm(
    "li",
    ["up_onhover", "small-padd"],
    { "data-home-nav-section": 3 },
    "Notes"
  ).create();
  let addBtn = DomElm(
    "div",
    ["add", "flex", "flex-center", "up_onhover", "pointer"],
    null,
    "+"
  ).create();
  ul1.append(li1_1, li1_2, li1_3, li1_4, ul2, li1_5);
  nav.append(ul1, addBtn);
  content.append(header, nav, section);
};

/**
 * 
  const renderStructure = () => {
    return content;
  };
  const addSection = (sectionName) => {
    let tempLi = DomElm(
      "li",
      ["up_onhover", "small-padd"],
      { "data-home-nav-section": otherSectionCount },
      null,
      sectionName
    ).create();
    sectionsContent[otherSectionCount] = undefined;
    tempLi.style.border = "none";
    otherSectionCount++;
    ul2.append(tempLi);
  };
  const addTaskListener = (taskCreatorSection) => {
    taskCreatorSection.closeListener();
    addBtn.addEventListener("click", taskCreatorSection.toggleRendering);
  };
  const addOtherSection = (str) => {
    let temp_li = DomElm(
      "li",
      ["up_onhover", "small-padd"],
      null,
      str
    ).create();
    ul2.append(temp_li);
  };
  const navListener = (e) => {
    let nav_li_elements = [...[...ul1.children], ...[...ul2.children]];
    delete nav_li_elements[3];
    let currentActive = document.querySelector(".home-nav .nav-active");

    if (nav_li_elements.includes(e.target)) {
      if (e.target != currentActive) {
        e.target.classList.toggle("nav-active");
        currentActive.classList.toggle("nav-active");
      }
    }

    let currentSection = otherSectionCount[e.target.dataset.homeNavSection];
    if (!currentSection && section.children.length < 1) {
      emptySection();
    } else if (currentSection) {
      for (let i of currentSection) {
        section.append(i);
      }
    }
  };
  return {
    renderStructure,
    addSection,
    addTaskListener,
    navListener,
    addOtherSection,
  };
 */
