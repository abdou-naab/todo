class TodoItem {
  constructor(title, state, details, dueDate, priority, finished) {
    this.title = title;
    this.state = state;
    this.details = details;
    this.dueDate = dueDate;
    this.priority = priority;
    this.finished = finished;
  }
}
const todoItemsOfSection = {
  home: [],
  Today: [],
  week: [],
  otherSection: {},
  Notes: [],
};
