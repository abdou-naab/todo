import {
  TodoItem,
  NoteItem,
  changeState,
  deleteItem,
  getDetails,
  toDate,
  constants,
} from "./utils";
import { home } from "./home";
import { showDetails } from "./showDetails";
import { taskCreator } from "./taskCreator";

let body = document.querySelector("body");
let details = showDetails();
let homeSection = home();
let taskCreation = taskCreator();

let itemsOf = {
  0: [
    new TodoItem(
      1,
      "prayer",
      true,
      "5 obligatory prayers a day",
      toDate(undefined),
      2
    ),
  ],
  1: [],
  2: [
    new TodoItem(
      2,
      "leg day",
      false,
      "the weighted squats hearts man ...  ",
      toDate(undefined),
      1
    ),
  ],
  3: [new NoteItem(3, "tazkya", "man you should purify your soul (tazkya)")],
};

window.addEventListener("load", (event) => {
  let data1 = JSON.parse(localStorage.getItem("itemsOf"));
  let sectionNumber = JSON.parse(localStorage.getItem("sectionNumber"));
  let itemId = JSON.parse(localStorage.getItem("itemId"));

  data1 ? (itemsOf = data1) : (itemsOf = itemsOf);
  if (itemId && sectionNumber) {
    constants.setItemId(itemId);
    constants.setSectionNumber(sectionNumber);
  }
  let currentSection = document.querySelector(".nav-active").dataset.navSection;
  addFunctionalities(currentSection);
});
function saveToLocalStorage() {
  localStorage.setItem("itemsOf", JSON.stringify(itemsOf));
  localStorage.setItem("itemId", JSON.stringify(constants.getItemId()));
  localStorage.setItem(
    "sectionNumber",
    JSON.stringify(constants.getSectionNumber())
  );
}
window.addEventListener("unload", saveToLocalStorage);
window.addEventListener("beforeunload", saveToLocalStorage);
window.addEventListener("pagehide", saveToLocalStorage);
document.addEventListener("visibilitychange", (event) => {
  if (document.visibilityState === "hidden") {
    saveToLocalStorage();
  }
});

function changeCurrentStates(i) {
  let todoItemStates = document.querySelectorAll(".todo_item_state");
  todoItemStates.forEach((todoItemState) => {
    todoItemState.addEventListener("click", (e) => {
      changeState(e, itemsOf[i]);
    });
  });
}
function deleteCurrentItems(i) {
  let trashIcons;
  i != 3
    ? (trashIcons = document.querySelectorAll(".todo_item_delete"))
    : (trashIcons = document.querySelectorAll(".note_item_delete"));
  trashIcons.forEach((trashIcon) => {
    trashIcon.addEventListener("click", (e) => {
      i != 3 ? deleteItem(e, itemsOf[i]) : deleteItem(e, itemsOf[i], false);
      if (!document.querySelector(".content section").firstChild) {
        i != 3
          ? homeSection.renderContent(itemsOf[i])
          : homeSection.renderContent(itemsOf[i], false);
      }
    });
  });
}
function showCurrentItemsDetails(i) {
  let detailsBtns = document.querySelectorAll(".todo_item_details");
  detailsBtns.forEach((detailsBtn) => {
    detailsBtn.addEventListener("click", (e) => {
      details.addDetails(getDetails(e, itemsOf[i]));
      details.toggleRendering();
      document
        .querySelector(".close-details")
        .addEventListener("click", (e2) => {
          details.toggleRendering();
        });
    });
  });
}
function addFunctionalities(i) {
  i != 3
    ? homeSection.renderContent(itemsOf[i])
    : homeSection.renderContent(itemsOf[i], false);
  changeCurrentStates(i);
  deleteCurrentItems(i);
  showCurrentItemsDetails(i);
}
function addTodoItem(e) {
  let title = document.querySelector(".task-create-title");
  let details = document.querySelector(".task-create-details");
  let duedate = document.querySelector('input[type="date"]');
  let high = document.getElementById("high-priority");
  let medium = document.getElementById("medium-priority");
  let low = document.getElementById("low-priority");

  let radiosChecker = () => {
    let elm = undefined;
    let temp = [high, medium, low];
    temp.forEach((p) => {
      if (p.checked) {
        if (p == high) {
          elm = 2;
        } else if (p == medium) {
          elm = 1;
        } else {
          elm = 0;
        }
      }
    });
    return elm;
  };
  if (!title.value) {
    title.setCustomValidity("Please fill out this field, make it short!");
    title.reportValidity();
    e.preventDefault();
  } else {
    title.setCustomValidity("");
    if (!details.checkValidity()) {
      details.setCustomValidity("Please fill out this field");
      details.reportValidity();
      e.preventDefault();
    } else {
      details.setCustomValidity("");
      if (!duedate.value) {
        duedate.setCustomValidity("Please fill out this field");
        duedate.reportValidity();
        e.preventDefault();
      } else {
        duedate.setCustomValidity("");
        if (radiosChecker() == undefined) {
          low.setCustomValidity("Set a priority for this field");
          low.reportValidity();
          e.preventDefault();
        } else {
          low.setCustomValidity("");

          //get the data
          let newItem = new TodoItem(
            constants.useItemId(),
            title.value,
            false,
            details.value,
            toDate(duedate.value),
            radiosChecker()
          );
          // get the current section
          let currentSection =
            document.querySelector(".nav-active").dataset.navSection;
          // add it to list
          if (currentSection != 3) {
            itemsOf[currentSection].push(newItem);
            // reset the view
            taskCreation.reset();
            addFunctionalities(currentSection);
          } else {
            itemsOf[0].push(newItem);
            // reset the view
            taskCreation.reset();
            addFunctionalities(0);
          }
        }
      }
    }
  }
}
function addSubSection(e) {
  let title = document.querySelector(".task-create-title");
  if (!title.value) {
    title.setCustomValidity("Please fill out this field, make it short!");
    title.reportValidity();
    e.preventDefault();
  } else {
    title.setCustomValidity("");
    let currentNumber = constants.useSectionNumber();
    homeSection.addSubSection(title.value, currentNumber);
    itemsOf[currentNumber] = [];
    document.querySelector(".nav-active").classList.toggle("nav-active");
    document
      .querySelector(`[data-nav-section = "${currentNumber}"]`)
      .classList.toggle("nav-active");
    taskCreation.reset();
    addFunctionalities(currentNumber);
  }
}
function addNoteItem(e) {
  let title = document.querySelector(".note-item-title");
  let text = document.querySelector(".note-item-text");

  if (!title.value) {
    title.setCustomValidity("Please fill out this field, make it short!");
    title.reportValidity();
    e.preventDefault();
  } else {
    title.setCustomValidity("");
    if (!text.value) {
      title.setCustomValidity("Please fill out this field, make it short!");
      title.reportValidity();
      e.preventDefault();
    } else {
      text.setCustomValidity("");
      let newItem = new NoteItem(
        constants.useItemId(),
        title.value,
        text.value
      );
      console.log("creating note with id : ", newItem);
      document.querySelector(".nav-active").classList.toggle("nav-active");
      document
        .querySelector(`[data-nav-section = '3']`)
        .classList.toggle("nav-active");
      itemsOf[3].push(newItem);
      taskCreation.reset();
      addFunctionalities(3);
    }
  }
}

const Dom = (() => {
  // display the initial thing : (home with one example)
  body.append(homeSection.renderContent(itemsOf[0]));
  body.append(details.renderStructure());
  body.append(taskCreation.renderStructure());
  addFunctionalities(0);
  // update item
  /* TODO */
  //

  // display correct section

  let homeNav = document.querySelector(".home-nav ul");
  homeNav.addEventListener("click", (event) => {
    if (event.target.hasAttribute("data-nav-section")) {
      let activeSection = document.querySelector(".home-nav .nav-active");
      if (event.target != activeSection) {
        event.target.classList.toggle("nav-active");
        activeSection.classList.toggle("nav-active");
      }
      addFunctionalities(event.target.dataset.navSection);
    }
  });

  function nav2Listenner(taskCreationNav) {
    let currentActive = document.querySelector(".nav2-active");
    if (currentActive == taskCreationNav.children[0]) {
      let addTaskBtn = document.querySelector(".add-to-do");
      addTaskBtn.addEventListener("click", addTodoItem);
    } else if (currentActive == taskCreationNav.children[1]) {
      let addTaskBtn = document.querySelector(".add-to-do");
      addTaskBtn.addEventListener("click", addSubSection);
    } else if (currentActive == taskCreationNav.children[2]) {
      let addTaskBtn = document.querySelector(".add-to-do");
      addTaskBtn.addEventListener("click", addNoteItem);
    }
  }
  // add todo ...
  const addBtn = document.querySelector(".add");
  addBtn.addEventListener("click", () => {
    taskCreation.toggleRendering();
    let taskCreationNav = document.querySelector(
      ".task-create-container nav ul"
    );
    nav2Listenner(taskCreationNav);
    taskCreationNav.addEventListener("click", (e) => {
      taskCreation.navListener(e);
      nav2Listenner(taskCreationNav);
    });
    document
      .querySelector(".close-task-creation")
      .addEventListener("click", taskCreation.toggleRendering);
  });
})();
