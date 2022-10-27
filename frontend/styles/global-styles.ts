import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fafafa ;

    //드래그 방지 코드
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none
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
    margin: 0;
    padding: 0;
  }

  h1 {
    font-family: 'DM Serif Display', serif;
    margin: 0;
    padding: 0;
    /* font-family: 'Abril Fatface', cursive;
    font-family: 'Black Han Sans', sans-serif;
    font-family: 'Prata', serif; */
  }

  h2 {
    margin: 0;
    padding: 0;
    font-family: 'DM Serif Display', serif;
  }

  h3 {
    margin: 0;
    padding: 0;
    font-family: 'DM Serif Display', serif;
  }
`;

export default GlobalStyle;
