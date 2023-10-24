"use client";

import { Message, MessageType } from "common/dist/types";
import { useEffect } from "react";

// import styles from "./page.module.css";

export default function Home() {
  const onMessage = (event: MessageEvent<MessageType>) => {
    console.log("message received", event.data);
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

  return <div>HERE</div>;
}
