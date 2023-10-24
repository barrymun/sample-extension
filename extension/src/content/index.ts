import { Message, MessageType } from "common/dist/types";

import { toggleVisibility, initialize, initializeUpdateListener } from "content/base";
import { sendPageData } from "content/message";

import "assets/css/index.css";

(() => {
  initialize();
  initializeUpdateListener(sendPageData);
})();

window.addEventListener("message", (event: MessageEvent<Message>) => {
  switch (event.data.type) {
    case MessageType.GET_PAGE_DATA:
      sendPageData();
      break;
    default:
      break;
  }
});

chrome.runtime.onMessage.addListener(function (request: Message, sender, sendResponse) {
  if (request.type === MessageType.ACTION_CLICKED) {
    toggleVisibility();
    sendResponse(MessageType.ACTION_CLICKED_RESPONSE); // synchronously
  }
});
