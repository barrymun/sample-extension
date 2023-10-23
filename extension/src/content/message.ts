const sendPageData = () => {
  const url = window.location.href;
  const iframe = document.getElementById("sapphire-panel-frame") as HTMLIFrameElement;
  console.log({ url });
  iframe.contentWindow?.postMessage({ url }, "*");
};

export { sendPageData };
