export const panelWidth: string = "500px";

export const panelId: string = "sapphire-panel";
export const panelClosedStyle: string = `
    width: 0;
    opacity: 0;
    transform: translateX(100%);
    transition: opacity 0.3s, transform 0.3s;
`;
export const panelOpenStyle: string = `
    position: fixed;
    top: 20px;
    right: 20px;
    bottom: 20px;
    height: calc(100% - 40px);
    width: ${panelWidth};
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    z-index: 2147483647;
    background-color: #fff;
    opacity: 1;
    transform: translateX(0);
    transition: opacity 0.3s, transform 0.3s;
`;
