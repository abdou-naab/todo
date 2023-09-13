import { DomElm } from "./utils";
export const home = () => {
  /**
   * function that create the basic layout for the home page
   */
  let content = DomElm("div", ["content", "grid"]).create();
  let header = DomElm(
    "header",
    ["flex", "space-btwn", "flex-column", "small-padd"],
    null,
    " &#128394; What ToDo &#128394;"
  ).create();
  let nav = DomElm("nav", ["flex", "space-btwn", "flex-column"]).create();
  let section = DomElm("section", [
    "flex",
    "flex-column",
    "flex-align-center",
  ]).create();

  // nav stuff
  let ul1 = DomElm("ul").create();
  let li1_1 = DomElm("li", ["up_onhover", "small-padd"], null, "Home").create();
  let li1_2 = DomElm(
    "li",
    ["up_onhover", "small-padd"],
    null,
    "Today"
  ).create();
  let li1_3 = DomElm("li", ["up_onhover", "small-padd"], null, "Week").create();
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
    null,
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

  const renderStructure = () => {
    return content;
  };
  const addSection = (sectionName) => {
    let tempLi = DomElm(
      "li",
      ["up_onhover", "small-padd"],
      null,
      null,
      sectionName
    ).create();
    tempLi.style.border = "none";
    ul2.append(tempLi);
  };
  const renderSection = (sectionItems) => {
    section.append(...sectionItems);
  };
  return { renderStructure, addSection };
};
