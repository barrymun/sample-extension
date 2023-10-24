"use client";

import { useEffect } from "react";

// import styles from "./page.module.css";

export default function Home() {
  const onMessage = (event: MessageEvent) => {
    console.log("message received", event.data);
  };

  useEffect(() => {
    window.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("message", onMessage);
    };
  }, []);

  const onLoad = () => {
    const message = { type: "GET_PAGE_DATA" }; // TODO: make a "common" package to share types
    window.parent.postMessage(message, "*");
  };

  useEffect(() => {
    onLoad();
  }, []);

  return <div>HERE</div>;
}
