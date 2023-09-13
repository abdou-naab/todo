import { DomElm } from "./utils";

export const taskCreator = () => {
  let container = DomElm("div", [
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
  let section = DomElm("section", [
    "flex",
    "flex-column",
    "space-btwn",
  ]).create();
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
  date_and_priority.innerHTML = `<div class="flex flex-align-center task-create-date">
  <div>Due Date:</div>
  <input class="green-btn small-padd" type="date" required />
</div>
<div class="flex flex-align-center task-create-priorities">
  <div>Priority:</div>
  <input
    type="radio"
    id="low-priority"
    name="priority"
    value="low"
    required
  />
  <label class="pointer small-padd low" for="low-priority"
    >LOW</label
  >
  <input
    type="radio"
    id="medium-priority"
    name="priority"
    value="medium"
    required
  />
  <label class="pointer small-padd medium" for="medium-priority"
    >MEDIUM</label
  >
  <input
    type="radio"
    id="high-priority"
    name="priority"
    value="high"
    required
  />
  <label class="pointer small-padd high" for="high-priority"
    >HIGH</label
  >
</div>`;
  let div_add = DomElm("div", ["flex", "flex-center"]).create();
  div_add.innerHTML = `<span class="add-to-do pointer green-btn small-padd"
>ADD TO DO</span
>`;
  div.append(date_and_priority, div_add);
  section.append(div_txt, div);
  content.append(header, nav, section);
  container.append(content);
  const renderStructure = () => {
    return container;
  };
  const isHidden = () => container.classList.contains("display-none");
  const toggleRendering = () => {
    container.classList.toggle("display-none");
  };
  return { renderStructure, isHidden, toggleRendering };
};
