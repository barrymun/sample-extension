export const panelWidth: string = "500px";

export const panelId: string = "extension-panel";
export const panelClosedStyle: string = `
    width: 0;
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
    z-index: 10000;
    background-color: #fff;
`;
