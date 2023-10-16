import { MessageType } from "utils";
import { toggleVisibility, initialize } from "content/base";

import "assets/css/index.css";

(() => {
  initialize();
})();

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  toggleVisibility();
  sendResponse(MessageType.ACTION_CLICKED_RESPONSE); // synchronously
});
