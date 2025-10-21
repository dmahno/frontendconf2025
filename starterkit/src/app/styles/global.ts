import {createGlobalStyle} from "styled-components";

export const CustomGlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
