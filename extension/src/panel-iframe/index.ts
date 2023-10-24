import { Message, MessageType } from "utils";

const onLoad = () => {
  console.log("loaded");
  const message: Message = { type: MessageType.GET_PAGE_DATA };
  window.parent.postMessage(message, "*");
};

const onMessage = (event: MessageEvent<Message>) => {
  console.log(event.data);
};

window.addEventListener("load", onLoad);
window.addEventListener("message", onMessage);

window.addEventListener("unload", () => {
  console.log("unloaded");
  window.removeEventListener("load", onLoad);
  window.removeEventListener("message", onMessage);
});
