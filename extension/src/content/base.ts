import { panelClosedStyle, panelId, panelOpenStyle, panelWidth } from "utils";

let isBound: boolean = false;
let panel: HTMLDivElement | undefined;

const bindElementsToPage = () => {
  // if the div has already been added, do nothing
  if (isBound) return;

  // immediately set to true to prevent multiple elements from being added
  isBound = true;

  // append the elements to the DOM
  const panel = document.createElement("div");
  panel.setAttribute("id", panelId);
  panel.setAttribute("style", panelClosedStyle);
  document.body.appendChild(panel);
};

const initialize = () => {
  bindElementsToPage();

  panel = document.getElementById(panelId)! as HTMLDivElement;
};

const getPanel = (): HTMLDivElement => {
  return panel!;
};

const isPanelOpen = (): boolean => {
  return getPanel().style.width === panelWidth;
};

const toggleVisibility = () => {
  if (isPanelOpen()) {
    getPanel().setAttribute("style", panelClosedStyle);
  } else {
    getPanel().setAttribute("style", panelOpenStyle);
  }
};

export { initialize, toggleVisibility };
