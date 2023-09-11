export function DomElm(tag, classes, attrs, html, text) {
  let elm = document.createElement(tag);
  const create = () => {
    if (classes) {
      for (c of classes) {
        elm.classList.add(c);
      }
    }
    if (attrs) {
      for (k in Object.keys(attrs)) {
        elm.setAttribute(k, attrs[k]);
      }
    }
    if (html) {
      elm.textContent = html;
    }
    if (text) {
      elm.textContent = text;
    }
    return elm;
  };
  return { create };
}

export function createTodoItem() {}
