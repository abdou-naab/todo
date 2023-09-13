import trashCan from "./images/trash-can.svg";
import editPen from "./images/edit-button.png";

export const DomElm = (tag, classes, attrs, html, text) => {
  let elm = document.createElement(tag);
  const create = () => {
    if (classes) {
      for (let c of classes) {
        elm.classList.add(c);
      }
    }
    if (attrs) {
      for (let k of Object.keys(attrs)) {
        elm.setAttribute(k, attrs[k]);
      }
    }
    if (html) {
      elm.innerHTML = html;
    }
    if (text) {
      elm.textContent = text;
    }
    return elm;
  };
  return { create };
};

export function createTodoItem(i) {
  let todoItem = DomElm("div", [
    "todo_item",
    "flex",
    "flex-align-center",
    "small-padd",
    "up_onhover",
  ]).create();
  let state = DomElm("div", [
    "todo_item_state",
    "todo_item_right_marge",
    "pointer",
  ]).create();
  let title = DomElm(
    "div",
    ["todo_item_title", "todo_item_right_marge"],
    null,
    null,
    i.title
  ).create();
  let details = DomElm(
    "div",
    [
      "small-padd",
      "todo_item_details",
      "todo_item_right_marge",
      "pointer",
      "green-btn",
    ],
    null,
    "DETAILS"
  ).create();
  let date = DomElm(
    "div",
    ["todo_item_date", "todo_item_right_marge"],
    null,
    null,
    i.dueDate
  ).create();
  let edit = DomElm(
    "div",
    ["todo_item_edit", "todo_item_right_marge", "pointer"],
    { alt: "trash can", src: trashCan }
  ).create();
  let remove = DomElm("div", ["todo_item_delete", "pointer"], {
    alt: "edit pen",
    src: editPen,
  }).create();
  switch (i.priority) {
    case "high":
      todoItem.style.borderLeft = "var(--r)";
      break;
    case "medium":
      todoItem.style.borderLeft = "var(--o)";
      break;
    case "low":
      todoItem.style.borderLeft = "var(--g)";
      break;
  }
  todoItem.append(state, title, details, date, edit, remove);
  return todoItem;
}
