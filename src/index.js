import "./style.css";
import { CreationPanel as CP, Data, UpdatePanel as UP } from "./logic";
import { ItemsManager } from "./logic";
const qs = (i) => document.querySelector(i);
const qsa = (i) => document.querySelectorAll(i);
let addUtilities = qs(".add_utilities");
let creationPanel = qs(".creation-panel");
let detailsPanel = qs(".details-panel");
let updatePanel = qs(".update-panel");
const CreateItemPopUp = (panel = creationPanel) => {
  let bluredBg = qs(".blured-fixed-bg");
  let renderDefault = () => {
    bluredBg.classList.remove("hide");
    panel.classList.remove("hide");
    render(qs(" .creation-panel nav ul .nav_active").dataset.name);
  };
  let hide = () => {
    bluredBg.classList.add("hide");
    panel.classList.add("hide");
  };
  let render = (s = "todo", id = undefined) => {
    panel.children[panel.children.length - 1].innerHTML = "";
    panel.children[panel.children.length - 1].append(CP[`${s}`].getForm(id));
  };

  const addItems = (form) => {
    // const form = qs(".creation-panel section form ");
    form.addEventListener("submit", (e) => {
      let activeSubSectionNavLi = qs(".creation-panel nav .nav_active");
      e.preventDefault();
      if (form.reportValidity()) {
        CP[`${activeSubSectionNavLi.dataset.name}`].addObj();
        CP[`${activeSubSectionNavLi.dataset.name}`].reset();
        hide();
      }
    });
  };
  addItems(CP.todo.getForm());
  addItems(CP.section.getForm());
  addItems(CP.note.getForm());

  const navChanger = () => {
    let CPNavLis = qsa(".creation-panel nav ul li");
    for (let li of CPNavLis) {
      li.addEventListener("click", () => {
        let activeCPNavLis = qs(" .creation-panel nav ul .nav_active");
        if (li != activeCPNavLis) {
          activeCPNavLis.classList.remove("nav_active");
          li.classList.add("nav_active");
          render(li.dataset.name);
        }
      });
    }
  };
  return { renderDefault, hide, render, addItems, navChanger };
};

// show todos
export function addTodosElms2MainSection(section = "home") {
  let main = qs("body > section.main");
  main.classList = "";
  main.classList.add("todo-section", "main");
  main.innerHTML = "";
  let data = Data.getTodos(section);
  if (data.length) {
    data.forEach((i) => {
      main.append(ItemsManager.createTodoElement(i));
    });
    let mainNavLis = qsa("nav.main ul li");
    for (let li of mainNavLis) {
      displayUnfinishedTasksNum(li);
    }
  }
}
// show notes
export function addNotesElms2MainSection() {
  let main = qs("body > section.main");
  let ul = document.createElement("ul");
  main.classList = "";
  main.classList.add("note-section", "main");
  main.innerHTML = "";

  let data = Data.getNotes();
  if (data.length) {
    data.forEach((i) => {
      ul.append(ItemsManager.createNoteElement(i));
    });
  }
  main.append(ul);
}

// states listener
function stateListener() {
  let stateCheckBoxes = qsa("body > section.main input[name = 'state']");
  stateCheckBoxes.forEach((cb) => {
    cb.addEventListener("click", (e) => {
      const id = e.target.parentElement.dataset.id;
      const bool = e.target.checked;
      Data.updateTodoState(id, bool);
      let mainNavLis = qsa("nav.main ul li");
      for (let li of mainNavLis) {
        displayUnfinishedTasksNum(li);
      }
    });
  });
}
function deleteTodoListener() {
  let trashCans = qsa("body > section.main img[name = 'remove']");
  trashCans.forEach((tc) => {
    tc.addEventListener("click", (e) => {
      const id = e.target.parentElement.dataset.id;
      e.target.parentElement.remove();
      Data.removeTodo(id);
      let mainNavLis = qsa("nav.main ul li");
      for (let li of mainNavLis) {
        displayUnfinishedTasksNum(li);
      }
      displayWhenEmpty();
    });
  });
}
function deleteNoteListener() {
  let xs = qsa("body > section.main span[name = 'close-note']");
  xs.forEach((x) => {
    x.addEventListener("click", (e) => {
      const id = e.target.parentElement.parentElement.dataset.id;
      e.target.parentElement.parentElement.remove();
      Data.removeNote(id);
    });
  });
}
function itemDetailslistener(panel = detailsPanel) {
  let bluredBg = qs(".blured-fixed-bg");
  function render(i) {
    bluredBg.classList.remove("hide");
    panel.classList.remove("hide");
    const n2name = {
      0: "Low",
      1: "medium",
      2: "High",
    };
    qs(".details-panel header .title").innerText = i.title;
    qs(".details-panel span.section").innerText = qs(
      " nav.main .nav_active"
    ).dataset.name;
    qs(".details-panel span.priority").innerText = n2name[i.priority];
    i.state
      ? (qs(".details-panel span.state").innerText = "Task is done")
      : (qs(".details-panel span.state").innerText = "Task is not done yet ");
    qs(".details-panel span.due_date").innerText = i.dueDate;
    qs(".details-panel span.details").innerText = i.details;
  }
  function hide() {
    bluredBg.classList.add("hide");
    panel.classList.add("hide");
  }
  const detailsBtns = qsa("body > section.main button[name = 'details']");
  detailsBtns.forEach((db) => {
    db.addEventListener("click", (e) => {
      const id = e.target.parentElement.dataset.id;
      render(Data.getTodoItem(id));
      qs(".close_details").addEventListener("click", hide);
    });
  });
}
const UpdateItemPopUp = (s = "todo", id = undefined, panel = updatePanel) => {
  let bluredBg = qs(".blured-fixed-bg");

  let hide = () => {
    bluredBg.classList.add("hide");
    panel.classList.add("hide");
  };
  let render = () => {
    const form = UP[s](id, hide);
    bluredBg.classList.remove("hide");
    panel.classList.remove("hide");
    panel.children[panel.children.length - 1].innerHTML = "";
    panel.children[panel.children.length - 1].append(form);
    qs(".close_update").addEventListener("click", () => {
      bluredBg.classList.add("hide");
      panel.classList.add("hide");
    });
  };

  return { render, hide };
};
function itemEditListener(s = "todo") {
  if (s == "todo") {
    const updateBtns = qsa("body > section.main img[name = 'edit']");
    updateBtns.forEach((db) => {
      db.addEventListener("click", (e) => {
        const id = e.target.parentElement.dataset.id;
        let updatePopUp = UpdateItemPopUp("todo", id);
        updatePopUp.render();
      });
    });
  } else if (s == "note") {
    const notes = qsa(" body .note-section li a ");
    notes.forEach((n) => {
      n.addEventListener("keyup", (e) => {
        UP.note(
          e.target.children[0].textContent,
          e.target.children[1].textContent,
          e.target.parentElement.dataset.id
        );
      });
    });
  }
}
// main nav listener
export function showMainNavSectionContent(li) {
  let activeMainNavLi = qs(" nav.main .nav_active");
  if (li != activeMainNavLi) {
    activeMainNavLi.classList.remove("nav_active");
    li.classList.add("nav_active");
  }
  if (li.dataset.name != "notes") {
    addTodosElms2MainSection(li.dataset.name);
    stateListener();
    deleteTodoListener();
    itemDetailslistener();
    itemEditListener();
  } else {
    addNotesElms2MainSection();
    deleteNoteListener();
    itemEditListener("note");
  }
}

function addSubsections2MainNav() {
  for (let key of Data.getSubSections()) {
    Data.SubSections.add(key);
  }
}
function displayWhenEmpty() {
  let section = qs("section.main");
  let activeNav = qs("nav.main .nav_active");
  let sectionName = activeNav.dataset.name;

  if (section.children.length == 0) {
    let h2 = document.createElement("h2");
    h2.textContent = "no todos to do!";
    let btn = document.createElement("button");
    btn.classList.add("btn_green_borders");
    btn.textContent = "Remove Section";
    section.append(h2);
    if (!["home", "notes", "week", "today"].includes(sectionName)) {
      section.append(btn);
      btn.addEventListener("click", () => {
        showMainNavSectionContent(qs('nav.main li[data-name = "home"]'));
        Data.SubSections.remove(sectionName);
      });
    }
  }
}
export function displayUnfinishedTasksNum(li) {
  let n;
  if (li.dataset.name != "notes") {
    n = Data.getStats(li.dataset.name);
  }

  if (n && n != 0) {
    if (li.children.length) {
      li.children[0].textContent = n;
    } else {
      let span = document.createElement("span");
      span.classList.add("todos-undone");
      span.textContent = n;
      li.append(span);
    }
  } else {
    if (li.children.length) {
      li.children[0].remove();
    }
  }
}
/*            Main             */
const Main = () => {
  addSubsections2MainNav();
  addTodosElms2MainSection();
  stateListener();
  deleteTodoListener();
  itemDetailslistener();
  itemEditListener();

  displayWhenEmpty();
  let mainNavLis = qsa("nav.main ul li");
  for (let li of mainNavLis) {
    li.addEventListener("click", () => {
      showMainNavSectionContent(li);
      displayWhenEmpty();
    });
    displayUnfinishedTasksNum(li);
  }

  let creationPopUP = CreateItemPopUp();
  addUtilities.addEventListener("click", () => {
    creationPopUP.renderDefault();
    qs(".close_it").addEventListener("click", creationPopUP.hide);
    creationPopUP.navChanger();
  });

  return {};
};
let main = Main();
