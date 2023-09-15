import { DomElm, TodoItem } from "./utils";

export const taskCreator = () => {
  let container = DomElm("div", [
    "display-none",
    "blur-fixed-bg",
    "flex",
    "flex-center",
  ]).create();
  let content = DomElm("div", ["task-create-container", "grid"]).create();
  let header = DomElm("header", [
    "flex",
    "space-btwn",
    "flex-align-center",
  ]).create();
  let span1 = DomElm("span", null, null, null, "Create New ...").create();
  let span2 = DomElm("span", ["pointer"], null, null, "x").create();
  header.append(span1, span2);
  let nav = DomElm("nav").create();
  let ul1 = DomElm("ul").create();
  let li1_1 = DomElm(
    "li",
    ["nav-active", "up_onhover", "small-padd"],
    null,
    "ToDo"
  ).create();
  let li1_2 = DomElm(
    "li",
    ["up_onhover", "small-padd"],
    null,
    "Section"
  ).create();
  let li1_3 = DomElm("li", ["up_onhover", "small-padd"], null, "Note").create();
  ul1.append(li1_1, li1_2, li1_3);
  nav.append(ul1);
  let section = DomElm("section", [
    "flex",
    "flex-column",
    "space-btwn",
  ]).create();

  const renderStructure = () => {
    let div_txt = DomElm("div", ["texts", "flex", "flex-column"]).create();
    let txtArea1 = DomElm("textarea", ["task-create-title"], {
      placeholder: "Title: Pay bills",
      name: "task-create-title",
      maxlength: "40",
      required: true,
    }).create();
    let txtArea2 = DomElm("textarea", ["task-create-details"], {
      placeholder: "Details: e.g internet, phone, rent.",
      name: "task-create-details",
    }).create();
    div_txt.append(txtArea1, txtArea2);
    let div = DomElm("div", ["flex", "space-btwn"]).create();
    let date_and_priority = DomElm("div", [
      "date-and-priority",
      "flex",
      "flex-column",
    ]).create();

    let taskCreateDate = DomElm("div", [
      "flex",
      "flex-align-center",
      "task-create-date",
      "flex-wrap",
    ]).create();
    let dueDateInput = DomElm("input", ["green-btn", "small-padd"], {
      type: "date",
      required: true,
    }).create();
    taskCreateDate.append(
      DomElm("div", [], null, null, "Due Date:").create(),
      dueDateInput
    );
    let taskCreatePriorities = DomElm("div", [
      "flex",
      "flex-align-center",
      "task-create-priorities",
      "flex-wrap",
    ]).create();
    let lowPriority = DomElm("input", [], {
      type: "radio",
      id: "low-priority",
      name: "priority",
      value: "low",
      required: true,
    }).create();
    let lowPriorityLable = DomElm(
      "label",
      ["pointer", "small-padd", "low"],
      { for: "low-priority" },
      null,
      "LOW"
    ).create();
    let mediumPriority = DomElm("input", [], {
      type: "radio",
      id: "medium-priority",
      name: "priority",
      value: "medium",
      required: true,
    }).create();
    let mediumPriorityLable = DomElm(
      "label",
      ["pointer", "small-padd", "medium"],
      { for: "medium-priority" },
      null,
      "MEDIUM"
    ).create();
    let highPriority = DomElm("input", [], {
      type: "radio",
      id: "high-priority",
      name: "priority",
      value: "high",
      required: true,
    }).create();
    let highPriorityLable = DomElm(
      "label",
      ["pointer", "small-padd", "high"],
      { for: "high-priority" },
      null,
      "HIGH"
    ).create();
    taskCreatePriorities.append(
      DomElm("div", null, null, null, "Priority:").create(),
      lowPriority,
      lowPriorityLable,
      mediumPriority,
      mediumPriorityLable,
      highPriority,
      highPriorityLable
    );
    date_and_priority.append(taskCreateDate, taskCreatePriorities);

    let div_add = DomElm("div", ["flex", "flex-center"]).create();
    let addTodoBtn = DomElm(
      "span",
      ["add-to-do", "pointer", "green-btn", "small-padd"],
      null,
      null,
      "ADD TO DO"
    ).create();
    div_add.append(addTodoBtn);

    div.append(date_and_priority, div_add);
    section.append(div_txt, div);
    content.append(header, nav, section);
    container.append(content);
    return container;
  };

  const isHidden = () => container.classList.contains("display-none");
  const toggleRendering = () => {
    container.classList.toggle("display-none");
  };
  const closeListener = (e) => {
    span2.addEventListener("click", (e) => {
      toggleRendering();
    });
  };

  let li_s = [li1_1, li1_2, li1_3];
  const navListener = (e) => {
    let currentActive = document.querySelector(
      ".task-create-container .nav-active"
    );
    if (li_s.includes(e.target)) {
      if (e.target != currentActive) {
        e.target.classList.toggle("nav-active");
        currentActive.classList.toggle("nav-active");
      }
    }
  };
  return {
    renderStructure,
    isHidden,
    toggleRendering,
    closeListener,
    navListener,
  };
};
