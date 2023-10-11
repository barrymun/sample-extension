import { MessageType } from "../utils";

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // if (!actionController) return;
  // actionController.toggleVisibility();
  sendResponse(MessageType.ACTION_CLICKED_RESPONSE); // synchronously
});
