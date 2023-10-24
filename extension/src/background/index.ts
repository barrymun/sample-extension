import { Message, MessageType } from "common/dist/types";

chrome.action.onClicked.addListener((tab) => {
  if (!tab.id) return;
  const message: Message = { type: MessageType.ACTION_CLICKED };
  chrome.tabs.sendMessage(tab.id, message);
});
