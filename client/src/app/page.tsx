"use client";

import { useEffect } from "react";

// import styles from "./page.module.css";

export default function Home() {
  console.log("page");

  const onLoad = () => {
    const message = { type: "GET_PAGE_DATA" }; // TODO: make a "common" package to share types
    window.parent.postMessage(message, "*");
  };

  const onMessage = (event: MessageEvent) => {
    console.log("message received", event.data);
  };

  useEffect(() => {
    onLoad();
  }, []);

  useEffect(() => {
    window.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("message", onMessage);
    };
  }, []);

  return <div>HERE</div>;
}
