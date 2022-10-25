import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fafafa ;
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  p {
    font-family: 'DM Serif Display', serif;
  }

  h1 {
    font-family: 'DM Serif Display', serif;
    /* font-family: 'Abril Fatface', cursive;
    font-family: 'Black Han Sans', sans-serif;
    font-family: 'Prata', serif; */
  }
`;

export default GlobalStyle;
