import "./style.css";
// localStorage.clear();
class Note {
  static count = JSON.parse(localStorage.getItem("notes-last_id")) || 1;
  constructor(title, text) {
    this.id = Note.count;
    this.title = title;
    this.text = text;
    Note.count++;
    localStorage.setItem("notes-last_id", JSON.stringify(Note.count));
  }
}
class Todo {
  static count = JSON.parse(localStorage.getItem("todos-last_id")) || 1;
  constructor(title, state, details, dueDate, priority) {
    this.id = Todo.count;
    this.title = title;
    this.state = state;
    this.details = details;
    this.dueDate = dueDate;
    this.priority = priority;
    Todo.count++;
    localStorage.setItem("todos-last_id", JSON.stringify(Todo.count));
  }
}

const data = () => {
  let notes = JSON.parse(localStorage.getItem("notes")) || [
    new Note("notes", "you must take notes bruh"),
  ];
  let todos = JSON.parse(localStorage.getItem("todos")) || {
    home: [
      new Todo("prayer", false, "5 obligatory prayers a day", "21-21-2321", 2),
    ],
    today: [],
    week: [
      new Todo(
        "leg day",
        false,
        "its a must in order to fix the knee",
        "21-21-2321",
        2
      ),
      new Todo("shopping", false, "eeughh", "21-21-2321", 1),
    ],
  };
  const addTodo = (object, section) => {
    if (!section) {
      console.error(
        "You need to specify a section in function 'addTodo',\n its the li's text content in the nav!"
      );
    } else {
      todos[section].push(object);
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };
  const addNote = (object) => {
    notes.push(object);
    localStorage.setItem("notes", JSON.stringify(notes));
  };
  // Save the initial state to localStorage
  localStorage.setItem("todos", JSON.stringify(todos));
  localStorage.setItem("notes", JSON.stringify(notes));
  return { addTodo, addNote, notes, todos };
};

let d = data();
console.table(d.notes);
for (let key in d.todos) {
  console.table(d.todos[key]);
}
