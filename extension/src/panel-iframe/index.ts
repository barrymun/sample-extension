import { Message, MessageType } from "utils";

const onMessage = (event: MessageEvent<Message>) => {
  const iframe = document.getElementById("sapphire-panel-frame-remote") as HTMLIFrameElement;
  switch (event.data.type) {
    case MessageType.GET_PAGE_DATA:
      window.parent.postMessage(event.data, "*");
      break;
    case MessageType.SEND_PAGE_DATA:
      iframe.contentWindow?.postMessage(event.data, "*");
      break;
    default:
      break;
  }
};

window.addEventListener("message", onMessage);

window.addEventListener("unload", () => {
  console.log("unloaded");
  window.removeEventListener("message", onMessage);
});
