import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 20px;
  width: 100%;
  .button-wrap {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 40px;
    padding: 40px 5px;
    grid-gap: 50px;
    margin-bottom: 30px;

    .button {
      margin: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: ${props => props.theme.font.TextFont2};
      letter-spacing: 3px;
      font-size: 15px;
      cursor: pointer;
      width: 100%;
      height: 100%;
      color: ${props => props.theme.color.whiteGray};
      background-color: ${props => props.theme.color.darkGreen};
    }

    .now {
      background-color: ${props => props.theme.color.darkGreen};
      outline: 3px solid #f8ca2a;
    }
  }
  p {
    font-size: 18px;
    word-break: keep-all;
    margin: 4px;
    margin-bottom: 6px;

    font-family: ${props => props.theme.font.TextFont2};
  }

  ul {
    list-style: none;
  }
  li {
    word-break: keep-all;
    padding: 0px 0px 0px 10px;
    text-decoration: none;
    font-size: 15px;
    font-family: ${props => props.theme.font.TextFont2};
  }

  article {
    padding-bottom: 10px;
    margin-bottom: 20px;
    border-bottom: 2px solid ${props => props.theme.color.darkGray};
  }

  .span {
    font-family: ${props => props.theme.font.TextFont2};
    font-size: 12px;
    padding-left: 5px;
    word-break: keep-all;
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
      padding: 10px 5px 25px;
      grid-gap: 10px;
      margin: 10px 0px 20px;
      .button {
        font-family: ${props => props.theme.font.TextFont2};
        font-size: 15px;
      }
    }
  }
`;
