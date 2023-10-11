export enum MessageType {
  ACTION_CLICKED = "ACTION_CLICKED",
  ACTION_CLICKED_RESPONSE = "ACTION_CLICKED_RESPONSE",
}

export interface Message {
  type: MessageType;
}
