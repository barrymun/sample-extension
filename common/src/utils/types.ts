export enum MessageType {
  ACTION_CLICKED = "ACTION_CLICKED",
  ACTION_CLICKED_RESPONSE = "ACTION_CLICKED_RESPONSE",
  GET_PAGE_DATA = "GET_PAGE_DATA",
  SEND_PAGE_DATA = "SEND_PAGE_DATA",
}

export interface Message {
  type: MessageType;
}

export interface SendPageDataMessage extends Message {
  data: {
    url: string;
  };
}
