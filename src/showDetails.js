import { DomElm } from "./utils";
export const showDetails = (todoItem) => {
  const div = DomElm("div", ["blur-fixed-bg", "flex", "flex-center"]).create();
  const container = DomElm("div", [
    "task-details-container",
    "flex",
    "flex-column",
    "small-padd",
  ]).create();
  const details_title_and_close = DomElm("div", [
    "task-details-title-and-close",
    "flex",
    "space-btwn",
    "small-padd",
  ]).create();
  const span1 = DomElm(
    "span",
    ["task-details-title"],
    null,
    null,
    todoItem.title
  ).create();
  const span2 = DomElm("span", ["pointer"], null, "x").create();
  details_title_and_close.append(span1, span2);

  const more_details = DomElm("div", [
    "more-details",
    "small-padd",
    "grid2",
  ]).create();
  const sectionSpan1 = DomElm("span", null, null, "Section:").create();
  const sectionSpan2 = DomElm(
    "span",
    ["section-details"],
    null,
    null,
    todoItem.section
  ).create();
  const prioritySpan1 = DomElm("span", null, null, "Priority:").create();
  const prioritySpan2 = DomElm(
    "span",
    ["priority-details"],
    null,
    null,
    todoItem.priority
  ).create();
  const duedateSpan1 = DomElm("span", null, null, "Due Date:").create();
  const duedateSpan2 = DomElm(
    "span",
    ["duedate-details-details"],
    null,
    null,
    todoItem.dueDate
  ).create();
  const detailsSpan1 = DomElm("span", null, null, "Details:").create();
  const detailsSpan2 = DomElm(
    "span",
    ["details-details"],
    null,
    null,
    todoItem.details
  ).create();
  more_details.append(
    sectionSpan1,
    sectionSpan2,
    prioritySpan1,
    prioritySpan2,
    duedateSpan1,
    duedateSpan2,
    detailsSpan1,
    detailsSpan2
  );
  container.append(details_title_and_close, more_details);
  div.append(container);
  const renderStructure = () => {
    return div;
  };
  const isHidden = () => div.classList.contains("display-none");
  const toggleRendering = () => {
    div.classList.toggle("display-none");
  };
  return { renderStructure, isHidden, toggleRendering };
};
