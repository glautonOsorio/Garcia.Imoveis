import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;

    box-sizing: border-box;
  }

  html, body, #root {
    background-color:#e3e6e6;
    font-family: Roboto, sans-serif;
  }
`;

