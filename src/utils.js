import trashCan from "./images/trash-can.svg";
import editPen from "./images/edit-button.png";
import { format } from "date-fns";

export let constants = (() => {
  let sectionNumber = 3;
  let itemId = 3;
  const useSectionNumber = () => {
    sectionNumber++;
    return sectionNumber;
  };
  const useItemId = () => {
    itemId++;
    return itemId;
  };
  const getSectionNumber = () => {
    return sectionNumber;
  };
  const setSectionNumber = (n) => {
    return (sectionNumber = n);
  };
  const getItemId = () => {
    return itemId;
  };
  const setItemId = (n) => {
    return (itemId = n);
  };
  return {
    useItemId,
    useSectionNumber,
    getSectionNumber,
    getItemId,
    setSectionNumber,
    setItemId,
  };
})();

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

export const createTodoItem = (i) => {
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
    "flex",
    "flex-center",
  ]).create();
  if (i.state) {
    state.classList.add("bg-g");
    state.append(DomElm("span", null, null, "&#10004;").create());
  } else {
    state.classList.remove("bg-g");
  }
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
    "img",
    ["todo_item_edit", "todo_item_right_marge", "pointer"],
    {
      alt: "edit pen",
      src: editPen,
    }
  ).create();
  let remove = DomElm("img", ["todo_item_delete", "pointer"], {
    alt: "trash can",
    src: trashCan,
  }).create();
  switch (i.priority) {
    case 2:
      todoItem.style.borderLeft = "3px solid var(--r)";
      break;
    case 1:
      todoItem.style.borderLeft = "3px solid  var(--o)";
      break;
    case 0:
      todoItem.style.borderLeft = "3px solid  var(--g)";
      break;
  }
  todoItem.append(state, title, details, date, edit, remove);
  todoItem.dataset.todoId = i.id;

  return { todoItem };
};
export function createNoteItem(i) {
  let noteItem = DomElm("div", [
    "note_item",
    "flex",
    "flex-column",
    "small-padd",
    "up_onhover",
  ]).create();
  let div1 = DomElm("div", ["flex", "space-btwn", "small-padd"]).create();
  let t = DomElm(
    "span",
    ["flex", "space-btwn", "small-padd"],
    null,
    null,
    i.title
  ).create();
  let x = DomElm(
    "span",
    ["flex", "pointer", "space-btwn", "small-padd", "note_item_delete"],
    null,
    "x"
  ).create();
  let div2 = DomElm("div", ["flex", "small-padd"], null, null, i.text).create();
  div1.append(t, x);
  noteItem.append(div1, div2);
  noteItem.dataset.noteId = i.id;
  return { noteItem };
}

export function changeState(e, todos) {
  let elm = e.currentTarget;
  if (!elm.firstChild) {
    elm.append(DomElm("span", null, null, "&#10004;").create());
    elm.classList.add("bg-g");
  } else {
    elm.firstChild.remove();
    elm.classList.remove("bg-g");
  }
  for (let i of todos) {
    if (i.id == elm.parentElement.dataset.todoId) {
      i.state = !i.state;
      break;
    }
  }
}
export function deleteItem(e, todos, todolist = true) {
  let elm = e.currentTarget;

  if (todolist) {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == elm.parentElement.dataset.todoId) {
        todos.splice(i, 1);
        break;
      }
    }
    elm.parentElement.remove();
  } else {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == elm.parentElement.parentElement.dataset.noteId) {
        todos.splice(i, 1);
        break;
      }
    }
    elm.parentElement.parentElement.remove();
  }
}
export function getDetails(e, todos) {
  let elm = e.currentTarget;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == elm.parentElement.dataset.todoId) {
      return todos[i];
    }
  }
}
export class TodoItem {
  constructor(id, title, state, details, dueDate, priority) {
    this.id = id;
    this.title = title;
    this.state = state;
    this.details = details;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

export class NoteItem {
  constructor(id, title, text) {
    this.id = id;
    this.title = title;
    this.text = text;
  }
}

export function toDate(inputDate) {
  let date;
  inputDate ? (date = new Date(inputDate)) : (date = new Date());
  return format(date, "eee, dd MMM yyyy");
}
