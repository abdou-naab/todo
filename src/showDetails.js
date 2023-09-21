import { DomElm } from "./utils";

export const showDetails = () => {
  const div = DomElm("div", [
    "blur-fixed-bg",
    "flex",
    "flex-center",
    "display-none",
  ]).create();
  const container = DomElm("div", [
    "task-details-container",
    "flex",
    "flex-column",
    "small-padd",
  ]).create();

  const renderStructure = () => {
    div.append(container);
    return div;
  };
  const toggleRendering = () => {
    div.classList.toggle("display-none");
  };

  const addDetails = (todoItem) => {
    container.innerHTML = "";
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
    const span2 = DomElm(
      "span",
      ["close-details", "pointer"],
      null,
      "x"
    ).create();
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
      document.querySelector(".nav-active").textContent
    ).create();
    const prioritySpan1 = DomElm("span", null, null, "Priority:").create();
    const prioritySpan2 = DomElm(
      "span",
      ["priority-details"],
      null,
      null,
      todoItem.priority == 2
        ? "High"
        : todoItem.priority == 1
        ? "Medium"
        : "Low"
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
    const finishedSpan1 = DomElm("span", null, null, "state:").create();
    const finishedSpan2 = DomElm(
      "span",
      ["state-details"],
      null,
      null,
      todoItem.state == true ? "task finished" : "task not yet finished"
    ).create();
    more_details.append(
      sectionSpan1,
      sectionSpan2,
      prioritySpan1,
      prioritySpan2,
      duedateSpan1,
      duedateSpan2,
      detailsSpan1,
      detailsSpan2,
      finishedSpan1,
      finishedSpan2
    );
    container.append(details_title_and_close, more_details);
  };

  return { renderStructure, toggleRendering, addDetails };
};
