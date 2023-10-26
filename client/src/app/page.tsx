"use client";

import { SendPageDataMessage, MessageType, Message } from "common/dist/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [pageData, setPageData] = useState<SendPageDataMessage["data"] | undefined>();

  const onMessage = (event: MessageEvent<SendPageDataMessage>) => {
    switch (event.data.type) {
      case MessageType.SEND_PAGE_DATA:
        setPageData(event.data.data);
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("message", onMessage);
    };
  }, []);

  const onLoad = () => {
    const message: Message = { type: MessageType.GET_PAGE_DATA };
    window.parent.postMessage(message, "*");
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div>
      <h1>Page</h1>
      <p>{pageData?.url}</p>
    </div>
  );
}
