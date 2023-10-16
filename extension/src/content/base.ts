import { panelClosedStyle, panelFrameStyle, panelId, panelOpenStyle, panelWidth } from "utils";

let isBound: boolean = false;
let panel: HTMLDivElement | undefined;

const bindElementsToPage = () => {
  // if the div has already been added, do nothing
  if (isBound) return;

  // immediately set to true to prevent multiple elements from being added
  isBound = true;

  // append the elements to the DOM

  const linkElement = document.createElement("link");
  linkElement.setAttribute("rel", "stylesheet");
  linkElement.setAttribute("href", chrome.runtime.getURL("assets/css/index.css"));
  document.head.appendChild(linkElement);

  const panel = document.createElement("div");
  panel.setAttribute("id", panelId);
  panel.setAttribute("style", panelClosedStyle);
  document.body.appendChild(panel);

  const iframe = document.createElement("iframe");
  iframe.setAttribute("src", chrome.runtime.getURL("assets/panel.html"));
  iframe.setAttribute("style", panelFrameStyle);
  panel.appendChild(iframe);
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
    getPanel().classList.remove("panel-open");
  } else {
    getPanel().setAttribute("style", panelOpenStyle);
    getPanel().classList.add("panel-open");
  }
};

export { initialize, toggleVisibility };
