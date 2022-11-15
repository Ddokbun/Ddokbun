import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  margin: auto;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  grid-gap: 100px;
  max-width: 1250px;
  width: 100%;
  height: 500px;
  padding: 50px 50px;
  .row {
    width: 100%;
  }
  .row h1 {
    color: ${props => props.theme.color.mainGreen};
    margin: 0px !important;
    padding: 0px;
    font-size: 50px;
    margin-bottom: 20px;
    font-weight: 500;
  }

  .sub-title {
    margin: 0px;
    border-bottom: 3px solid ${props => props.theme.color.darkGreen};
  }
  .button {
    margin: auto;
    height: 55px;
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${props => props.theme.font.TextFont2};
    letter-spacing: 7px;
    font-size: 25px;
    cursor: pointer;
    color: ${props => props.theme.color.ivory};
    /* background-color: rgba(37, 63, 47, 0.8); */
    background-color: ${props => props.theme.color.darkGreen};
    margin-bottom: 200px;
  }

  @media screen and (max-width: 600px) {
    display: grid;
    margin: auto;
    max-width: 1250px;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-gap: 100px;
    width: 100%;
    height: 500px;
    padding: 50px 50px;
    .row {
      width: 100%;
    }
    .row h1 {
      color: ${props => props.theme.color.mainGreen};
      margin: 0px !important;
      padding: 0px;
      font-size: 50px;
      margin-bottom: 20px;
      font-weight: 500;
    }

    .sub-title {
      margin: 0px;
      border-bottom: 3px solid ${props => props.theme.color.darkGreen};
    }
    .button {
      margin: auto;
      height: 55px;
      width: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: ${props => props.theme.font.TextFont2};
      letter-spacing: 7px;
      font-size: 25px;
      cursor: pointer;
      color: ${props => props.theme.color.ivory};
      /* background-color: rgba(37, 63, 47, 0.8); */
      background-color: ${props => props.theme.color.darkGreen};
      margin-bottom: 200px;
    }
  }

  @media screen and (max-width: 600px) {
    grid-gap: 100px;

    padding: 50px 25px;

    .row h1 {
      color: ${props => props.theme.color.mainGreen};
      margin: 0px !important;
      padding: 0px;
      font-size: 50px;
      margin-bottom: 20px;
      font-weight: 500;
    }

    .sub-title {
      margin: 0px;
      border-bottom: 3px solid ${props => props.theme.color.darkGreen};
    }
    .button {
      margin: auto;
      height: 55px;
      width: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: ${props => props.theme.font.TextFont2};
      letter-spacing: 7px;
      font-size: 25px;
      cursor: pointer;
      color: ${props => props.theme.color.ivory};
      /* background-color: rgba(37, 63, 47, 0.8); */
      background-color: ${props => props.theme.color.darkGreen};
      margin-bottom: 200px;
    }
  }
`;
