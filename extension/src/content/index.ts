import { MessageType } from "utils";
import { toggleVisibility, initialize } from "content/base";

(() => {
  initialize();
})();

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  toggleVisibility();
  sendResponse(MessageType.ACTION_CLICKED_RESPONSE); // synchronously
});
