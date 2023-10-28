import { MessageType, SendPageDataMessage } from "common/dist/types";

import { panelFrameId } from "utils";

const sendPageData = () => {
  const url = window.location.href;
  const iframe = document.getElementById(panelFrameId) as HTMLIFrameElement;
  const message: SendPageDataMessage = {
    type: MessageType.SEND_PAGE_DATA,
    data: { url },
  };
  iframe.contentWindow?.postMessage(message, "*");
};

export { sendPageData };
