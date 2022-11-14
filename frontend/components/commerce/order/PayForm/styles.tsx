import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  .button-wrap {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 55px;
    padding: 20px 5px;
    grid-gap: 50px;

    margin: 10px 0px 30px;
    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: ${props => props.theme.font.TextFont2};
      letter-spacing: 7px;
      font-size: 25px;
      cursor: pointer;
      width: 100%;
      height: 100%;
      color: ${props => props.theme.color.ivory};
      /* background-color: rgba(37, 63, 47, 0.8); */
      background-color: ${props => props.theme.color.darkGreen};
    }

    .now {
      outline: 5px solid ${props => props.theme.color.brown};
      color: ${props => props.theme.color.ivoryHover};
    }
  }
  p {
    font-size: 24px;
    font-family: ${props => props.theme.font.TextFont2};
  }

  ul {
    list-style: none;
  }
  li {
    word-break: keep-all;
    padding: 0px 0px 0px 10px;
    text-decoration: none;
    font-size: 24px;
    font-family: ${props => props.theme.font.TextFont2};
  }

  .flex {
    display: flex;
    justify-content: center;
    margin: 60px 0px 120px;
    .button {
      height: 55px;
      width: 500px;
    }
  }

  @media screen and (max-width: 600px) {
    .button-wrap {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 45px;
      padding: 20px 5px;
      grid-gap: 50px;
      margin: 10px 0px 20px;
      .button {
        font-family: ${props => props.theme.font.TextFont2};
        font-size: 20px;
      }
    }
    p {
      font-size: 20px;
    }

    li {
      font-size: 18px;
    }

    .flex {
      .button {
        height: 50px;
        width: 500px;
      }
    }
  }
`;
