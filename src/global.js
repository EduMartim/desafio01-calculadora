import { createGlobalStyle } from "styled-components";

export const colors = {
  background: "#F0F0F0",
  buttonBackground: "#FFFFFF",
  buttonText: "#333333",
  operationButtons: "#FF9500",
  equalButton: "#4CAF50",
  displayBackground: "#E8F5E9",
  displayText: "#212121",
  borderShadow: "#BDBDBD",
};

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
        font: 400 14px Roboto, sans-serif;
        -webkit-font-smoothing: antialiased;
    }
    input, button {
        font: 400 18px Roboto, sans-serif;
    }
    button {
        cursor: pointer;
    }
`;
