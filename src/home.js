import { DomElm, createTodoItem, createNoteItem } from "./utils";
let otherSectionCount = 4;

export const home = () => {
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
    { "data-nav-section": 0 },
    "Home"
  ).create();
  let li1_2 = DomElm(
    "li",
    ["up_onhover", "small-padd"],
    { "data-nav-section": 1 },
    "Today"
  ).create();
  let li1_3 = DomElm(
    "li",
    ["up_onhover", "small-padd"],
    { "data-nav-section": 2 },
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
    { "data-nav-section": 3 },
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

  const renderContent = (todos, todolist = true) => {
    if (!todos.length) {
      section.classList = "";
      section.classList.add("flex", "flex-column", "flex-align-center");
      section.innerHTML =
        DomElm("h2", null, null, null, "Well ...").create().outerHTML +
        DomElm("h5", null, null, null, "nothing to show here!").create()
          .outerHTML;
    } else {
      section.innerHTML = "";
      todos.forEach((i) => {
        if (todolist) {
          section.classList = "";
          section.classList.add("flex", "flex-column", "flex-align-center");
          section.append(createTodoItem(i).todoItem);
        } else {
          section.classList = "";
          section.classList.add("flex", "flex-wrap", "small-padd");
          section.append(createNoteItem(i).noteItem);
        }
      });
    }
    return content;
  };
  const addSubSection = (name, number) => {
    let li = DomElm(
      "li",
      ["up_onhover", "small-padd"],
      { "data-nav-section": number },
      name
    ).create();
    ul2.append(li);
    return content;
  };

  return { renderContent, addSubSection };
};
