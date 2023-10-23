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

  return <div>HERE</div>;
}
