import "./style.css";
import { CreationPanel as CP, Data } from "./logic";
import { ItemsManager } from "./logic";
const qs = (i) => document.querySelector(i);
const qsa = (i) => document.querySelectorAll(i);
let addUtilities = qs(".add_utilities");
let creationPanel = qs(".creation-panel");
let detailsPanel = qs(".details-panel");

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
function itemEditListener(panel = creationPanel) {
  const updateBtns = qsa("body > section.main img[name = 'edit']");
  updateBtns.forEach((db) => {
    db.addEventListener("click", (e) => {
      const id = e.target.parentElement.dataset.id;
      // do stuff ...
    });
  });
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
  }
}

/*            Main             */
const Main = () => {
  let mainNavLis = qsa("nav.main ul li");
  addTodosElms2MainSection();
  stateListener();
  deleteTodoListener();
  itemDetailslistener();
  itemEditListener();
  for (let li of mainNavLis) {
    // the folowwing are applied to the original,
    // you need to call 'em also on the new instances ...
    li.addEventListener("click", () => {
      showMainNavSectionContent(li);
    });
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
