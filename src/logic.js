import { format } from "date-fns";
import { showMainNavSectionContent, displayUnfinishedTasksNum } from ".";
import removeImg from "../src/images/trash-can.svg";
import editImg from "../src/images/edit-button.png";
const qs = (i) => document.querySelector(i);
const qsa = (i) => document.querySelectorAll(i);

export function toDate(inputDate) {
  let date;
  inputDate ? (date = new Date(inputDate)) : (date = new Date());
  return format(date, "eee, dd MMM yyyy");
}

// localStorage.clear();
export class Note {
  static count = JSON.parse(localStorage.getItem("notes-last_id")) || 1;
  constructor(title, text, id = null) {
    this.id = id || Note.count;
    this.title = title;
    this.text = text;
    if (!id) {
      Note.count++;
    }
    localStorage.setItem("notes-last_id", JSON.stringify(Note.count));
  }
}
export class Todo {
  static count = JSON.parse(localStorage.getItem("todos-last_id")) || 1;
  constructor(title, state, details, dueDate, priority, id = null) {
    this.id = id || Todo.count;
    this.title = title;
    this.state = state;
    this.details = details;
    this.dueDate = dueDate;
    this.priority = priority;
    if (!id) {
      Todo.count++;
    }
    localStorage.setItem("todos-last_id", JSON.stringify(Todo.count));
  }
}
function saveLists(obj) {
  localStorage.setItem(
    Object.keys(obj)[0],
    JSON.stringify(obj[Object.keys(obj)[0]])
  );
}

export const Data = (() => {
  let notes = JSON.parse(localStorage.getItem("notes")) || [
    new Note("notes", "you must take notes bruh"),
  ];

  let todos = JSON.parse(localStorage.getItem("todos"));

  if (!todos) {
    let homeTodo = new Todo(
      "prayer",
      true,
      "5 obligatory prayers a day",
      toDate(undefined),
      2
    );
    let todayTodo = new Todo(
      "exam",
      true,
      "its a must finish the binaa' exam",
      toDate(undefined),
      2
    );
    let weekTodo1 = new Todo(
      "leg day",
      false,
      "its a must, in order to fix the knee",
      toDate(undefined),
      2
    );
    let weekTodo2 = new Todo(
      "Buy stuff",
      false,
      "eeughh",
      toDate(undefined),
      1
    );

    todos = {
      home: [homeTodo, todayTodo, weekTodo1, weekTodo2],
      today: [todayTodo],
      week: [weekTodo1, weekTodo2],
    };
  }

  const loop4id = (list, id, func) => {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id == id) {
        func(i);
        break;
      }
    }
  };
  //   todos.home = todos.home.concat(todos.today, todos.week);
  // localStorage.setItem("todos", JSON.stringify(todos));
  // localStorage.setItem("notes", JSON.stringify(notes));
  saveLists({ notes });
  saveLists({ todos });

  // adding todo : if section is not 'home', the item should be added to it
  const addTodo = (object, section) => {
    if (!section) {
      console.error(
        "You need to specify a section in function 'addTodo',\n its the li's text content in the nav!"
      );
    } else {
      if (section != "home" && section != "notes") {
        todos[section].push(object);
        todos.home.push(object);
        showMainNavSectionContent(qs(" nav.main .nav_active"));
      } else {
        todos.home.unshift(object);
        showMainNavSectionContent(qs(" nav.main li[data-name = 'home']"));
      }
      // localStorage.setItem("todos", JSON.stringify(todos));
      saveLists({ todos });
    }
  };
  const addNote = (object) => {
    notes.push(object);
    // localStorage.setItem("notes", JSON.stringify(notes));
    saveLists({ notes });
    showMainNavSectionContent(qs(" nav.main li[data-name = 'notes']"));
  };

  const updateNote = (object) => {
    loop4id(notes, object.id, (i) => {
      notes[i] = object;
    });
    saveLists({ notes });
  };
  // update todo : must search for all its instances.
  const updateTodo = (object) => {
    for (let section in todos) {
      loop4id(todos[section], object.id, (i) => {
        todos[section][i] = object;
      });
    }

    saveLists({ todos });
  };
  const updateTodoState = (id, bool) => {
    for (let section in todos) {
      loop4id(todos[section], id, (i) => {
        todos[section][i].state = bool;
      });
    }

    saveLists({ todos });
  };
  const removeNote = (id) => {
    loop4id(notes, id, (i) => {
      notes.splice(i, 1);
    });
    saveLists({ notes });
  };
  const removeTodo = (id) => {
    for (let section in todos) {
      loop4id(todos[section], id, (i) => {
        todos[section].splice(i, 1);
      });
    }
    saveLists({ todos });
  };
  const getTodoItem = (id) => {
    let temp;
    for (let section in todos) {
      loop4id(todos[section], id, (i) => {
        temp = todos[section][i];
      });
    }
    return temp;
  };

  const getTodos = (s = "home") => {
    return todos[s];
  };
  const getNotes = () => {
    return notes;
  };
  const getSubSections = () => {
    let temp = [];
    for (let key of Object.keys(todos)) {
      if (key != "home" && key != "today" && key != "week") {
        temp.push(key);
      }
    }
    return temp;
  };
  const getStats = (section) => {
    let temp = 0;
    for (let i = 0; i < todos[section].length; i++) {
      if (!todos[section][i].state) {
        temp++;
      }
    }
    return temp;
  };
  const SubSections = (() => {
    const ul = qs("nav.main .folders .sub-sections");

    const add = (name) => {
      const allSections = qsa("nav.main ul li");
      if ([...allSections].some((e) => e.dataset.name == name)) {
        return;
      }
      if (name) {
        let exists = todos.hasOwnProperty(name);
        let s = document.createElement("li");
        s.textContent = name;
        s.dataset.name = name;
        if (!exists) {
          todos[`${name}`] = [];
        }
        // addListenerToMainNavSections(s);
        s.classList.add("flex-row");
        let span = document.createElement("span");
        span.classList.add("todos-undone");
        s.appendChild(span);
        s.addEventListener("click", () => {
          showMainNavSectionContent(s);
        });
        if (!exists) {
          showMainNavSectionContent(s);
        }
        displayUnfinishedTasksNum(s);
        ul.appendChild(s);
        saveLists({ todos });
      }
    };
    const remove = (name) => {
      const lis = qsa(".folders .sub-sections li");
      for (let li of lis) {
        if (li.dataset.name == name) {
          li.remove();
          delete todos[`${name}`];
          saveLists({ todos });
          break;
        }
      }
    };
    return { add, remove };
  })();
  return {
    getStats,
    getSubSections,
    getTodoItem,
    updateTodoState,
    SubSections,
    addTodo,
    addNote,
    updateNote,
    getNotes,
    getTodos,
    updateTodo,
    removeNote,
    removeTodo,
  };
})();

export const ItemsManager = (() => {
  const createTodoElement = (i) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    const checkBox = document.createElement("input");
    checkBox.setAttribute("class", "cursor");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("id", "state");
    checkBox.setAttribute("name", "state");
    if (i.state) {
      checkBox.checked = true;
    }
    const title = document.createElement("span");
    title.classList.add("title");
    title.innerText = i.title;
    const emptySpan = document.createElement("span");
    const details = document.createElement("button");
    details.classList.add("btn_green_borders", "cursor");
    details.setAttribute("name", "details");
    details.innerText = "DETAILS";
    const date = document.createElement("span");
    date.classList.add("due-date");
    date.innerText = i.dueDate;
    const edit = document.createElement("img");
    edit.setAttribute("class", "cursor");
    edit.setAttribute("alt", "editing pen");
    edit.setAttribute("name", "edit");
    edit.setAttribute("src", editImg);
    const remove = document.createElement("img");
    remove.setAttribute("class", "cursor");
    remove.setAttribute("alt", "trash can");
    remove.setAttribute("name", "remove");
    remove.setAttribute("src", removeImg),
      todoItem.append(checkBox, title, emptySpan, details, date, edit, remove);
    todoItem.dataset.id = i.id;
    i.priority == 0
      ? (todoItem.style.cssText = "border-left: 5px solid var(--g)")
      : i.priority == 1
      ? (todoItem.style.cssText = "border-left: 5px solid var(--o)")
      : (todoItem.style.cssText = "border-left: 5px solid var(--r)");
    return todoItem;
  };
  const createNoteElement = (i) => {
    const NoteItem = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", "#");
    a.setAttribute("contenteditable", "");
    const h2 = document.createElement("h2");

    const p = document.createElement("p");
    h2.textContent = i.title;
    p.textContent = i.text;
    a.append(h2, p);
    NoteItem.append(a);
    NoteItem.dataset.id = i.id;

    const spanClose = document.createElement("span");
    spanClose.textContent = "x";
    spanClose.classList.add("cursor");
    spanClose.setAttribute("name", "close-note");
    a.appendChild(spanClose);

    return NoteItem;
  };

  return { createTodoElement, createNoteElement };
})();

export const UpdatePanel = (() => {
  const todo = (id, hideFunc) => {
    const todoElm = Data.getTodoItem(id);
    const form = document.createElement("form");

    const textAreas = document.createElement("div");
    textAreas.classList.add("flex-column");
    const title = document.createElement("textarea");
    title.setAttribute("placeholder", "Title: read book");
    title.setAttribute("name", "item_title");
    title.setAttribute("maxlength", "20");
    title.setAttribute("required", "");
    title.textContent = todoElm.title;
    const description = document.createElement("textarea");
    description.setAttribute(
      "placeholder",
      "Details: basa'ir book by dr. haitham talaat"
    );
    description.setAttribute("name", "item_description");
    description.setAttribute("rows", "8");
    description.setAttribute("maxlength", "600");
    description.value = todoElm.details;
    textAreas.append(title, description);

    const bottomContent = document.createElement("div");
    bottomContent.classList.add("bottom-content");
    const date_and_prios = document.createElement("div");
    date_and_prios.classList.add("date-and-prios");

    const dueDate = document.createElement("div");
    dueDate.classList.add("due-date");
    const span1 = document.createElement("span");
    span1.textContent = "Due Date:";
    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("name", "date_date");
    dateInput.setAttribute("required", "");
    dateInput.value = new Date(todoElm.dueDate).toISOString().split("T")[0];
    dueDate.append(span1, dateInput);

    const priorities = document.createElement("div");
    const span2 = document.createElement("span");
    span2.textContent = "Priority:";

    const lowLabel = document.createElement("label");
    lowLabel.textContent = "Low";
    lowLabel.setAttribute("for", "low-priority");
    const lowInput = document.createElement("input");
    lowInput.setAttribute("type", "radio");
    lowInput.setAttribute("id", "low-priority");
    lowInput.setAttribute("name", "priority");
    lowInput.setAttribute("data-n", "0");
    lowInput.setAttribute("required", "");

    const mediumLabel = document.createElement("label");
    mediumLabel.textContent = "Medium";
    mediumLabel.setAttribute("for", "medium-priority");
    const mediumInput = document.createElement("input");
    mediumInput.setAttribute("type", "radio");
    mediumInput.setAttribute("id", "medium-priority");
    mediumInput.setAttribute("name", "priority");
    mediumInput.setAttribute("data-n", "1");
    mediumInput.setAttribute("required", "");

    const highLabel = document.createElement("label");
    highLabel.textContent = "High";
    highLabel.setAttribute("for", "high-priority");
    const highInput = document.createElement("input");
    highInput.setAttribute("type", "radio");
    highInput.setAttribute("id", "high-priority");
    highInput.setAttribute("name", "priority");
    highInput.setAttribute("data-n", "2");
    highInput.setAttribute("required", "");

    if (todoElm.priority == 0) {
      lowInput.checked = true;
      lowLabel.classList.add("priority_0");
    } else if (todoElm.priority == 1) {
      mediumInput.checked = true;
      mediumLabel.classList.add("priority_1");
    } else {
      highInput.checked = true;
      highLabel.classList.add("priority_2");
    }
    priorities.append(
      span2,
      lowInput,
      lowLabel,
      mediumInput,
      mediumLabel,
      highInput,
      highLabel
    );
    date_and_prios.append(dueDate, priorities);

    const button = document.createElement("button");
    button.classList.add("btn_green_borders", "cursor");
    button.setAttribute("type", "submit");
    button.textContent = "Update Todo";

    bottomContent.append(date_and_prios, button);
    form.append(textAreas, bottomContent);

    // priotity color
    const priorColor = (radio, label) => {
      const n2label = {
        0: lowLabel,
        1: mediumLabel,
        2: highLabel,
      };

      radio.addEventListener("click", (event) => {
        if (event.target.checked) {
          label.classList.add(`priority_${event.target.dataset.n}`);
          [0, 1, 2]
            .filter((n) => n != event.target.dataset.n)
            .forEach((n) => {
              n2label[n].classList.remove(`priority_${n}`);
            });
        }
      });
    };
    priorColor(lowInput, lowLabel);
    priorColor(mediumInput, mediumLabel);
    priorColor(highInput, highLabel);
    // do the listener directly here
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (form.reportValidity()) {
        const obj = new Todo(
          title.value,
          todoElm.state,
          description.value,
          toDate(dateInput.value),
          [lowInput, mediumInput, highInput].findIndex((r) => r.checked),
          todoElm.id
        );
        Data.updateTodo(obj);
        hideFunc();
        showMainNavSectionContent(qs(" nav.main .nav_active"));
      }
    });
    return form;
  };
  const note = (title, text, id) => {
    Data.updateNote(new Note(title, text, id));
  };
  return { todo, note };
})();
export const CreationPanel = (() => {
  const section = (() => {
    const form = document.createElement("form");
    const title = document.createElement("textarea");
    title.setAttribute("placeholder", "Name: new section");
    title.setAttribute("name", "item_title");
    title.setAttribute("maxlength", "15");
    title.setAttribute("required", "");

    const bottomContent = document.createElement("div");
    bottomContent.classList.add("bottom-content");
    const date_and_prios = document.createElement("div");
    date_and_prios.classList.add("date-and-prios");
    const button = document.createElement("button");
    button.classList.add("btn_green_borders", "cursor");
    button.setAttribute("type", "submit");
    button.textContent = "Add Section";

    bottomContent.append(date_and_prios, button);
    form.append(title, bottomContent);
    const getForm = () => {
      return form;
    };
    const addObj = () => {
      Data.SubSections.add(title.value);
    };
    const reset = () => {
      title.value = "";

      qs(".creation-panel .folders .nav_active").classList.remove("nav_active");
      qs('.creation-panel .folders li[data-name = "todo"]').classList.add(
        "nav_active"
      );
    };
    return { getForm, addObj, reset };
  })();
  const todo = (() => {
    const form = document.createElement("form");

    const textAreas = document.createElement("div");
    textAreas.classList.add("flex-column");
    const title = document.createElement("textarea");
    title.setAttribute("placeholder", "Title: read book");
    title.setAttribute("name", "item_title");
    title.setAttribute("maxlength", "20");
    title.setAttribute("required", "");
    const description = document.createElement("textarea");
    description.setAttribute(
      "placeholder",
      "Details: basa'ir book by dr. haitham talaat"
    );
    description.setAttribute("name", "item_description");
    description.setAttribute("rows", "8");
    description.setAttribute("maxlength", "600");
    textAreas.append(title, description);

    const bottomContent = document.createElement("div");
    bottomContent.classList.add("bottom-content");
    const date_and_prios = document.createElement("div");
    date_and_prios.classList.add("date-and-prios");

    const dueDate = document.createElement("div");
    dueDate.classList.add("due-date");
    const span1 = document.createElement("span");
    span1.textContent = "Due Date:";
    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("name", "date_date");
    dateInput.setAttribute("required", "");
    dueDate.append(span1, dateInput);

    const priorities = document.createElement("div");
    const span2 = document.createElement("span");
    span2.textContent = "Priority:";

    const lowLabel = document.createElement("label");
    lowLabel.textContent = "Low";
    lowLabel.setAttribute("for", "low-priority");
    const lowInput = document.createElement("input");
    lowInput.setAttribute("type", "radio");
    lowInput.setAttribute("id", "low-priority");
    lowInput.setAttribute("name", "priority");
    lowInput.setAttribute("data-n", "0");
    lowInput.setAttribute("required", "");

    const mediumLabel = document.createElement("label");
    mediumLabel.textContent = "Medium";
    mediumLabel.setAttribute("for", "medium-priority");
    const mediumInput = document.createElement("input");
    mediumInput.setAttribute("type", "radio");
    mediumInput.setAttribute("id", "medium-priority");
    mediumInput.setAttribute("name", "priority");
    mediumInput.setAttribute("data-n", "1");
    mediumInput.setAttribute("required", "");

    const highLabel = document.createElement("label");
    highLabel.textContent = "High";
    highLabel.setAttribute("for", "high-priority");
    const highInput = document.createElement("input");
    highInput.setAttribute("type", "radio");
    highInput.setAttribute("id", "high-priority");
    highInput.setAttribute("name", "priority");
    highInput.setAttribute("data-n", "2");
    highInput.setAttribute("required", "");

    priorities.append(
      span2,
      lowInput,
      lowLabel,
      mediumInput,
      mediumLabel,
      highInput,
      highLabel
    );
    date_and_prios.append(dueDate, priorities);

    const button = document.createElement("button");
    button.classList.add("btn_green_borders", "cursor");
    button.setAttribute("type", "submit");
    button.textContent = "Add Todo";

    bottomContent.append(date_and_prios, button);
    form.append(textAreas, bottomContent);

    // priotity color
    const priorColor = (radio, label) => {
      const n2label = {
        0: lowLabel,
        1: mediumLabel,
        2: highLabel,
      };

      radio.addEventListener("click", (event) => {
        if (event.target.checked) {
          label.classList.add(`priority_${event.target.dataset.n}`);
          [0, 1, 2]
            .filter((n) => n != event.target.dataset.n)
            .forEach((n) => {
              n2label[n].classList.remove(`priority_${n}`);
            });
        }
      });
    };
    priorColor(lowInput, lowLabel);
    priorColor(mediumInput, mediumLabel);
    priorColor(highInput, highLabel);

    const getForm = (id) => {
      if (!id) {
        return form;
      } else {
        const todo = Data.getTodoItem(id);
        title.value = todo.title;
        description.value = todo.details;
        dateInput.value = new Date(todo.dueDate).toISOString().split("T")[0];
        if (todo.priority == 0) {
          lowInput.checked = true;
          lowLabel.classList.add("priority_0");
        } else if (todo.priority == 1) {
          mediumInput.checked = true;
          mediumLabel.classList.add("priority_1");
        } else {
          highInput.checked = true;
          highLabel.classList.add("priority_2");
        }
        button.textContent = "Update Todo";
        return form;
      }
    };
    const addObj = () => {
      const obj = new Todo(
        title.value,
        false,
        description.value,
        toDate(dateInput.value),
        [lowInput, mediumInput, highInput].findIndex((r) => r.checked)
      );
      Data.addTodo(obj, qs(" nav.main .nav_active").dataset.name);
    };
    const reset = () => {
      title.value = "";
      description.value = "";
      dateInput.value = "";
      [lowInput, mediumInput, highInput].forEach((r) => {
        r.checked = false;
      });
      lowLabel.classList.remove("priority_0");
      mediumLabel.classList.remove("priority_1");
      highLabel.classList.remove("priority_2");

      qs(".creation-panel .folders .nav_active").classList.remove("nav_active");
      qs('.creation-panel .folders li[data-name = "todo"]').classList.add(
        "nav_active"
      );
    };
    return { getForm, addObj, reset };
  })();
  const note = (() => {
    const form = document.createElement("form");

    const textAreas = document.createElement("div");
    textAreas.classList.add("flex-column");
    const title = document.createElement("textarea");
    title.setAttribute("placeholder", "Title: new note");
    title.setAttribute("name", "item_title");
    title.setAttribute("maxlength", "15");
    title.setAttribute("required", "");

    const description = document.createElement("textarea");
    description.setAttribute("placeholder", "Details: take notes ...");
    description.setAttribute("name", "item_description");
    description.setAttribute("rows", "8");
    description.setAttribute("required", "");
    description.setAttribute("maxlength", "600");
    textAreas.append(title, description);

    const bottomContent = document.createElement("div");
    bottomContent.classList.add("bottom-content");
    const date_and_prios = document.createElement("div");
    date_and_prios.classList.add("date-and-prios");
    const button = document.createElement("button");
    button.classList.add("btn_green_borders", "cursor");
    button.setAttribute("type", "submit");
    button.textContent = "Add Note";

    bottomContent.append(date_and_prios, button);
    form.append(textAreas, bottomContent);

    const getForm = () => {
      return form;
    };
    const addObj = () => {
      const obj = new Note(title.value, description.value);
      Data.addNote(obj);
    };
    const reset = () => {
      title.value = "";
      description.value = "";
      qs(".creation-panel .folders .nav_active").classList.remove("nav_active");
      qs('.creation-panel .folders li[data-name = "todo"]').classList.add(
        "nav_active"
      );
    };
    return { getForm, addObj, reset };
  })();

  return { todo, section, note };
})();
// export const editPanel = (() => {
//   return { todo }
// })();
