const onLoad = () => {
  console.log("loaded");
  window.parent.postMessage({ x: "x" }, "*");
};

const onMessage = (event: MessageEvent) => {
  console.log(event.data);
};

window.addEventListener("load", onLoad);
window.addEventListener("message", onMessage);

window.addEventListener("unload", () => {
  console.log("unloaded");
  window.removeEventListener("load", onLoad);
  window.removeEventListener("message", onMessage);
});
