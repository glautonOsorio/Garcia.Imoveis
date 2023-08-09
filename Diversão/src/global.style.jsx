import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;

    box-sizing: border-box;
  }

  html, body, #root {
    width: 100vw;
    height: 100vh;
    background-color:#e3e6e6;
  }
`;
