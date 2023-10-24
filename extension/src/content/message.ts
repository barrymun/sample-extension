import { Message, MessageType } from "utils";

const sendPageData = () => {
  const url = window.location.href;
  const iframe = document.getElementById("sapphire-panel-frame") as HTMLIFrameElement;
  const message: Message = {
    type: MessageType.SEND_PAGE_DATA,
    data: { url },
  };
  iframe.contentWindow?.postMessage(message, "*");
};

export { sendPageData };
