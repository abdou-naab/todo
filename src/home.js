import { DomElm } from "./utils";
function home() {
  /**
   * function that create the basic layout for the home page
   */
  let content = DomElm("div", ["content", "grid"]);
  let header = DomElm(
    "header",
    ["flex", "space-btwn", "flex-column"],
    null,
    "What ToDo &#128394;"
  );
  let nav = DomElm("nav", ["flex", "space-btwn", "flex-column"]);
  let section = DomElm("section", ["flex", "flex-column", "flex-align-center"]);

  // nav stuff
  ul1 = DomElm("ul");
  li1_1 = DomElm("li", ["up_onhover"], null, "Home");
  li1_2 = DomElm("li", ["up_onhover"], null, "Today");
  li1_3 = DomElm("li", ["up_onhover"], null, "Week");
  li1_4 = DomElm("li", ["up_onhover"], null, "Sections");
  ul2 = DomElm("ul", ["sections-ul"]);
  li1_5 = DomElm("li", ["up_onhover"], null, "Notes");
  addBtn = DomElm(
    "div",
    ["add", "flex", "flex-center", "up_onhover", "pointer"],
    null,
    "+"
  );
  ul1.append(li1_1, li1_2, li1_3, li1_4, ul2, li1_5);
  nav.append(ul1, addBtn);

  content.append(header, nav, section);
}
